import React from "react";
// -- Components --
import { AuthHeaderContainer, LoginFormContainer } from "../container";
import { Form } from "../components";
// -- Animations --
import { default as LoginAnimation } from "../animations/login";
import { useLocation } from "react-router-dom";

function Login() {
	const location = useLocation();

	return (
		<AuthHeaderContainer>
			<LoginAnimation
				render={(variables) => (
					<LoginFormContainer animatedVariables={variables} />
				)}
			/>
		</AuthHeaderContainer>
	);
}

export default Login;
