import React from "react";

import Form from "../index";

export default {
	component: Form,
	title: "Form / Button",
};

export const Template = (args) => (
	<Form.Button type="submit">Tiếp theo</Form.Button>
);

export const Default = Template.bind({});
Default.args = {};
