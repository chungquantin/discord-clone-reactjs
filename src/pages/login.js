import React, { useState, useEffect } from "react";
// -- Components --
import { Form, FlexBox } from "../components";
import { QRContainer, AuthHeaderContainer } from "../container";
// -- Utils --
import { validateEmail } from "../utils/validate";
// -- Backend --
import { signInWithEmailAndPassword } from "../server/graphql/actions";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../server/graphql/mutations";
// -- Constants --
import * as ROUTES from "../constants/routes";

function Login() {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState({ isExist: false, message: "" });
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState({
		isExist: false,
		message: "",
	});
	const [errorCounter, setErrorCounter] = useState(0);
	const [signIn] = useMutation(SIGN_IN);

	async function handleLogIn(e) {
		e.preventDefault();
		try {
			let token = await signInWithEmailAndPassword(signIn, email, password);
			localStorage.setItem("authUser", token);
		} catch (error) {
			setPasswordError({
				isExist: true,
				message: null,
			});
			setEmailError({
				isExist: true,
				message: `- ${error.message}`,
			});
		}
	}

	useEffect(() => {
		setErrorCounter(0);
		function emailValidCase() {
			if (email.length > 4) {
				if (email.length < 8) {
					setEmailError({
						isExist: true,
						message: "- Địa chỉ email phải dài hơn 4 kí tự",
					});
					setErrorCounter((errorCounter) => errorCounter + 1);
				} else if (!validateEmail(email)) {
					setEmailError({
						isExist: true,
						message: "- Địa chỉ email không hợp lệ",
					});
					setErrorCounter((errorCounter) => errorCounter + 1);
				} else {
					setEmailError({
						isExist: false,
						message: "",
					});
				}
			}
		}
		function passwordValidCase() {
			if (email.length > 3) {
				if (password.length < 6) {
					setPasswordError({
						isExist: true,
						message: "- Mật khẩu phải dài hơn 4 kí tự",
					});
					setErrorCounter((errorCounter) => errorCounter + 1);
				} else {
					setPasswordError({
						isExist: false,
						message: "",
					});
				}
			}
		}
		emailValidCase();
		passwordValidCase();
	}, [email, password]);

	return (
		<AuthHeaderContainer>
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
								<Form.Base onSubmit={handleLogIn}>
									<Form.Label
										className={emailError.isExist === true && "__label_error"}
									>
										Email
										{emailError.isExist === true && (
											<Form.Error>{emailError.message}</Form.Error>
										)}
									</Form.Label>
									<Form.Input
										type="email"
										className={emailError.isExist === true && "__input_error"}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<Form.Label
										className={
											passwordError.isExist === true && "__label_error"
										}
									>
										Mật khẩu
										{passwordError.isExist === true && (
											<Form.Error>{passwordError.message}</Form.Error>
										)}
									</Form.Label>
									<Form.Input
										type="password"
										className={
											passwordError.isExist === true && "__input_error"
										}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<Form.Link>
										<span>Quên mật khẩu?</span>
									</Form.Link>
									<Form.Button
										type="submit"
										disabled={errorCounter > 0 ? true : false}
									>
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
									Quét bằng <span>ứng dụng di động Discord</span> đăng nhập tức
									thì.
								</Form.Body>
							</FlexBox>
						</FlexBox>
					</Form.Inner>
				</Form>
			</Form.Wrapper>
		</AuthHeaderContainer>
	);
}

export default Login;
