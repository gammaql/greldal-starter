# greldal-starter

This is a bare-bones application which you can use a starting point for a full-stack [GraphQL](https://graphql.org/) based application powered by [Node.js](https://nodejs.org/), [React](https://reactjs.org/) and [GRelDAL](https://github.com/gql-dal/greldal).

This repository follows a mono-repo structure, with two packages: frontend and backend.

## Backend

The backend is a GraphQL server which exposes data stored in a PostgreSQL database through a [GRelDAL](https://github.com/gql-dal/greldal) powered [GraphQL](https://graphql.org/) API.

## Frontend

The frontend is a modification of the [create-react-app](https://facebook.github.io/create-react-app/) scaffold, which talks to the backend through apollo client. 

For type-safety without duplication, we generate typescript definitions and components from `.graphql` files using the excellent [apollo-codegen](https://github.com/apollographql/apollo-tooling).

There is nothing GRelDAL specific in the frontend, but it provides a full picture of how the client and server components fit together. 
