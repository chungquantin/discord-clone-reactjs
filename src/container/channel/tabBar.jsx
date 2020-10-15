import React from "react";
import { Tab, FlexBox, Tooltip } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserFriends,
	faCommentAlt,
	faInbox,
	faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function TabBar() {
	return (
		<Tab.Bar justify="space-between">
			<FlexBox>
				<FontAwesomeIcon
					icon={faUserFriends}
					style={{ color: "#72767D", margin: "0px 8px 0px 10px" }}
				/>
				<Tab.Header>Bạn bè</Tab.Header>
				<Tab.Separator />
				<Tab.TextButton className="__selected">Trực tuyến</Tab.TextButton>
				<Tab.TextButton>Tất cả</Tab.TextButton>
				<Tab.TextButton>Đang chờ xử lý</Tab.TextButton>
				<Tab.TextButton>Đã chặn</Tab.TextButton>
				<Tab.StyledTextButton>Thêm bạn</Tab.StyledTextButton>
			</FlexBox>
			<FlexBox
				style={{
					position: "fixed",
					right: "0px",
					paddingLeft: "10px",
					backgroundColor: "#36393F",
					height: "48px",
				}}
			>
				<Tab.IconButton
					style={{ marginRight: "0" }}
					icon={faCommentAlt}
					data-tip="Nhóm DM Mới"
					data-for="dm-tt"
				/>
				<Tooltip effect="solid" id="dm-tt" />
				<Tab.Separator />
				<Tab.IconButton
					icon={faInbox}
					data-tip="Hộp thư đến"
					data-for="inbox-tt"
				/>
				<Tooltip effect="solid" id="inbox-tt" />
				<Tab.IconButton
					icon={faQuestionCircle}
					data-tip="Trợ giúp"
					data-for="qa-tt"
					to={"https://support.discord.com/hc/en-us"}
				/>
				<Tooltip effect="solid" id="qa-tt" />
			</FlexBox>
		</Tab.Bar>
	);
}

export default TabBar;
