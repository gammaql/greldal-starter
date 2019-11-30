import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Accomplishment = {
   __typename?: 'Accomplishment',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  wizard_id?: Maybe<Scalars['Int']>,
};

export type AccomplishmentInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  wizard_id?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'mutation',
  insertOneAccomplishment?: Maybe<ShallowAccomplishment>,
  insertManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>,
  updateOneAccomplishment?: Maybe<ShallowAccomplishment>,
  updateManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>,
  deleteOneAccomplishment?: Maybe<ShallowAccomplishment>,
  deleteManyAccomplishments?: Maybe<Array<Maybe<ShallowAccomplishment>>>,
};


export type MutationInsertOneAccomplishmentArgs = {
  entity?: Maybe<AccomplishmentInput>
};


export type MutationInsertManyAccomplishmentsArgs = {
  entities?: Maybe<Array<Maybe<AccomplishmentInput>>>
};


export type MutationUpdateOneAccomplishmentArgs = {
  where: AccomplishmentInput,
  update: AccomplishmentInput
};


export type MutationUpdateManyAccomplishmentsArgs = {
  where: AccomplishmentInput,
  update: AccomplishmentInput
};


export type MutationDeleteOneAccomplishmentArgs = {
  where: AccomplishmentInput
};


export type MutationDeleteManyAccomplishmentsArgs = {
  where: AccomplishmentInput
};

export type Query = {
   __typename?: 'query',
  findOneWizard?: Maybe<Wizard>,
  findManyWizards?: Maybe<Array<Maybe<Wizard>>>,
  findOneAccomplishment?: Maybe<Accomplishment>,
  findManyAccomplishments?: Maybe<Array<Maybe<Accomplishment>>>,
};


export type QueryFindOneWizardArgs = {
  where: WizardInput
};


export type QueryFindManyWizardsArgs = {
  where: WizardInput
};


export type QueryFindOneAccomplishmentArgs = {
  where: AccomplishmentInput
};


export type QueryFindManyAccomplishmentsArgs = {
  where: AccomplishmentInput
};

export type ShallowAccomplishment = {
   __typename?: 'ShallowAccomplishment',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  wizard_id?: Maybe<Scalars['Int']>,
};

export type Wizard = {
   __typename?: 'Wizard',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
  accomplishments?: Maybe<Array<Maybe<Accomplishment>>>,
};


export type WizardAccomplishmentsArgs = {
  where?: Maybe<AccomplishmentInput>
};

export type WizardInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
};

export type GetAllWizardsQueryVariables = {};


export type GetAllWizardsQuery = (
  { __typename?: 'query' }
  & { findManyWizards: Maybe<Array<Maybe<(
    { __typename?: 'Wizard' }
    & Pick<Wizard, 'id' | 'name' | 'age'>
    & { accomplishments: Maybe<Array<Maybe<(
      { __typename?: 'Accomplishment' }
      & Pick<Accomplishment, 'id' | 'title'>
    )>>> }
  )>>> }
);

export type DeleteAccomplishmentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAccomplishmentMutation = (
  { __typename?: 'mutation' }
  & { deleteOneAccomplishment: Maybe<(
    { __typename?: 'ShallowAccomplishment' }
    & Pick<ShallowAccomplishment, 'id'>
  )> }
);


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
export type GetAllWizardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllWizardsQuery, GetAllWizardsQueryVariables>, 'query'>;

    export const GetAllWizardsComponent = (props: GetAllWizardsComponentProps) => (
      <ApolloReactComponents.Query<GetAllWizardsQuery, GetAllWizardsQueryVariables> query={GetAllWizardsDocument} {...props} />
    );
    
export type GetAllWizardsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllWizardsQuery, GetAllWizardsQueryVariables> | TChildProps;
export function withGetAllWizards<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllWizardsQuery,
  GetAllWizardsQueryVariables,
  GetAllWizardsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllWizardsQuery, GetAllWizardsQueryVariables, GetAllWizardsProps<TChildProps>>(GetAllWizardsDocument, {
      alias: 'getAllWizards',
      ...operationOptions
    });
};
export type GetAllWizardsQueryResult = ApolloReactCommon.QueryResult<GetAllWizardsQuery, GetAllWizardsQueryVariables>;
export const DeleteAccomplishmentDocument = gql`
    mutation deleteAccomplishment($id: ID!) {
  deleteOneAccomplishment(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteAccomplishmentMutationFn = ApolloReactCommon.MutationFunction<DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables>;
export type DeleteAccomplishmentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables>, 'mutation'>;

    export const DeleteAccomplishmentComponent = (props: DeleteAccomplishmentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables> mutation={DeleteAccomplishmentDocument} {...props} />
    );
    
export type DeleteAccomplishmentProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables> | TChildProps;
export function withDeleteAccomplishment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAccomplishmentMutation,
  DeleteAccomplishmentMutationVariables,
  DeleteAccomplishmentProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables, DeleteAccomplishmentProps<TChildProps>>(DeleteAccomplishmentDocument, {
      alias: 'deleteAccomplishment',
      ...operationOptions
    });
};
export type DeleteAccomplishmentMutationResult = ApolloReactCommon.MutationResult<DeleteAccomplishmentMutation>;
export type DeleteAccomplishmentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAccomplishmentMutation, DeleteAccomplishmentMutationVariables>;