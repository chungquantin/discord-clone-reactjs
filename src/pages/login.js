import React, { useState, useEffect } from "react";
// -- Components --
import { AuthHeaderContainer, LoginFormContainer } from "../container";

function Login() {
	return (
		<AuthHeaderContainer>
			<LoginFormContainer />
		</AuthHeaderContainer>
	);
}

export default Login;
