import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { LoginPage, SignUpPage, DefaultChannelPage } from "./pages";
// GraphQL & Apollo Client
import { ApolloProvider } from "@apollo/client";
import ApolloClientServer from "./server/apollo";

const client = ApolloClientServer();

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route path={ROUTES.__login} component={LoginPage} />
					<Route path={ROUTES.__signup} component={SignUpPage} />
					<Route
						path={ROUTES.__default_channel}
						component={DefaultChannelPage}
					/>
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
