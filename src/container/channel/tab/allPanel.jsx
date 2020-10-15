import React from "react";
import EmptyPanel from "./emptyPanel";
import JUMBOTRON from "../../../constants/jumbotron";

function AllContainer() {
	return <EmptyPanel src={JUMBOTRON.ALL.source} text={JUMBOTRON.ALL.text} />;
}

export default AllContainer;
