import React, { createContext, useContext } from "react";
import * as Style from "./styles/Sidebar";
import * as ASSETS from "../../constants/assets";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusWithTooltip from "../custom/Sidebar/StatusWithTooltip";

function SideBar({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

SideBar.SearchBar = function SideBarSearchBar({ children, ...restProps }) {
	return <Style.SearchBar {...restProps}>{children}</Style.SearchBar>;
};

SideBar.Header = function SideBarHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

const TypeContext = createContext();
SideBar.Option = function SideBarOption({ children, type, ...restProps }) {
	return (
		<TypeContext.Provider value={{ type }}>
			<Style.Option {...restProps}>
				{children}
				{type === "closable" && (
					<FontAwesomeIcon icon={faTimes} className="__close_button" />
				)}
			</Style.Option>
		</TypeContext.Provider>
	);
};

SideBar.Content = function SideBarContent({ text, children, ...restProps }) {
	const { type } = useContext(TypeContext);
	const limit = type === "monitor" ? 8 : 16;
	return (
		<Style.Content {...restProps} className={`__${type}`}>
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

SideBar.Avatar = function SideBarAvatar({
	src,
	alt,
	id,
	status,
	...restProps
}) {
	const DEFAULT_AVATAR =
		Math.floor(Math.random() * 1) + 1 === 1
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
			<StatusWithTooltip status={status} id={id} />
		</Style.Wrapper>
	);
};

SideBar.SubContent = function SideBarSubContent({
	text,
	children,
	...restProps
}) {
	const { type } = useContext(TypeContext);
	const limit = type === "monitor" ? 6 : 18;
	return (
		<Style.SubContent {...restProps}>
			{text != null
				? "Playing " +
				  (text.length > limit ? `${text.substring(0, limit)}...` : text)
				: null}
		</Style.SubContent>
	);
};

SideBar.Panel = function SideBarPanel({ children, ...restProps }) {
	return <Style.Panel {...restProps}>{children}</Style.Panel>;
};

SideBar.MonitorSection = function SideBarMonitorSection({
	children,
	...restProps
}) {
	return <Style.MonitorSection {...restProps}>{children}</Style.MonitorSection>;
};

export default SideBar;
