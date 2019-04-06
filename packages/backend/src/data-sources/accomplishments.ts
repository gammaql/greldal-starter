import { mapDataSource, mapFields, types } from "greldal";

export const accomplishments = mapDataSource({
  name: "Accomplishment",
  fields: mapFields({
    id: {
      type: types.number
    },
    title: {
      type: types.string
    },
    wizard_id: {
      type: types.integer
    }
  })
});
