import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Replace with your GraphQL API endpoint
const graphqlEndpoint = "https://chipsandpepperoni.herokuapp.com/graphql";

// Function to retrieve the authentication token from local storage or another source
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Create an HTTP link to your GraphQL API
const httpLink = createHttpLink({
  uri: graphqlEndpoint,
});

// Create a middleware link to set the authorization header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token
  const token = getAuthToken();

  // Set the authorization header if a token is available
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }

  return headers;
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
