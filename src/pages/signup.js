import React, { useState, useEffect } from "react";
// -- Components --
import { AuthHeaderContainer } from "../container";
import { Form, FlexBox } from "../components";
import withOptions from "../higher-order-components/withOptions";
// -- Utils --
import * as Regex from "../utils/validate";
// -- Backend --
import { signUpWithEmailAndPassword } from "../server/graphql/actions";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../server/graphql/mutations";
// -- Constant --
import * as ROUTES from "../constants/routes";
const __current_year__ = parseInt(new Date().getFullYear());

function SignUp() {
	// -- Higher Order Components --
	const DaySelectWithOptions = withOptions(Form.Select)(1, 31, "");
	const MonthSelectWithOptions = withOptions(Form.Select)(1, 12, "Tháng");
	const YearSelectWithOptions = withOptions(Form.Select)(
		1900,
		__current_year__,
		""
	);
	// -- States --
	const [input, setInput] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		username: "",
		birthday: {
			day: null,
			month: null,
			year: null,
		},
	});
	const [error, setError] = useState({
		status: {
			email: false,
			password: false,
			confirmPassword: false,
			username: false,
			birthday: false,
		},
		message: {
			email: " ",
			password: " ",
			confirmPassword: " ",
			username: " ",
			birthday: " ",
		},
	});
	// -- Logic Handling --
	const handleBirthdayChange = (target, value) => {
		setInput({
			...input,
			birthday: {
				...input.birthday,
				[target]: value,
			},
		});
	};
	const handleInputChange = (target, value) => {
		setInput({
			...input,
			[target]: value,
		});
	};
	const setErrorByTarget = (target, status, message) => {
		setError({
			status: {
				...error.status,
				[target]: status,
			},
			message: {
				...error.message,
				[target]: message,
			},
		});
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(input);
		switch (true) {
			case input.email.length < 8:
				setErrorByTarget("email", true, "- Địa chỉ email phải dài hơn 8 kí tự");
			case true: // Regex
				if (!Regex.validateEmail(input.email)) {
					setErrorByTarget("email", true, "- Địa chỉ không hợp lý");
				}
			default:
				setErrorByTarget("email", false, "");
				break;
		}
		// switch (true) {
		// 	case input.username.length < 3 || input.username.length > 12:
		// 		setErrorByTarget(
		// 			"username",
		// 			true,
		// 			"- Tên người dùng phải từ 3-12 kí tự."
		// 		);
		// 		break;
		// 	case true: // Regex
		// 		if (!Regex.validateUsername(input.username)) {
		// 			setErrorByTarget(
		// 				"username",
		// 				true,
		// 				"- Tên người dùng không được bao gồm kí tự đặc biệt."
		// 			);
		// 		}
		// 		break;
		// 	default:
		// 		setErrorByTarget("username", false, "");
		// 		break;
		// }
	};

	return (
		<AuthHeaderContainer>
			<Form.Wrapper>
				<Form className="__hasNoBackground">
					<Form.Inner
						width={"416px"}
						minHeight={"600px"}
						bgColor={"#383B41"}
						className="__signup_inner"
					>
						<Form.Base direction="column" onSubmit={handleFormSubmit}>
							<Form.Header>Tạo tài khoản</Form.Header>
							<Form.Label
								for="email"
								className={error.status.email === true && "__label_error"}
							>
								Email
								{error.status.email === true && (
									<Form.Error>{error.message.email}</Form.Error>
								)}
							</Form.Label>
							<Form.Input
								type="email"
								name="email"
								className={error.status.email === true && "__input_error"}
								onChange={(e) => handleInputChange("email", e.target.value)}
							/>
							<Form.Label
								for="username"
								className={error.status.username === true && "__label_error"}
							>
								Tên đăng nhập
								{error.status.username === true && (
									<Form.Error>{error.message.username}</Form.Error>
								)}
							</Form.Label>
							<Form.Input
								type="text"
								name="username"
								className={error.status.username === true && "__input_error"}
								onChange={(e) => handleInputChange("username", e.target.value)}
							/>
							<Form.Label for="password">Mật khẩu</Form.Label>
							<Form.Input
								type="password"
								name="password"
								onChange={(e) => handleInputChange("password", e.target.value)}
							/>
							<Form.Label for="confirmPassword">Xác nhận mật khẩu</Form.Label>
							<Form.Input
								type="password"
								name="confirmPassword"
								onChange={(e) =>
									handleInputChange("confirmPassword", e.target.value)
								}
							/>
							<Form.Label>Ngày sinh</Form.Label>
							<FlexBox direction="row">
								<DaySelectWithOptions
									onChange={(e) => handleBirthdayChange("day", e.target.value)}
								>
									<Form.Option
										value={null}
										text={input.birthday.day ? input.birthday.day : "Ngày"}
										disabled
										selected
									/>
								</DaySelectWithOptions>
								<MonthSelectWithOptions
									onChange={(e) =>
										handleBirthdayChange("month", e.target.value)
									}
								>
									<Form.Option
										value={null}
										text={
											input.birthday.month
												? `Tháng ${input.birthday.month}`
												: "Tháng"
										}
										disabled
										selected
									/>
								</MonthSelectWithOptions>
								<YearSelectWithOptions
									onChange={(e) => handleBirthdayChange("year", e.target.value)}
								>
									<Form.Option
										value={null}
										text={input.birthday.year ? input.birthday.year : "Năm"}
										disabled
										selected
									/>
								</YearSelectWithOptions>
							</FlexBox>
							<Form.Button type="submit">Tiếp tục</Form.Button>
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
		</AuthHeaderContainer>
	);
}

export default SignUp;
