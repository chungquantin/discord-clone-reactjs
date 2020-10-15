import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
// -- GraphQL & Apollo Client --
import { ApolloProvider } from "@apollo/client";
import ApolloClientServer from "./core/apollo";
// -- Redux --
import { Provider } from "react-redux";
import store from "./core/redux/store";

const client = ApolloClientServer();

ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<GlobalStyles />
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById("root")
);
