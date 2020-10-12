import * as ASSETS from "../constants/assets";

export default function statusReducer(state, action) {
	console.log(action);
	switch (action.type) {
		case "online":
			return { ...state, source: ASSETS.STATUS_ONLINE, tooltip: "Online" };
		case "offline":
			return { ...state, source: ASSETS.STATUS_OFFLINE, tooltip: "Offline" };
		case "idle":
			return { ...state, source: ASSETS.STATUS_IDLE, tooltip: "Idle" };
		case "disturb":
			return {
				...state,
				source: ASSETS.STATUS_DISTURB,
				tooltip: "Do not disturb",
			};
		default:
			throw new Error("Unexpected Action");
	}
}
