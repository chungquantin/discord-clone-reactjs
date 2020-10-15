import React, { useReducer } from "react";
import TabBar from "./tabBar";
import ActiveSection from "./activeSection";
import { Tab } from "../../components";
import * as ASSETS from "../../constants/assets.js";
import jumboReducer from "../../helpers/reducers/jumboReducer";

const initialState = {
	source: "",
	text: "",
};

function TabContainer() {
	// const [state, dispatch] = useReducer(jumboReducer, initialState);
	// useEffect(() => dispatch({ type: status }), [status]);
	return (
		<Tab>
			<TabBar />
			<Tab.Body justify="flex-start">
				<Tab.DynamicSection direction="column">
					<img
						src={ASSETS.JUMBO_ONLINE}
						alt=""
						style={{ marginBottom: "40px" }}
					/>
					<h5 className="__jumbo_text">Chả có ai chơi với Tín Quan Chung cả</h5>
				</Tab.DynamicSection>
				<ActiveSection />
			</Tab.Body>
		</Tab>
	);
}

export default TabContainer;
