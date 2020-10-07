import React from "react";
import * as Style from "./styles/Header.js";

function Header({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Style.Frame {...restProps}>{children}</Style.Frame>;
};

Header.Background = function HeaderBackground({ src, children, ...restProps }) {
	return <Style.Background src={src} {...restProps} />;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
	return <Style.Logo {...restProps}>{children}</Style.Logo>;
};

export default Header;
