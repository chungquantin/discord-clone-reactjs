import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

function ReCaptcha() {
	const [isVerified, setVerified] = useState(false);

	return (
		<Recaptcha
			sitekey="xxxxxxxxxxxxxxxxxxxx"
			render="explicit"
			onloadCallback={callback}
		/>
	);
}

export default ReCaptcha;
