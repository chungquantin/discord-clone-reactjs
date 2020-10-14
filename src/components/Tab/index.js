import React from "react";
import * as Style from "./styles/Tab";

function Tab({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

export default Tab;
