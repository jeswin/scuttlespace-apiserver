import { graphqlSchema as UserSchema } from "scuttlespace-service-user";

const typeDefs = [
  `
  type Query {
    user(rowid: String, domain: String): ScuttlespaceUser
  }
  schema {
    query: Query
  }
`
];

const resolvers = {
  
}

export const schema = [SchemaDefinition, RootQuery, UserSchema];
