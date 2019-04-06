import Knex from "knex";
import {memoize} from "lodash";

export const knexConnector = memoize(() => Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
}));