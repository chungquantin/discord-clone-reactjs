export const signInAction = async (method, { email, password }) => {
	let res = await method({ variables: { email, password } });
	let token = res.data.signIn.token;
	return token;
};

export const signUpAction = async (
	method,
	{ email, password, confirmPassword, username, birthday }
) => {
	let res = await method({
		variables: { email, password, confirmPassword, username, birthday },
	});
	let token = res.data.signUp.token;
	return token;
};
