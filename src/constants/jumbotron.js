import * as ASSETS from "./assets";

const ALIAS = "Chase Chung";

export default {
	ONLINE: {
		source: ASSETS.JUMBO_ONLINE,
		text: `Chả có ai chơi với ${ALIAS} cả.`,
	},
	ALL: {
		source: ASSETS.JUMBO_ALL,
		text: `${ALIAS} đang chờ đợi bạn bè. Nhưng không cần thiết đâu!`,
	},
	PENDING: {
		source: ASSETS.JUMBO_PENDING,
		text: `Không có yêu cầu kết bạn nào cả. ${ALIAS} nè`,
	},
	BLOCKED: {
		source: ASSETS.JUMBO_BLOCKED,
		text: `Bạn không thể chặn ${ALIAS} được}`,
	},
};
