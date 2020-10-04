import React from "react";

import QR from "../index";

export default {
	component: QR,
	title: "QR / Container",
};

export const Template = (args) => (
	<QR>
		<QR.Code />
		<QR.Logo />
	</QR>
);

export const Default = Template.bind({});
Default.args = {};
