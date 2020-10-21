import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./contexts/FirebaseContext";
import { firebase } from "./core/lib/firebase.prod";
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
			<FirebaseContext.Provider value={{ firebase }}>
				<GlobalStyles />
				<App />
			</FirebaseContext.Provider>
		</ApolloProvider>
	</Provider>,
	document.getElementById("root")
);
