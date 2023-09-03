import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // Import setContext

// Replace with your GraphQL API endpoint
const graphqlEndpoint = "https://chipsandpepperoni.herokuapp.com/graphql";

// Function to retrieve the authentication token from local storage or another source
const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  console.log('Authentication Token:', token); // Log the token
  return token;
};

// Create an HTTP link to your GraphQL API
const httpLink = createHttpLink({
  uri: graphqlEndpoint,
});

// Create an Apollo Client instance with authorization headers
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
  
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
