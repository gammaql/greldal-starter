# GRelDAL Starter

This is a bare-bones application which you can use a starting point for a full-stack [GraphQL](https://graphql.org/) based application powered by [Node.js](https://nodejs.org/), [React](https://reactjs.org/) and [GRelDAL](https://github.com/gql-dal/greldal).

While this starter application is quite a bit more opinionated than GRelDAL itself, it eliminates the need to spend hours integrating small utilities before you can get started with the application logic.

This repository follows a monorepo structure (managed using [lerna](https://github.com/lerna/lerna)), with two packages: frontend and backend, both written in TypeScript.

## Backend

The backend is a GraphQL server which exposes data stored in a PostgreSQL database through a [GRelDAL](https://github.com/gql-dal/greldal) powered [GraphQL](https://graphql.org/) API.

## Frontend

The frontend is a modification of the [create-react-app](https://facebook.github.io/create-react-app/) scaffold, which talks to the backend through apollo client. 

For type-safety without duplication, we generate typescript definitions and components from `.graphql` files using the excellent [apollo-codegen](https://github.com/apollographql/apollo-tooling).

There is nothing GRelDAL specific in the frontend, but it provides a full picture of how the client and server components fit together.

## Quick Start

Clone the repo and install dependencies

```
git clone https://github.com/gql-dal/greldal-starter.git my_app --depth=1
cd my_app
yarn 
yarn run bootstrap
```

We will need a postgres server running to connect to it. If you don't have postgres installed, check out the [instructions](http://www.postgresqltutorial.com/install-postgresql/) here.

The application will try to connect to a database of name `greldal_starter_development`. You can change the `DATABASE_URL` entry in `.env` file to change this. Alternatively, you can also set an environment variable to configure this. 

Run the migrations to setup the required table:

```
cd packages/backend
yarn run migrate:latest
```

Add some sample data: 

```
yarn run seed:run
```

Run the express server: 

```
cd packags/backend
yarn run start
```

Now you will have a graphql server running on port 4000.

![GraphiQL IDE](https://raw.githubusercontent.com/gql-dal/greldal-starter/master/assets/graphiql-screenshot.PNG)

You can open `http://localhost:4000/graphql` in your browser and use the [graphiql](https://github.com/graphql/graphiql) in-browser IDE to play around with the API.

In a different terminal:

```
cd packages/frontend
yarn run start
```

You can now open `http://localhost:3000` in a browser. You should see a page like this: 

![Frontend Example](https://raw.githubusercontent.com/gql-dal/greldal-starter/master/assets/frontend-above-fold.PNG)

If you scroll down, there is a tiny example component that talks to your graphql API. )

![Wizard Explorer Example Application](https://raw.githubusercontent.com/gql-dal/greldal-starter/master/assets/example-frontend.PNG)

Now feel free to go and tinker with your code. On any change, both your server and client will reload and update automatically.

During development, the development server will proxy to the GraphQL backend. In production you can use a static file server like
Nginx and setup a reverse proxy to a node.js server.

The starter application doesn't cover production deployment currently, but there are many good resources available around production
deployment of node.js example, an example being [this one](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04).

## Contributing

GRelDAL welcomes contributions. If you have found a bug or have suggestions around something that we could have done better, please create an issue to discuss it.
