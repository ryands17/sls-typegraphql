# TypeGraphQL + Serverless

This example shows how to **implement a GraphQL server with [TypeGraphQL](https://typegraphql.com/docs/prisma.html) and the [Serverless framework](https://www.serverless.com/)** based on [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client), [apollo-server-lambda](https://www.apollographql.com/docs/apollo-server).

## Prerequisites

- Node version >= 12 required

- Rename `.env.example` to `.env` and replace the necessary values

- Run `yarn` (recommended) or `npm install`

## Running locally

- Run the command `yarn dev` to run the app locally on [http://localhost:3000/dev/graphql](http://localhost:3000/dev/graphql) which will open the GraphQL Playground

## Deploying the app

- Run the command `yarn deploy --profile profile_name --region YOUR_AWS_REGION` to deploy the app
