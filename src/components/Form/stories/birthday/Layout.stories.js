import React from "react";

import Form from "../../index";
import { FlexBox } from "../../../index";

export default {
	component: Form,
	title: "Form / Birthday / Layout",
};

export const Template = (args) => (
	<Form minHeight={"464px"} width={"685px"} bgColor={"white"}>
		<FlexBox direction={"column"}>
			<Form.Image src={"/assets/images/misc/birthday_sidebar.svg"} />
		</FlexBox>
		<FlexBox
			direction={"column"}
			style={{ padding: "0px 16px", paddingTop: "60px" }}
		>
			{/* Children */}
		</FlexBox>
	</Form>
);

export const Default = Template.bind({});
Default.args = {};
