import { mapDataSource, mapFields, types } from "greldal";

export const wizards = mapDataSource({
  name: "Wizard",
  fields: mapFields({
    id: {
      type: types.number
    },
    name: {
      type: types.string
    },
    age: {
      type: types.integer
    }
  })
});
