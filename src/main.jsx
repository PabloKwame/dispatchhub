import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { HttpLink, split, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const wsLink = new GraphQLWsLink(
	createClient({
		url: `${import.meta.env.VITE_WS_API_URL}`,
	})
);

const httpLink = new HttpLink({
	uri: `${import.meta.env.VITE_API_URL}`,
	headers: {
		authorization: `Bearer ${localStorage.getItem("authToken")}`,
	},
});

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === "OperationDefinition" && definition.operation === "subscription";
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</DarkModeContextProvider>
	</React.StrictMode>
);
