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
import merlinUrl from "./merlin.gif";

const WizardBrowser = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 20px" }}>
      <h1>Greatest Wizards of All Times</h1>
      <img src={merlinUrl} />
      <hr />
      <GetAllWizardsComponent>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          const { findManyWizards: wizards } = data!;
          return (
            <DeleteAccomplishmentComponent update={updateCacheAfterDelete}>
              {(deleteAccomplishment, { data }) => (
                <ul style={{ textAlign: "left" }}>
                  {wizards!.map(
                    wizard =>
                      wizard && (
                        <WizardListItem {...{ wizard, deleteAccomplishment }} />
                      )
                  )}
                </ul>
              )}
            </DeleteAccomplishmentComponent>
          );
        }}
      </GetAllWizardsComponent>
      <hr />
      <div style={{ textAlign: "left", padding: "20px" }}>
        <strong>ProTip:</strong> Use the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/apollographql/apollo-client-devtools"
        >
          Apollo Dev Tools
        </a>{" "}
        to explore the GraphQL queries/mutations performed by the above
        components.
      </div>
      <hr />
      <div style={{ textAlign: "left", padding: "20px" }}>
        <strong>Found an Issue ?</strong> We are here to help. Use the{" "}
        <a href="https://github.com/gql-dal/greldal-starter/issues">
          github issue tracker
        </a>{" "}
        for bugs and suggestions.
      </div>
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
    findManyWizards: result.findManyWizards.map(wizard => ({
      ...wizard,
      accomplishments: wizard!.accomplishments!.filter(a => a && a.id !== id)
    }))
  };
  cache.writeQuery({
    query: GetAllWizardsDocument,
    data: newResult
  });
};
