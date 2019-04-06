import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("accomplishments", t => {
    t.increments("id");
    t.integer("wizard_id").notNullable();
    t.string("title").notNullable();
    t.foreign("wizard_id")
      .references("id")
      .inTable("wizards");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("accomplishments");
}
