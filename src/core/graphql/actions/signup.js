const signUpAction = async (
	method,
	{ email, password, confirmPassword, username, birthday }
) => {
	let res = await method({
		variables: { email, password, confirmPassword, username, birthday },
	});
	let token = res.data.signUp.token;
	return token;
};

export default signUpAction;
