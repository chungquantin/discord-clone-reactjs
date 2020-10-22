import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

function useAuthListener() {
	const user = null;

	const [accessToken, setAccessToken] = useState(
		localStorage.getItem("authUser")
	);

	useEffect(() => {
		console.log("debugging data :", accessToken);
	}, [accessToken]);

	return { user };
}

export default useAuthListener;
