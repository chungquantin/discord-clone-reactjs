import {
	SET_USER,
	SET_UNAUTHENTICATED,
	LOADING_USER,
} from "../types/user.types";
import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from "../types/ui.types";

import { signInAction, signUpAction } from "../../graphql/actions/userAction";
import * as ROUTES from "../../../constants/routes";

import axios from "axios";

export const loginUser = (method, userData, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let token = await signInAction(method, userData);
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

export const getUserData = (id) => (dispatch) => {
	dispatch({ type: LOADING_USER });
};

export const signupUser = (method, userData, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let token = await signUpAction(method, userData);
		setAuthorizationHeader(token);
		history.push(ROUTES.__default_channel);
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERRORS, payload: { signup: error.message } });
	}
};

const setAuthorizationHeader = (token) => {
	const FBIdToken = `Bearer ${token}`;
	localStorage.setItem("FBIdToken", FBIdToken);
	axios.defaults.headers.common["Authorization"] = FBIdToken;
};
