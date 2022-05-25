import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  // uri: "http://localhost:4000"
  uri: process.env.APOLLO_BACKEND_URL,
  cache: new InMemoryCache(),
});
