import React from "react";
import * as Style from "./styles/QR";
import * as ASSETS from "../../constants/assets";
function QR({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

QR.Code = function QRCode({ ...restProps }) {
	return <Style.Code src={ASSETS.QR_CODE} {...restProps} />;
};

QR.Logo = function QRLogo({ src, ...restProps }) {
	return <Style.Logo src={ASSETS.QR_DISCORD} {...restProps} />;
};

export default QR;
