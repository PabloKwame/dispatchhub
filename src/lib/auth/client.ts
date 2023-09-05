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


//  "@apollo/client": "^3.8.1",
//     "@emotion/react": "^11.8.1",
//     "@emotion/styled": "^11.8.1",
//     "@material-ui/core": "^4.12.4",
//     "@mui/icons-material": "^5.4.4",
//     "@mui/x-data-grid": "^5.17.26",
//     "@trendmicro/react-sidenav": "^0.5.0",
//     "apexcharts": "^3.42.0",
//     "apollo-client": "^2.6.10",
//     "bootstrap": "^5.3.1",
//     "git": "^0.1.5",
//     "graphql": "^15.8.0",
//     "graphql-ws": "^5.14.0",
//     "react": "^17.0.2",
//     "react-apexcharts": "^1.4.1",
//     "react-circular-progressbar": "^2.0.4",
//     "react-dom": "^17.0.2",
//     "react-router-dom": "^6.2.2",
//     "react-scripts": "^5.0.1",
//     "recharts": "^2.1.9",
//     "sass": "^1.49.9",
//     "subscriptions-transport-ws": "^0.11.0",
//     "web-vitals": "^2.1.4"