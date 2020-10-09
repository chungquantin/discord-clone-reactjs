import React, { Fragment } from "react";
import { ServerContainer, SideBarContainer } from "../container";
import { FlexBox } from "../components";

function DefaultChannelPage({ children, ...restProps }) {
	/* TODO Single page multi steps React-based form 
		1: BirthdayContainer
		2: Server customization
		3: Server finalization
	*/
	return (
		<FlexBox justify="flex-start">
			<ServerContainer />
			<SideBarContainer />
		</FlexBox>
	);
}

export default DefaultChannelPage;
