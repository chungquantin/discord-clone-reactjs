import {
	SET_USER,
	SET_UNAUTHENTICATED,
	LOADING_USER,
} from "../types/user.types";
import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from "../types/ui.types";

import { SIGN_IN, SIGN_UP } from "../../graphql/mutations";
import { signInWithEmailAndPassword } from "../../graphql/actions";
import * as ROUTES from "../../../constants/routes";

import axios from "axios";

export const loginUser = (method, userData, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let token = await signInWithEmailAndPassword(method, userData);
		setAuthorizationHeader(token);
		history.push(ROUTES.__default_channel);
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: { login: error.message } });
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("FBIdToken");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_UNAUTHENTICATED });
};

// export const signupUser = (newUserData, history) => (dispatch) => {
// 	dispatch({ type: LOADING_UI });
// 	axios
// 		.post("/signup", newUserData)
// 		.then((res) => {
// 			console.log(res.data);
// 			setAuthorizationHeader(res.data.token);
// 			dispatch(getUserData());
// 			dispatch({ type: CLEAR_ERRORS });
// 			history.push("/");
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			dispatch({ type: SET_ERRORS, payload: err.response.data });
// 		});
// };

const setAuthorizationHeader = (token) => {
	const FBIdToken = `Bearer ${token}`;
	localStorage.setItem("FBIdToken", FBIdToken);
	axios.defaults.headers.common["Authorization"] = FBIdToken;
};
