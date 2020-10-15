import React from "react";
import { Tab } from "../../../components";

function EmptyPanel({ src, text, children }) {
	return (
		<Tab.Panel direction="column">
			<img src={src} alt="" style={{ marginBottom: "40px" }} />
			<h5 className="__jumbo_text">{text}</h5>
			{children}
		</Tab.Panel>
	);
}

export default EmptyPanel;
