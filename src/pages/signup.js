import React from "react";
// -- Components --
import { AuthHeaderContainer, SignUpContainer } from "../container";
import { default as SignUpAnimation } from "../animations/signup";

function SignUp() {
	return (
		<AuthHeaderContainer className="__580_break">
			<SignUpAnimation
				render={(variables) => (
					<SignUpContainer animatedVariables={variables} />
				)}
			/>
		</AuthHeaderContainer>
	);
}

export default SignUp;
