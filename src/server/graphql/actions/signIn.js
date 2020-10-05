const signInAction = async (method, email, password, errorHandling) => {
	let res = await method({ variables: { email, password } });
	let token = res.data.signIn.token;
	return token;
};

export default signInAction;
