import React from "react";
import EmptyPanel from "./emptyPanel";
import JUMBOTRON from "../../../constants/jumbotron";

function BlockedTabContainer() {
	return (
		<EmptyPanel src={JUMBOTRON.BLOCKED.source} text={JUMBOTRON.BLOCKED.text} />
	);
}

export default BlockedTabContainer;
