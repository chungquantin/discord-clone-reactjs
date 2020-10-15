import { ONLINE, OFFLINE, IDLE, DISTURB } from "../types/status.types";
import * as ASSETS from "../../../../constants/assets";

const INITIAL_STATE = {
	source: "",
	tooltip: "",
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ONLINE:
			return { source: ASSETS.STATUS_ONLINE, tooltip: "Online" };
		case OFFLINE:
			return { source: ASSETS.STATUS_OFFLINE, tooltip: "Offline" };
		case IDLE:
			return { source: ASSETS.STATUS_IDLE, tooltip: "Idle" };
		case DISTURB:
			return {
				source: ASSETS.STATUS_DISTURB,
				tooltip: "Do not disturb",
			};
		default:
			return state;
	}
};

export default reducer;
