import { gql } from "@apollo/client";

export default gql`
	mutation SignIn($email: String!, $password: String!) {
		signIn(emailAddress: $email, password: $password) {
			success
		}
	}
`;
