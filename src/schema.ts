import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
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

export default {
  resolvers: merge(rootResolvers, UserSchema.resolvers) as any,
  typeDefs: [...rootTypeDefs, ...UserSchema.typeDefs]
};
