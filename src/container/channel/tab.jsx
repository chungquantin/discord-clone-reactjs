import React from "react";
import TabBar from "./tabBar";
import ActiveBar from "./activeBar";
import Tab from "../../components/Tab";

function TabContainer() {
	return (
		<Tab>
			<TabBar />
			<Tab.Body>
				<ActiveBar />
			</Tab.Body>
		</Tab>
	);
}

export default TabContainer;
