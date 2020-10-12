import React from "react";
import * as Style from "./styles/Sidebar";
import * as ASSETS from "../../constants/assets";
import StatusWithTooltip from "./custom/StatusWithTooltip";

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

SideBar.Avatar = function SideBarAvatar({ src, alt, status, ...restProps }) {
	const DEFAULT_AVATAR =
		Math.floor(Math.random() * 2) + 1 === 1
			? ASSETS.DEFAULT_AVATAR_1
			: ASSETS.DEFAULT_AVATAR_2;

	return (
		<Style.Wrapper>
			<Style.Avatar status={status} {...restProps}>
				{src ? (
					<img src={src} alt={alt} />
				) : (
					<img src={DEFAULT_AVATAR} alt="Default Avatar" />
				)}
			</Style.Avatar>
			<StatusWithTooltip status={status} src={src} />
		</Style.Wrapper>
	);
};

export default SideBar;
