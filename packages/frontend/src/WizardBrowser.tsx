import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

const GET_ALL_WIZARDS = gql`
  query {
    findManyWizards(where: {}) {
      id
      name
      age
      accomplishments {
        id
        title
      }
    }
  }
`;

const REMOVE_ACCOMPLISHMENT = gql`
  mutation removeAccomplishment($id: ID!) {
    deleteOneAccomplishment(where: { id: $id }) {
      id
    }
  }
`;

const WizardBrowser = () => {
  return (
    <div style={{ textAlign: "left", padding: "0 20px" }}>
      <h1>Greatest Wizards of All Times</h1>
      <Query query={GET_ALL_WIZARDS}>
        {({ loading, error, data: { findManyWizards: wizards } }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          return (
            <Mutation 
              mutation={REMOVE_ACCOMPLISHMENT}
              update={(cache, {data: {deleteOneAccomplishment: {id}}}) => {
                const result: any = cache.readQuery({query: GET_ALL_WIZARDS});
                const newResult = {
                  findManyWizards: result.findManyWizards.map((wizard: any) => ({
                    ...wizard,
                    accomplishments: wizard.accomplishments.filter((a: any) => a.id !== id)
                  }))
                }
                cache.writeQuery({
                  query: GET_ALL_WIZARDS,
                  data: newResult
                })
              }}
            >
              {(removeAccomplishment, { data }) => (
                <ul>
                  {wizards.map((wizard: any) => (
                    <li>
                      <h2>
                        {wizard.name} ({wizard.age} years old)
                      </h2>
                      {wizard.accomplishments.length > 0 && (
                        <>
                          <h3> Accomplishments </h3>
                          <ul>
                            {wizard.accomplishments.map(
                              (accomplishment: any) => (
                                <li>
                                  {accomplishment.title}
                                  <button
                                    onClick={e => {
                                      removeAccomplishment({
                                        variables: {
                                          id: accomplishment.id
                                        }
                                      });
                                    }}
                                  >
                                    Remove
                                  </button>
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Mutation>
          );
        }}
      </Query>
    </div>
  );
};

export default WizardBrowser;
