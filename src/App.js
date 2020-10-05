import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { LoginPage, SignUpPage, DefaultChannelPage } from "./pages";
// GraphQL & Apollo Client
import ApolloClientServer from "./server/apollo";

const client = ApolloClientServer();

function App() {
	return (
		<Router>
			<Route path={ROUTES.__login} component={LoginPage} />
			<Route path={ROUTES.__signup} component={SignUpPage} />
			<Route path={ROUTES.__default_channel} component={DefaultChannelPage} />
		</Router>
	);
}

export default App;
