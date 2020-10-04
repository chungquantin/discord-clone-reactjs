import React from "react";
import { Form, Header, FlexBox } from "../components";

function Login(props) {
	return (
		<Header>
			<Header.Background src={"/assets/images/misc/login_bg.jpg"} />
			<Header.Frame>
				<FlexBox direction="column">
					<Header.Logo src={"/assets/images/logo/logo_full.svg"} />
				</FlexBox>
			</Header.Frame>
			<Form.Wrapper>
				<Form
					width={"784px"}
					minHeight={"408px"}
					bgColor={"#383B41"}
					className="__hasNoBackground"
				>
					<FlexBox direction="row" className="__login_inner">
						<FlexBox direction="column" className="__login_input_area">
							<Form.Header className="__login_header">
								Chào mừng trở lại!
							</Form.Header>
							<Form.Body className="__login_body">
								Rất vui mừng khi được gặp lại bạn!
							</Form.Body>
							<Form.Base>
								<Form.Label className="__login_label">Email</Form.Label>
								<Form.Input type="email" />
								<Form.Label className="__login_label">Mật khẩu</Form.Label>
								<Form.Input type="password" />
								<Form.Link className="__login_link">Quên mật khẩu?</Form.Link>
								<Form.Button className="__login_button">Đăng nhập</Form.Button>
								<Form.Text>
									Cần một tài khoản?
									<Form.Link className="__login_link">&nbsp;Đăng ký</Form.Link>
								</Form.Text>
							</Form.Base>
						</FlexBox>
						<FlexBox direction="column" className="__login_qr_area">
							<Form.Header></Form.Header>
						</FlexBox>
					</FlexBox>
				</Form>
			</Form.Wrapper>
		</Header>
	);
}

export default Login;
