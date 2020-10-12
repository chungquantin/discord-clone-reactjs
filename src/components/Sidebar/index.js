import React from "react";
import * as Style from "./styles/Sidebar";
import * as ASSETS from "../../constants/assets";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusWithTooltip from "./custom/StatusWithTooltip";

function SideBar({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

SideBar.SearchBar = function SideBarSearchBar({ children, ...restProps }) {
	return <Style.SearchBar {...restProps}>{children}</Style.SearchBar>;
};

SideBar.Header = function SideBarHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

SideBar.Panel = function SideBarPanel({ children, ...restProps }) {
	return <Style.Panel {...restProps}>{children}</Style.Panel>;
};

SideBar.Option = function SideBarOption({ children, type, ...restProps }) {
	return (
		<Style.Option {...restProps}>
			{children}
			{type === "closable" && (
				<FontAwesomeIcon icon={faTimes} className="__close_button" />
			)}
		</Style.Option>
	);
};

SideBar.Content = function SideBarContent({ text, children, ...restProps }) {
	const limit = 16;
	return (
		<Style.Content {...restProps}>
			{text.length > limit ? `${text.substring(0, limit)}...` : text}
		</Style.Content>
	);
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
