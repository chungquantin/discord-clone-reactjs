import React from "react";
import * as Style from "./styles/Sidebar";

function SideBar({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

SideBar.SearchBar = function SideBarSearchBar({ children, ...restProps }) {
	return <Style.SearchBar {...restProps}>{children}</Style.SearchBar>;
};

SideBar.Option = function SideBarOption({ children, ...restProps }) {
	return <Style.Option {...restProps}>{children}</Style.Option>;
};

SideBar.Header = function SideBarHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

SideBar.Panel = function SideBarPanel({ children, ...restProps }) {
	return <Style.Panel {...restProps}>{children}</Style.Panel>;
};

SideBar.Content = function SideBarContent({ children, ...restProps }) {
	return <Style.Content {...restProps}>{children}</Style.Content>;
};

SideBar.Inner = function SideBarInner({ children, ...restProps }) {
	return <Style.Inner {...restProps}>{children}</Style.Inner>;
};

SideBar.Icon = function SideBarIcon({ icon, ...restProps }) {
	return <Style.Icon icon={icon} {...restProps} />;
};

SideBar.Avatar = function SideBarAvatar({ src, status, ...restProps }) {
	return (
		<Style.Avatar status={status} {...restProps}>
			<img src={src} />
		</Style.Avatar>
	);
};

export default SideBar;
