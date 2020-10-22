import { gql } from "@apollo/client";

export const SIGN_IN = gql`
	mutation SignIn($email: String!, $password: String!) {
		signIn(emailAddress: $email, password: $password) {
			token
		}
	}
`;

export const SIGN_UP = gql`
	mutation SignUp(
		$email: String!
		$password: String!
		$confirmPassword: String!
		$username: String!
		$birthday: Birthday!
	) {
		signUp(
			emailAddress: $email
			password: $password
			confirmPassword: $confirmPassword
			username: $username
			birthday: $birthday
		) {
			token
		}
	}
`;
