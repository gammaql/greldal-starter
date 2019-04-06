import Knex from "knex";

exports.seed = async function(knex: Knex): Promise<any> {
  await knex("wizards").insert([
    { id: 1, name: "Nokolai DrekSpoonWorth", age: 2000 },
    { id: 2, name: "Zander Minimokulous", age: 5000 },
    { id: 3, name: "Errold Mangificonse", age: 180 }
  ]);
};
