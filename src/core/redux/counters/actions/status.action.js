import { ONLINE, OFFLINE, IDLE, DISTURB } from "../types/status.types";

export const statusCounter = (status) => {
	switch (status) {
		case "online":
			return {
				type: ONLINE,
			};
		case "offline":
			return {
				type: OFFLINE,
			};
		case "idle":
			return {
				type: IDLE,
			};
		case "disturb":
			return {
				type: DISTURB,
			};
		default:
			break;
	}
};
