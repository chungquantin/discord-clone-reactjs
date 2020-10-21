import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";

function useAuthListener() {
	const [user, setUser] = useState(localStorage.getItem("authUser"));
	const { firebase } = useContext(FirebaseContext);

	// useEffect(() => {
	// 	const listener = firebase.auth().onAuthStateChanged((authUser) => {
	// 		if (authUser) {
	// 			localStorage.setItem("authUser", JSON.stringify(authUser));
	// 			setUser(authUser);
	// 		} else {
	// 			localStorage.removeItem("authUser");
	// 			setUser(null);
	// 		}
	// 	});
	// 	return () => listener();
	// }, [firebase, user]);

	return { user };
}

export default useAuthListener;
