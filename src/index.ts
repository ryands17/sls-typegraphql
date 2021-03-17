import { config } from 'dotenv';
config();

import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server-lambda';
import { context } from './context';
import { resolvers } from './generated';

const server = new ApolloServer({
  schema: tq.buildSchemaSync({ resolvers }),
  context,
  playground: {
    endpoint: '/dev/graphql',
  },
  tracing: true,
  introspection: true,
});

export const handler = server.createHandler({
  cors: {
    origin: '*',
  },
});

console.log(`🚀 Server ready!`);
