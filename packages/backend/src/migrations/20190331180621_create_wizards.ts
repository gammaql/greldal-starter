import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("wizards", t => {
    t.increments();
    t.string("name");
    t.integer("age");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("wizards");
}
