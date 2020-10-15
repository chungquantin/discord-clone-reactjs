import React from "react";
import { SideBar, FlexBox } from "../../index";

function UserItem({ status, type, src, text, subText, id, ...restProps }) {
	return (
		<SideBar.Option type={type} {...restProps}>
			<SideBar.Avatar status={status} id={id} src={src} />
			<FlexBox direction="column">
				<SideBar.Content text={text} />
				<SideBar.SubContent text={subText} />
			</FlexBox>
		</SideBar.Option>
	);
}

export default UserItem;
