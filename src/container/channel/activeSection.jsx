import React from "react";
import { Tab } from "../../components";

function ActiveBar() {
	return (
		<Tab.Active>
			<h5
				style={{
					color: "#B9BBBE",
					fontSize: "11px",
				}}
			>
				ĐANG HOẠT ĐỘNG
			</h5>
			<Tab.ActiveCard direction="column">
				<Tab.Header style={{ marginBottom: "3px" }}>
					Hiện tại không có cập nhật mới nào cả...
				</Tab.Header>
				<Tab.Text>
					Nếu bạn bè của bạn có hoạt động mới, ví dụ như chơi game hoặc trò
					chuyện thoại, chúng tôi sẽ hiển thị hoạt động đó ở đây!
				</Tab.Text>
			</Tab.ActiveCard>
		</Tab.Active>
	);
}

export default ActiveBar;
