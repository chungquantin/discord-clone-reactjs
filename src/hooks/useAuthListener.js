import { useHistory } from "react-router-dom";
import store from "../core/redux/store";
import axios from "axios";
import { SET_AUTHENTICATED } from "../core/redux/types/user.types";
import { logoutUser, getAuthUserData } from "../core/redux/actions/user.action";
import { GET_AUTH_USER } from "../core/graphql/mutations/userMutation";
import { useQuery } from "@apollo/client";
import jwt from "jsonwebtoken";

async function useAuthListener() {
	const user = null;
	const history = useHistory();
	const token = localStorage.getItem("FBIdToken");
	const [__getAuthUser] = useQuery(GET_AUTH_USER);
	if (token) {
		const accessToken = token.split("Bearer")[1].trim();
		const decodedToken = jwt.decode(accessToken);
		if (decodedToken.exp * 1000 < Date.now()) {
			store.dispatch(logoutUser());
			history.push("/login");
		} else {
			store.dispatch({ type: SET_AUTHENTICATED });
			axios.defaults.headers.common["Authorization"] = accessToken;
			store.dispatch(getAuthUserData(__getAuthUser));
		}
	}

	return { user };
}

export default useAuthListener;
