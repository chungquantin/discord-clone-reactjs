import * as ASSETS from "../../constants/assets";

const ALIAS = "Chase Chung";

export default function statusReducer(state, action) {
	switch (action.type) {
		case "ONLINE":
			return {
				source: ASSETS.JUMBO_ONLINE,
				text: `Chả có ai chơi với ${ALIAS} cả.`,
			};
		case "ALL":
			return {
				source: ASSETS.JUMBO_ALL,
				text: `${ALIAS} đang chờ đợi bạn bè. Nhưng không cần thiết đâu!`,
			};
		case "PENDING":
			return {
				source: ASSETS.JUMBO_PENDING,
				text: `Không có yêu cầu kết bạn nào cả. ${ALIAS} nè`,
			};
		case "BLOCKED":
			return {
				source: ASSETS.JUMBO_BLOCKED,
				text: `Bạn không thể chặn ${ALIAS} được}`,
			};
		default:
			throw new Error("Unexpected Action");
	}
}
