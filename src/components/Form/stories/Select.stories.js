import React from "react";

import Form from "../index";
import { FlexBox } from "../../index";

export default {
	component: Form,
	title: "Form / Select",
};

export const Template = (args) => (
	<FlexBox direction="row">
		<Form.Select>
			<Form.Option value={null} text={"Ngày"} disabled selected />
			<Form.Option value={null} text={"1"} />
			<Form.Option value={null} text={"2"} />
			<Form.Option value={null} text={"3"} />
		</Form.Select>
		<Form.Select>
			<Form.Option value={null} text={"Tháng"} disabled selected />
			<Form.Option value={null} text={"1"} />
			<Form.Option value={null} text={"2"} />
			<Form.Option value={null} text={"3"} />
		</Form.Select>
		<Form.Select>
			<Form.Option value={null} text={"Năm"} disabled selected />
			<Form.Option value={null} text={"1"} />
			<Form.Option value={null} text={"2"} />
			<Form.Option value={null} text={"3"} />
		</Form.Select>
	</FlexBox>
);

export const Default = Template.bind({});
Default.args = {};
