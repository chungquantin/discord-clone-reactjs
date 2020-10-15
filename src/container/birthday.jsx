import React from "react";
// -- Components --
import { Form, FlexBox } from "../components";
import { Formik, Field } from "formik";
import withOptions from "../helpers/hoc/withOptions";
// -- Validate --
import * as Yup from "yup";
import { validRuleSet } from "../utils/validate";

const __current_year__ = parseInt(new Date().getFullYear());
const validationSchema = Yup.object({
	birthday: validRuleSet.birthday,
});

function FormContainer() {
	return (
		<Formik
			validateOnChange={true}
			initialValues={{ birthday: { day: "Ngày", month: "Tháng", year: "Năm" } }}
			onSubmit={({ birthday: { day, month, year } }) => {
				//TODO Further improvements goes here
			}}
			validationSchema={validationSchema}
		>
			{({ values, errors, handleSubmit }) => (
				<Form style={{ opacity: "0.85" }}>
					<Form.Inner minHeight={"464px"} width={"685px"} bgColor={"white"}>
						<FlexBox direction={"column"}>
							<Form.Image src={"/assets/images/misc/birthday_sidebar.svg"} />
						</FlexBox>
						<FlexBox
							direction={"column"}
							style={{ padding: "0px 16px", paddingTop: "60px" }}
						>
							<Form.Image
								style={{ marginBottom: "10px" }}
								src="/assets/images/logo/logo.svg"
							/>
							<Form.Header>Chào mừng bạn đến với Discord!</Form.Header>
							<Form.Body>
								Chúng tôi rất vui khi có bạn ở đây! Trước khi bắt đầu, vui lòng
								nhập ngày sinh của bạn.
								<Form.Link
									to={"https://support.discord.com/hc/vi/articles/360040724612"}
								>
									&nbsp;Tại sao tôi phải cung cấp ngày sinh?
								</Form.Link>
							</Form.Body>
							<Form.Label>Ngày sinh</Form.Label>
							<Form.Base onSubmit={handleSubmit}>
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
								<Form.Button type="submit">Tiếp theo</Form.Button>
							</Form.Base>
						</FlexBox>
					</Form.Inner>
				</Form>
			)}
		</Formik>
	);
}

export default FormContainer;
