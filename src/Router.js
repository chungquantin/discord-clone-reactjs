import React from "react";
// -- Routing Handling --
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as ROUTES from "./constants/routes";
import { LoginPage, SignUpPage, DefaultChannelPage, HomePage } from "./pages";
import useAuthListener from "./hooks/useAuthListener";

function AppRouting() {
	const location = useLocation();
	const { user } = useAuthListener();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route exact path={ROUTES.__home} component={HomePage} />
				<Route exact path={ROUTES.__login} component={LoginPage} />
				<Route exact path={ROUTES.__signup} component={SignUpPage} />
				<Route
					exact
					path={ROUTES.__default_channel}
					component={DefaultChannelPage}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default AppRouting;
