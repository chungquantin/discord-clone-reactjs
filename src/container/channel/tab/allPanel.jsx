import React from "react";
import EmptyPanel from "./emptyPanel";
import JUMBOTRON from "../../../constants/jumbotron";
import { Tab, FlexBox } from "../../../components";
import useBreakPoint from "../../../hooks/useBreakPoint.js";

function AllContainer({ toggle }) {
	const breakPoint = useBreakPoint();
	return (
		<FlexBox
			direction="column"
			justify="flex-start"
			style={{
				width: `${breakPoint > 900 ? "calc(100% - 367px)" : "100%"} `,
				height: "100%",
			}}
		>
			{toggle && (
				<Tab.AddFriendArea>
					<Tab.Header>THÊM BẠN</Tab.Header>
					<Tab.Text>
						Bạn có thể thêm bạn bè bằng DiscordTag của họ. Phân biệt rõ cHữ
						ThƯờNg và ChỮ HoA!
					</Tab.Text>
					<div>
						<Tab.Input placeholder="Nhập tên người dùng#0000" />
						<Tab.Button>Gửi Yêu Cầu Kết Bạn</Tab.Button>
					</div>
				</Tab.AddFriendArea>
			)}

			<EmptyPanel src={JUMBOTRON.ALL.source} text={JUMBOTRON.ALL.text}>
				{!toggle && <Tab.Button>Thêm Bạn</Tab.Button>}
			</EmptyPanel>
		</FlexBox>
	);
}

export default AllContainer;
