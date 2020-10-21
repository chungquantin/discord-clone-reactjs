const signInAction = async (method, { token }) => {
	let res = await method({ variables: { email, password } });
	let token = res.data.signIn.token;
	return token;
};

export default signInAction;
