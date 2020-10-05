import { gql } from "@apollo/client";

export default gql`
	mutation SignUp(
		$email: String!
		$password: String!
		$confirmPassword: String!
		$username: String!
		$birthday: Birthday!
	) {
		signIn(
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
