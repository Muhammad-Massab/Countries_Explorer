import { ApolloClient, InMemoryCache } from "@apollo/client";

// Accessing environment variables using import.meta.env
const GRAPHQL_API_URI = import.meta.env.VITE_GRAPHQL_API_URI;

if (!GRAPHQL_API_URI) {
  throw new Error("Environment variable VITE_GRAPHQL_API_URI is missing.");
}

const client = new ApolloClient({
  uri: GRAPHQL_API_URI,
  cache: new InMemoryCache(),
});

export default client;
