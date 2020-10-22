import React, { useContext } from "react";
import TabBar from "./tabBar";
import { Tab } from "../../components";
import { TabContext } from "../../contexts/TabContext.js";
import { AllPanel, PendingPanel, OnlinePanel, BlockedPanel } from "./tab/index";
import ActiveSection from "./activeSection";
import useBreakPoint from "../../hooks/useBreakPoint";
function TabContainer() {
	const { tabIndex } = useContext(TabContext);
	const breakPoint = useBreakPoint();
	return (
		<Tab>
			<TabBar />
			<Tab.Body justify="flex-start">
				{tabIndex === 1 && <OnlinePanel />}
				{tabIndex === 2 && <AllPanel />}
				{tabIndex === 3 && <PendingPanel />}
				{tabIndex === 4 && <BlockedPanel />}
				{tabIndex === 5 && <AllPanel toggle={true} />}
				{breakPoint > 1100 && <ActiveSection />}
			</Tab.Body>
		</Tab>
	);
}

export default TabContainer;
