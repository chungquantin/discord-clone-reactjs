import React from "react";
import { Form, Header, FlexBox } from "../components";
import { QRContainer } from "../container";

function Login() {
	return (
		<Header>
			<Header.Background
				src={
					new Date().getHours() > 12
						? "/assets/images/misc/login_bg_night.jpg"
						: "/assets/images/misc/login_bg.jpg"
				}
			/>
			<div
				style={{
					position: "absolute",
					zIndex: -3,
					height: "100vh",
					overflow: "hidden",
				}}
			>
				<img
					src="/assets/images/misc/wobblytheme.png"
					style={{ height: "860px" }}
				/>
			</div>
			<Header.Frame>
				<FlexBox direction="column">
					<Header.Logo src={"/assets/images/logo/logo_full.svg"} />
				</FlexBox>
			</Header.Frame>
			<Form.Wrapper>
				<Form className="__hasNoBackground">
					<Form.Inner width={"784px"} minHeight={"408px"} bgColor={"#383B41"}>
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
									<Form.Button className="__login_button">
										Đăng nhập
									</Form.Button>
									<Form.Text>
										Cần một tài khoản?
										<Form.Link className="__login_link">
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
