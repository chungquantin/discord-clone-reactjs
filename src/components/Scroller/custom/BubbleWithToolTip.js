import React from "react";
import { Tooltip } from "../../index";
import * as Style from "../styles/Scroller";

function BubbleWithTooltip({ dataFor, children, tooltip, ...restProps }) {
	return (
		<Style.Bubble data-tip data-for={dataFor} {...restProps}>
			{children}
			<Tooltip effect="solid" id={dataFor} place="right">
				{tooltip}
			</Tooltip>
		</Style.Bubble>
	);
}

export default BubbleWithTooltip;
