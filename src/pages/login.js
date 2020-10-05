import React, { useState, useEffect } from "react";
import { Form, Header, FlexBox } from "../components";
import { QRContainer } from "../container";
import * as ROUTES from "../constants/routes";

const DAY_BG = "/assets/images/misc/login_bg.jpg";
const NIGHT_BG = "/assets/images/misc/login_bg_night.jpg";
const WOBBLY_THEME = "/assets/images/misc/wobblytheme.png";
const FULL_LOGO = "/assets/images/logo/logo_full.svg";
const __current_hour__ = new Date().getHours();

function Login() {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState({ isExist: false, message: "" });

	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState({
		isExist: false,
		message: "",
	});

	const [isEmpty, setIsEmpty] = useState(true);

	const handleLogIn = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		//TODO Refractor to avoid repetition in code
		if (email.length < 8 || password.length < 6) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
		}
		if (email.length < 8) {
			setEmailError({
				isExist: true,
				message: "Địa chỉ email phải dài hơn 4 kí tự",
			});
		} else {
			setEmailError({
				isExist: false,
				message: "",
			});
		}
		if (password.length < 6) {
			setPasswordError({
				isExist: true,
				message: "Mật khẩu phải dài hơn 4 kí tự",
			});
		} else {
			setPasswordError({
				isExist: false,
				message: "",
			});
		}
	}, [password, email]);

	return (
		<Header>
			<Header.Background
				src={__current_hour__ > 12 && __current_hour__ < 6 ? NIGHT_BG : DAY_BG}
			/>
			<div
				style={{
					position: "absolute",
					zIndex: -3,
					height: "100vh",
					overflow: "hidden",
				}}
			>
				<img src={WOBBLY_THEME} style={{ height: "860px" }} />
			</div>
			<Header.Frame>
				<FlexBox direction="column">
					<Header.Logo src={FULL_LOGO} />
				</FlexBox>
			</Header.Frame>
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
								<Form.Header className="__login_header">
									Chào mừng trở lại!
								</Form.Header>
								<Form.Body className="__login_body">
									Rất vui mừng khi được gặp lại bạn!
								</Form.Body>
								<Form.Base onSubmit={handleLogIn}>
									<Form.Label
										className={`__login_label  ${
											emailError.isExist === true && "__label_error"
										}`}
									>
										Email
										{emailError.isExist === true && (
											<Form.Error>- &nbsp;{emailError.message}</Form.Error>
										)}
									</Form.Label>
									<Form.Input
										type="email"
										className={emailError.isExist === true && "__input_error"}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<Form.Label
										className={`__login_label  ${
											passwordError.isExist === true && "__label_error"
										}`}
									>
										Mật khẩu
										{passwordError.isExist === true && (
											<Form.Error>- &nbsp;{passwordError.message}</Form.Error>
										)}
									</Form.Label>
									<Form.Input
										type="password"
										className={
											passwordError.isExist === true && "__input_error"
										}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<Form.Link className="__login_link">Quên mật khẩu?</Form.Link>
									<Form.Button
										className="__login_button"
										type="submit"
										disabled={isEmpty}
									>
										Đăng nhập
									</Form.Button>
									<Form.Text>
										Cần một tài khoản?
										<Form.Link to={ROUTES.__signup} className="__login_link">
											&nbsp;Đăng ký
										</Form.Link>
									</Form.Text>
								</Form.Base>
							</FlexBox>
							<FlexBox direction="column" className="__login_qr_area">
								<QRContainer />
								<Form.Header className="__qr_header">
									Đăng nhập bằng mã QR
								</Form.Header>
								<Form.Body className="__qr_body">
									Quét bằng <span>ứng dụng di động Discord</span> đăng nhập tức
									thì.
								</Form.Body>
							</FlexBox>
						</FlexBox>
					</Form.Inner>
				</Form>
			</Form.Wrapper>
		</Header>
	);
}

export default Login;