import React from "react";
import { Field, Formik } from "formik";
import Form from "../../index";

export default {
	component: Form,
	title: "Form / Formik / LoginForm",
};

export const Template = (args) => (
	// <Form.Base>
	// 	<Form.Label>Email</Form.Label>
	// 	<Form.Input type="email" />
	// 	<Form.Label>Mật khẩu</Form.Label>
	// 	<Form.Input type="password" />
	// 	<Form.Link>
	// 		<span>Quên mật khẩu?</span>
	// 	</Form.Link>
	// 	<Form.Button type="submit" disabled={false}>
	// 		Đăng nhập
	// 	</Form.Button>
	// 	<Form.Text>
	// 		Cần một tài khoản?
	// 		<Form.Link>
	// 			&nbsp;<span>Đăng ký</span>
	// 		</Form.Link>
	// 	</Form.Text>
	// </Form.Base>
	<Formik
		initialValues={{
			email: "user@email.com",
		}}
		onSubmit={(data, { setSubmitting }) => {
			setSubmitting(true);
			console.log("submit", data);
			setSubmitting(false);
		}}
	>
		{({ values, isSubmitting, handleSubmit, handleChange }) => (
			<Form className="__hasNoBackground">
				<Form.Base onSubmit={handleSubmit}>
					<Form.Label>Email</Form.Label>
					<Field type="input" name="email" as={Form.Input} />
					<Field type="select" name="email" as={Form.Select}>
						<Form.Option></Form.Option>
					</Field>
					<Form.Button disabled={isSubmitting} type="submit">
						Đăng nhập
					</Form.Button>
				</Form.Base>
				<pre>{JSON.stringify(values, null, 2)}</pre>
			</Form>
		)}
	</Formik>
);

export const Default = Template.bind({});
Default.args = {};
