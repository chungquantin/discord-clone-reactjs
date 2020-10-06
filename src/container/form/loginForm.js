import React, { useState, useEffect } from "react";
// -- Components --
import { QRContainer } from "../index";
import { Formik, Field } from "formik";
import { Form, FlexBox } from "../../components";
// -- Backend --
import { signInWithEmailAndPassword } from "../../server/graphql/actions";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../server/graphql/mutations";
// -- Constants --
import * as ROUTES from "../../constants/routes";
// -- Validate --
import * as yup from "yup";
import { validRuleSet } from "../../utils/validate";

const validationSchema = yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
});

function LoginFormContainer() {
	const [signIn] = useMutation(SIGN_IN);
	const [additionalError, setAdditionalErrors] = useState("");

	return (
		<Formik
			validateOnChange={true}
			initialValues={{
				email: "user@email.com",
				password: "123456",
			}}
			onSubmit={async (data, { setSubmitting }) => {
				setSubmitting(true);
				try {
					let token = await signInWithEmailAndPassword(
						signIn,
						data.email,
						data.password
					);
					localStorage.setItem("authUser", token);
				} catch (error) {
					setAdditionalErrors(error.message);
				}
				setSubmitting(false);
			}}
			validationSchema={validationSchema}
		>
			{({ values, isSubmitting, handleSubmit, errors }) => (
				<Form.Wrapper>
					<Form className="__hasNoBackground">
						<Form.Inner
							width={"784px"}
							minHeight={"408px"}
							bgColor={"#383B41"}
							style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,.2)" }}
						>
							<FlexBox direction="row" className="__login_inner">
								<FlexBox direction="column" className="__login_input_area">
									<Form.Header>Chào mừng trở lại!</Form.Header>
									<Form.Body>Rất vui mừng khi được gặp lại bạn!</Form.Body>
									<Form.Base onSubmit={handleSubmit}>
										<Field
											value={values.email}
											type="input"
											label="Email"
											name="email"
											errorText={errors.email || additionalError}
											as={Form.InputWithLabelAndError}
										/>
										<Field
											value={values.password}
											type="password"
											label="Mật khẩu"
											name="password"
											errorText={errors.password}
											as={Form.InputWithLabelAndError}
										/>
										<Form.Link>
											<span>Quên mật khẩu?</span>
										</Form.Link>
										<Form.Button type="submit" disabled={isSubmitting}>
											Đăng nhập
										</Form.Button>
										<Form.Text>
											Cần một tài khoản?
											<Form.Link to={ROUTES.__signup}>
												&nbsp;<span>Đăng ký</span>
											</Form.Link>
										</Form.Text>
									</Form.Base>
								</FlexBox>
								<FlexBox direction="column" className="__login_qr_area">
									<QRContainer />
									<Form.Header>Đăng nhập bằng mã QR</Form.Header>
									<Form.Body>
										Quét bằng <span>ứng dụng di động Discord</span> đăng nhập
										tức thì.
									</Form.Body>
								</FlexBox>
							</FlexBox>
						</Form.Inner>
					</Form>
				</Form.Wrapper>
			)}
		</Formik>
	);
}

export default LoginFormContainer;
