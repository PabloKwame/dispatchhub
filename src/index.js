import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { createClient } from "graphql-ws";
import {
  HttpLink,
  split,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://chipsandpepperoni.herokuapp.com/graphql",
  })
);

const httpLink = new HttpLink({
  uri: "https://chipsandpepperoni.herokuapp.com/graphql",
});

// Send query request based on the type definition
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
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
