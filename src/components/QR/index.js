import React from "react";
import * as Style from "./styles/QR";

function QR({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

QR.Code = function QRCode({ ...restProps }) {
	return <Style.Code src={"/assets/images/qr/code.png"} {...restProps} />;
};

QR.Logo = function QRLogo({ src, ...restProps }) {
	return <Style.Logo src={"/assets/images/qr/discord.png"} {...restProps} />;
};

export default QR;
