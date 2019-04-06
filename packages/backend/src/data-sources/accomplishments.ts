import { mapDataSource, mapFields, types } from "greldal";
import { GraphQLID } from "graphql";

export const accomplishments = mapDataSource({
  name: "Accomplishment",
  fields: mapFields({
    id: {
      type: types.integer,
      to: GraphQLID,
      isPrimary: true
    },
    title: {
      type: types.string
    },
    wizard_id: {
      type: types.integer
    }
  })
});
