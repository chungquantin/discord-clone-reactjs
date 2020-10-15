import React from "react";
import EmptyPanel from "./emptyPanel";
import JUMBOTRON from "../../../constants/jumbotron";

function PendingTabContainer() {
	return (
		<EmptyPanel src={JUMBOTRON.PENDING.source} text={JUMBOTRON.PENDING.text} />
	);
}

export default PendingTabContainer;
