import React from "react";
import * as Style from "./styles/Tab";

function Tab({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Tab.Body = function TabBody({ children, ...restProps }) {
	return <Style.Body {...restProps}>{children}</Style.Body>;
};

Tab.Bar = function TabBar({ children, ...restProps }) {
	return <Style.Bar {...restProps}>{children}</Style.Bar>;
};

Tab.Separator = function TabSeparator({ children, ...restProps }) {
	return <Style.Separator {...restProps} />;
};

Tab.Header = function TabHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Tab.TextButton = function TabTextButton({ children, ...restProps }) {
	return <Style.TextButton {...restProps}>{children}</Style.TextButton>;
};

Tab.StyledTextButton = function TabStyledTextButton({
	children,
	...restProps
}) {
	return (
		<Style.StyledTextButton {...restProps}>{children}</Style.StyledTextButton>
	);
};

Tab.IconButton = function TabIconButton({ icon, to, ...restProps }) {
	return (
		<Style.Link {...restProps} href={to}>
			<Style.IconButton icon={icon} />
		</Style.Link>
	);
};

Tab.Active = function TabActive({ children, ...restProps }) {
	return <Style.Active {...restProps}>{children}</Style.Active>;
};

Tab.ActiveCard = function TabActiveCard({ children, ...restProps }) {
	return <Style.ActiveCard {...restProps}>{children}</Style.ActiveCard>;
};

Tab.Text = function TabText({ children, ...restProps }) {
	return <Style.Text {...restProps}>{children}</Style.Text>;
};

Tab.Panel = function TabPanel({ index, children, ...restProps }) {
	return (
		<Style.Panel index={index} {...restProps}>
			{children}
		</Style.Panel>
	);
};

export default Tab;
