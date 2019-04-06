type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Accomplishment = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  wizard_id?: Maybe<Scalars["Int"]>;
};

export type AccomplishmentInput = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  wizard_id?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  insertOneAccomplishment?: Maybe<ShallowAccomplishment>;
  insertManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>;
  updateOneAccomplishment?: Maybe<ShallowAccomplishment>;
  updateManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>;
  deleteOneAccomplishment?: Maybe<ShallowAccomplishment>;
  deleteManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>;
};

export type MutationInsertOneAccomplishmentArgs = {
  entity?: Maybe<AccomplishmentInput>;
};

export type MutationInsertManyAccomplishmentsArgs = {
  entities?: Maybe<Array<Maybe<AccomplishmentInput>>>;
};

export type MutationUpdateOneAccomplishmentArgs = {
  where: AccomplishmentInput;
  update: AccomplishmentInput;
};

export type MutationUpdateManyAccomplishmentsArgs = {
  where: AccomplishmentInput;
  update: AccomplishmentInput;
};

export type MutationDeleteOneAccomplishmentArgs = {
  where: AccomplishmentInput;
};

export type MutationDeleteManyAccomplishmentsArgs = {
  where: AccomplishmentInput;
};

export type Query = {
  findOneWizard?: Maybe<Wizard>;
  findManyWizards?: Maybe<Array<Maybe<Wizard>>>;
  findOneAccomplishment?: Maybe<Accomplishment>;
  findManyAccomplishments?: Maybe<Array<Maybe<Accomplishment>>>;
};

export type QueryFindOneWizardArgs = {
  where: WizardInput;
};

export type QueryFindManyWizardsArgs = {
  where: WizardInput;
};

export type QueryFindOneAccomplishmentArgs = {
  where: AccomplishmentInput;
};

export type QueryFindManyAccomplishmentsArgs = {
  where: AccomplishmentInput;
};

export type ShallowAccomplishment = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  wizard_id?: Maybe<Scalars["Int"]>;
};

export type Wizard = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  accomplishments?: Maybe<Array<Maybe<Accomplishment>>>;
};

export type WizardAccomplishmentsArgs = {
  where?: Maybe<AccomplishmentInput>;
};

export type WizardInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
};
export type GetAllWizardsQueryVariables = {};

export type GetAllWizardsQuery = { __typename?: "query" } & {
  findManyWizards: Maybe<
    Array<
      Maybe<
        { __typename?: "Wizard" } & Pick<Wizard, "id" | "name" | "age"> & {
            accomplishments: Maybe<
              Array<
                Maybe<
                  { __typename?: "Accomplishment" } & Pick<
                    Accomplishment,
                    "id" | "title"
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type DeleteAccomplishmentMutationVariables = {
  id: Scalars["ID"];
};

export type DeleteAccomplishmentMutation = { __typename?: "mutation" } & {
  deleteOneAccomplishment: Maybe<
    { __typename?: "ShallowAccomplishment" } & Pick<ShallowAccomplishment, "id">
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

export const GetAllWizardsDocument = gql`
  query getAllWizards {
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

export class GetAllWizardsComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetAllWizardsQuery, GetAllWizardsQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetAllWizardsQuery, GetAllWizardsQueryVariables>
        query={GetAllWizardsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllWizardsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetAllWizardsQuery, GetAllWizardsQueryVariables>
> &
  TChildProps;
export function withGetAllWizards<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllWizardsQuery,
        GetAllWizardsQueryVariables,
        GetAllWizardsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetAllWizardsQuery,
    GetAllWizardsQueryVariables,
    GetAllWizardsProps<TChildProps>
  >(GetAllWizardsDocument, operationOptions);
}
export const DeleteAccomplishmentDocument = gql`
  mutation deleteAccomplishment($id: ID!) {
    deleteOneAccomplishment(where: { id: $id }) {
      id
    }
  }
`;

export class DeleteAccomplishmentComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DeleteAccomplishmentMutation,
      DeleteAccomplishmentMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DeleteAccomplishmentMutation,
        DeleteAccomplishmentMutationVariables
      >
        mutation={DeleteAccomplishmentDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteAccomplishmentProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DeleteAccomplishmentMutation,
    DeleteAccomplishmentMutationVariables
  >
> &
  TChildProps;
export type DeleteAccomplishmentMutationFn = ReactApollo.MutationFn<
  DeleteAccomplishmentMutation,
  DeleteAccomplishmentMutationVariables
>;
export function withDeleteAccomplishment<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteAccomplishmentMutation,
        DeleteAccomplishmentMutationVariables,
        DeleteAccomplishmentProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteAccomplishmentMutation,
    DeleteAccomplishmentMutationVariables,
    DeleteAccomplishmentProps<TChildProps>
  >(DeleteAccomplishmentDocument, operationOptions);
}
