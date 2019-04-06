import { mapDataSource, mapFields, types, mapAssociations } from "greldal";
import { accomplishments } from "./accomplishments";
import { GraphQLID } from "graphql";

export const wizards = mapDataSource({
  name: "Wizard",
  fields: mapFields({
    id: {
      type: types.integer,
      to: GraphQLID,
      isPrimary: true
    },
    name: {
      type: types.string
    },
    age: {
      type: types.integer
    }
  }),
  associations: mapAssociations({
    accomplishments: {
      exposed: true,
      target: () => accomplishments,
      singular: false,
      fetchThrough: [{join: 'leftOuterJoin'}],
      associatorColumns: {
        inSource: 'id',
        inRelated: 'wizard_id'
      }
    }
  })
});
