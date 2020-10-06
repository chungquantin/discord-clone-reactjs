import React, { useState } from "react";
import withOptions from "../../higher-order-components/withOptions";
// -- Backend --
import { signUpWithEmailAndPassword } from "../../server/graphql/actions";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../server/graphql/mutations";
// -- Components --
import { Form, FlexBox } from "../../components";
import { Formik, Field } from "formik";
// -- Constants --
import * as ROUTES from "../..//constants/routes";
// -- Validate --
import * as yup from "yup";
import { validRuleSet } from "../../utils/validate";

const validateSchema = yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
	username: validRuleSet.username,
	confirmPassword: validRuleSet.confirmPassword,
	birthday: validRuleSet.birthday,
});
const __current_year__ = parseInt(new Date().getFullYear());

function SignUpContainer() {
	const [additionalError, setAdditionalErrors] = useState("");
	const [signUp] = useMutation(SIGN_UP);
	return (
		<Formik
			validateOnChange={true}
			initialValues={{
				email: "user@email.com",
				password: "12345",
				confirmPassword: "12345",
				username: "tinchung",
				birthday: { day: "Ngày", month: "Tháng", year: "Năm" },
			}}
			validationSchema={validateSchema}
			onSubmit={async (data, { setSubmitting }) => {
				setSubmitting(true);
				try {
					let token = await signUpWithEmailAndPassword(signUp, data);
					console.log(token);
				} catch (error) {
					setAdditionalErrors(error.message);
				}
				setSubmitting(false);
			}}
		>
			{({ values, isSubmitting, handleSubmit, errors }) => (
				<Form.Wrapper>
					<Form className="__hasNoBackground">
						<Form.Inner
							width={"416px"}
							minHeight={"600px"}
							bgColor={"#383B41"}
							className="__signup_inner"
						>
							<Form.Base direction="column" onSubmit={handleSubmit}>
								<Form.Header>Tạo tài khoản</Form.Header>
								<Field
									value={values.email}
									type="input"
									label="Email"
									name="email"
									errorText={errors.email || additionalError}
									as={Form.InputWithLabelAndError}
								/>
								<Field
									value={values.username}
									type="input"
									label="Tên đăng nhập"
									name="username"
									errorText={errors.username}
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
								<Field
									value={values.confirmPassword}
									type="password"
									label="Xác nhận mật khẩu"
									name="confirmPassword"
									errorText={errors.confirmPassword}
									as={Form.InputWithLabelAndError}
								/>
								<Form.Label className={!!errors.birthday && "__label_error"}>
									Ngày sinh
									{!!errors.birthday && (
										<Form.Error>- {"Ô này là trường bắt buộc"}</Form.Error>
									)}
								</Form.Label>
								<FlexBox direction="row">
									<Field
										name="birthday.day"
										type="select"
										as={withOptions(Form.Select)(1, 31, "", "Ngày")}
									></Field>
									<Field
										name="birthday.month"
										type="select"
										as={withOptions(Form.Select)(1, 12, "Tháng", "Tháng")}
									></Field>
									<Field
										name="birthday.year"
										type="select"
										as={withOptions(Form.Select)(
											1900,
											__current_year__,
											"",
											"Năm"
										)}
									></Field>
								</FlexBox>
								<Form.Button type="submit" disabled={isSubmitting}>
									Tiếp tục
								</Form.Button>
								<Form.Link to={ROUTES.__login}>
									<span>Đã có tài khoản?</span>
								</Form.Link>
								<Form.Text>
									Khi nhấn nút đăng ký, nghĩa là bạn đã đồng ý với
									<Form.Link
										to={"https://discord.com/terms"}
										className="__small_link"
									>
										<span>&nbsp;Điều Khoản Dịch vụ</span>
									</Form.Link>
									&nbsp;và
									<Form.Link
										to={"https://discord.com/privacy"}
										className="__small_link"
									>
										<span>&nbsp; Chính Sách Bảo Mật</span>
									</Form.Link>
								</Form.Text>
							</Form.Base>
						</Form.Inner>
					</Form>
				</Form.Wrapper>
			)}
		</Formik>
	);
}

export default SignUpContainer;