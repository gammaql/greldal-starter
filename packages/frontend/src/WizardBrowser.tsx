import React from "react";
import {
  GetAllWizardsComponent,
  GetAllWizardsDocument,
  DeleteAccomplishmentComponent,
  DeleteAccomplishmentMutation,
  GetAllWizardsQuery
} from "./generated/graphql";
import { DataProxy } from "apollo-cache";
import { MutationUpdaterFn } from "apollo-boost";
import WizardListItem from "./WizardListItem";

const WizardBrowser = () => {
  return (
    <div style={{ textAlign: "left", padding: "0 20px" }}>
      <h1>Greatest Wizards of All Times</h1>
      <GetAllWizardsComponent>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          const { findManyWizards: wizards } = data!;
          return (
            <DeleteAccomplishmentComponent update={updateCacheAfterDelete}>
              {(deleteAccomplishment, { data }) => (
                <ul>
                  {wizards!.map((wizard) => wizard && (
                    <WizardListItem {...{wizard, deleteAccomplishment}} />
                  ))}
                </ul>
              )}
            </DeleteAccomplishmentComponent>
          );
        }}
      </GetAllWizardsComponent>
    </div>
  );
};

export default WizardBrowser;

const updateCacheAfterDelete: MutationUpdaterFn<
  DeleteAccomplishmentMutation
> = (cache: DataProxy, { data }) => {
  const id =
    data && data.deleteOneAccomplishment && data.deleteOneAccomplishment.id;
  if (!id) return;
  const result = cache.readQuery<GetAllWizardsQuery>({
    query: GetAllWizardsDocument
  });
  if (!result || !result.findManyWizards) return;
  const newResult = {
    findManyWizards: result.findManyWizards.map((wizard) => ({
      ...wizard,
      accomplishments: (wizard!.accomplishments!).filter((a) => a && a.id !== id)
    }))
  };
  cache.writeQuery({
    query: GetAllWizardsDocument,
    data: newResult
  });
};
