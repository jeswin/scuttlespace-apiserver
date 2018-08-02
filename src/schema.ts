import { merge } from "lodash";
import { graphqlSchema as UserSchema } from "scuttlespace-service-user";

const rootTypeDefs = [
  `
  type Query {
    _nothing: String
  }

  schema {
    query: Query
  }
`
];

const rootResolvers = {};

/*
  TODO:
  For now, the only caller is the website.
  This grpahql service is not exposed publicly.
*/
function context({ req }: any) {
  return { id: "1234", session: "INTERNAL" };
}

export default {
  context,
  resolvers: merge(rootResolvers, UserSchema.resolvers) as any,
  typeDefs: [...rootTypeDefs, ...UserSchema.typeDefs]
};
