import React, { useState } from "react";
import { ServerContainer, SideBarContainer, TabContainer } from "../container";
import { FlexBox } from "../components";
import MainAnimation from "../animations";
import { TabContext } from "../contexts/TabContext.js";

function DefaultChannelPage({ children, ...restProps }) {
	/* TODO Single page multi steps React-based form 
		1: BirthdayContainer
		2: Server customization
		3: Server finalization
	*/
	const [tabIndex, setTabIndex] = useState(1);
	return (
		<MainAnimation
			render={(main) => (
				<FlexBox
					justify="flex-start"
					style={{ minHeight: "100vh", overflow: "hidden" }}
				>
					<ServerContainer mainAnimation={main} />
					<FlexBox style={{ width: "100%" }}>
						<SideBarContainer mainAnimation={main} />
						<TabContext.Provider value={{ tabIndex, setTabIndex }}>
							<TabContainer mainAnimation={main} />
						</TabContext.Provider>
					</FlexBox>
				</FlexBox>
			)}
		/>
	);
}

export default DefaultChannelPage;
