import React from "react";

import { FlexBox, Header } from "../..";

export default {
	component: Header,
	title: "Header / Logo",
};

export const WithBackground = (args) => (
	<Header>
		<Header.Background src={"/assets/images/misc/login_bg.jpg"} />
		<Header.Frame>
			<FlexBox direction="column">
				<Header.Logo src={"/assets/images/logo/logo_full.svg"} />
			</FlexBox>
		</Header.Frame>
	</Header>
);

export const NonBackground = (args) => (
	<Header style={{ backgroundColor: "black" }}>
		<Header.Frame style={{ position: "unset" }}>
			<FlexBox direction="column">
				<Header.Logo src={"/assets/images/logo/logo_full.svg"} />
			</FlexBox>
		</Header.Frame>
	</Header>
);

export const Default = WithBackground.bind({});
Default.args = {};
