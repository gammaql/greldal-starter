import React from "react";
import {
  Wizard,
  DeleteAccomplishmentMutation,
  DeleteAccomplishmentMutationVariables
} from "./generated/graphql";
import { MutationFn } from "react-apollo";

const WizardListItem = (props: {
  wizard: Wizard;
  deleteAccomplishment: MutationFn<
    DeleteAccomplishmentMutation,
    DeleteAccomplishmentMutationVariables
  >;
}) => (
  <li>
    <h2>
      {props.wizard.name} ({props.wizard.age} years old)
    </h2>
    {props.wizard.accomplishments && props.wizard.accomplishments.length > 0 && (
      <>
        <h3> Accomplishments </h3>
        <ul>
          {props.wizard.accomplishments.map(
            accomplishment =>
              accomplishment && (
                <li>
                  {accomplishment.title}
                  <button
                    className="del-btn"
                    onClick={e => {
                      props.deleteAccomplishment({
                        variables: {
                          id: accomplishment.id!
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
);

export default WizardListItem;
