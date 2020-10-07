import React from "react";
// -- Components --
import { AuthHeaderContainer, LoginFormContainer } from "../container";
// -- Animations --
import { default as LoginAnimation } from "../animations/login";

function Login() {
	return (
		<AuthHeaderContainer className="__580_break">
			<LoginAnimation
				render={(variables) => (
					<LoginFormContainer animatedVariables={variables} />
				)}
			/>
		</AuthHeaderContainer>
	);
}

export default Login;
