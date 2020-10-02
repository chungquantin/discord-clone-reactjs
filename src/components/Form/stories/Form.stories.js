import React from "react";

import Form from "../index";
import { FlexBox } from "../../index";

export default {
	component: Form,
	title: "Birthday Form",
};

export const Template = (args) => (
	<Form>
		<FlexBox direction={"column"}>
			<Form.Image src={"/assets/images/misc/birthday_sidebar.svg"} />
		</FlexBox>
		<FlexBox direction={"column"} style={{ padding: "0px 16px" }}>
			<Form.Header>Chào mừng bạn đến với Discord!</Form.Header>
			<Form.Body>
				Chúng tôi rất vui khi có bạn ở đây! Trước khi bắt đầu, vui lòng nhập
				ngày sinh của bạn.
				<Form.Link
					to={"https://support.discord.com/hc/vi/articles/360040724612"}
				>
					&nbsp;Tại sao tôi phải cung cấp ngày sinh?
				</Form.Link>
			</Form.Body>
			<Form.Label>Ngày sinh</Form.Label>
			<Form.Base>
				<FlexBox direction="row">
					<Form.Select placeholder={"Ngày"}>
						<Form.Option value={null}></Form.Option>
					</Form.Select>
					<Form.Select placeholder={"Tháng"}>
						<Form.Option value={null}></Form.Option>
					</Form.Select>
					<Form.Select placeholder={"Năm"}>
						<Form.Option value={null}></Form.Option>
					</Form.Select>
				</FlexBox>

				<Form.Button />
			</Form.Base>
		</FlexBox>
	</Form>
);

export const Default = Template.bind({});
Default.args = {};
