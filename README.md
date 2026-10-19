# Apollo GraphQL Starter

Learning project demonstrating an Apollo GraphQL server with Express and a user query.

[Live deployment](https://graphql-jet.vercel.app)

## Overview

- Apollo Server with Express integration
- Separate schema and resolver modules
- Example me query returning user name and age

## Stack

Express, Apollo Server.

## Run locally

```bash
git clone https://github.com/AbdulSamadAhsan/graphql.git
cd graphql
npm install
```

```bash
npm run start
```

Query `http://localhost:4000/graphql` with:

```graphql
query {
  me { name age }
}
```


## Author

[Syed Abdul Samad Ahsan](https://github.com/AbdulSamadAhsan)
