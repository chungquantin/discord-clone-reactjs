import React from "react";
import * as Style from "./styles/Scroller";
import { Tooltip } from "../index";
function Scroller({ children, ...restProps }) {
	return (
		<Style.Container {...restProps}>
			<Style.Inner>{children}</Style.Inner>
		</Style.Container>
	);
}

Scroller.Item = function ScrollerItem({ children, ...restProps }) {
	return <Style.Item {...restProps}>{children}</Style.Item>;
};

Scroller.Bubble = function ScrollerBubble({
	tooltip,
	dataFor,
	children,
	...restProps
}) {
	return (
		<Style.Bubble data-tip data-for={dataFor} {...restProps}>
			{children}
			<Tooltip effect="solid" id={dataFor} place="right">
				{tooltip}
			</Tooltip>
		</Style.Bubble>
	);
};

Scroller.Picture = function ScrollerPicture({
	src,
	alt,
	children,
	...restProps
}) {
	return <Style.Picture src={src} alt={alt} {...restProps} />;
};

Scroller.Separator = function ScrollerSeparator({ src, ...restProps }) {
	return <Style.Separator src={src} {...restProps} />;
};

Scroller.Badge = function ScrollerBadge({ value, ...restProps }) {
	return (
		<Style.Badge {...restProps}>
			<span>{value}</span>
		</Style.Badge>
	);
};

Scroller.Icon = function ScrollerIcon({ icon, ...restProps }) {
	return <Style.Icon icon={icon} {...restProps} />;
};

Scroller.Section = function ScrollerSection({ children, ...restProps }) {
	return <Style.Section {...restProps}>{children}</Style.Section>;
};

export default Scroller;
