import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
// -- GraphQL & Apollo Client --
import { ApolloProvider } from "@apollo/client";
import ApolloClientServer from "./server/apollo";

const client = ApolloClientServer();

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
