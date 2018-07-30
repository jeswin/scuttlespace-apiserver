import { graphqlSchema as UserSchema } from "scuttlespace-service-user";

const RootQuery = `
  type Query {
    user(rowid: String, domain: String): ScuttlespaceUser
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

export const schema = [SchemaDefinition, RootQuery, UserSchema];

