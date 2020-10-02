import React from "react";
import * as Style from "./styles/FlexBox";

function FlexBox({ direction, children, ...restProps }) {
	return (
		<Style.Container direction={direction} {...restProps}>
			{children}
		</Style.Container>
	);
}

export default FlexBox;
