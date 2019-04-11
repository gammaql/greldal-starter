import * as Knex from "knex";

exports.seed = async function (knex: Knex): Promise<any> {
    await knex("accomplishments").del();
    await knex("accomplishments").insert([
        {id: 1, title: "Master of Deep Sea Scroll Discovery", wizard_id: 1},
        {id: 2, title: "Leprechuan convention excellence award", wizard_id: 1},
        {id: 3, title: "Master of augmented transfiguration", wizard_id: 2},
        {id: 4, title: "Destroyer of Alzerian Myths", wizard_id: 3},
        {id: 5, title: "Architect of Pacific amethyst", wizard_id: 3},
        {id: 6, title: "Supreme Evangelist of Goblin Rights", wizard_id: 3}
    ]);
};
