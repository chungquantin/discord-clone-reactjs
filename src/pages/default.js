import React from "react";
import { ServerContainer, SideBarContainer, TabContainer } from "../container";
import { FlexBox } from "../components";
import MainAnimation from "../animations";

function DefaultChannelPage({ children, ...restProps }) {
	/* TODO Single page multi steps React-based form 
		1: BirthdayContainer
		2: Server customization
		3: Server finalization
	*/
	return (
		<MainAnimation
			render={(main) => (
				<FlexBox justify="flex-start" style={{ minHeight: "100vh" }}>
					<ServerContainer mainAnimation={main} />
					<SideBarContainer mainAnimation={main} />
					<TabContainer mainAnimation={main} />
				</FlexBox>
			)}
		/>
	);
}

export default DefaultChannelPage;
