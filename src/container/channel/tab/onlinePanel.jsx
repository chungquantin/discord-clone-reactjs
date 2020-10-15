import React from "react";
import EmptyPanel from "./emptyPanel";
import JUMBOTRON from "../../../constants/jumbotron";

function OnlineTabContainer({ ...restProps }) {
	return (
		<EmptyPanel
			src={JUMBOTRON.ONLINE.source}
			text={JUMBOTRON.ONLINE.text}
			{...restProps}
		/>
	);
}

export default OnlineTabContainer;
