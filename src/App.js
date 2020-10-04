import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { __login, __signup, __default_channel } from "./constants/routes";
import { LoginPage, SignUpPage, DefaultChannelPage } from "./pages";

function App() {
	return (
		<Router>
			<Route path={__login} component={LoginPage} />
			<Route path={__signup} component={SignUpPage} />
			<Route path={__default_channel} component={DefaultChannelPage} />
		</Router>
	);
}

export default App;
