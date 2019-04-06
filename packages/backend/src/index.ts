import dotenv from "dotenv";
import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";
import { knexConnector } from "./knex-connector";
import { useDatabaseConnector } from "greldal";

dotenv.config();

useDatabaseConnector(knexConnector())
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: process.env.NODE_ENV === 'development'
}));

app.listen(4000);
