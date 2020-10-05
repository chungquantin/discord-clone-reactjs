import React from "react";
import { AuthHeaderContainer } from "../container";
import { Form, FlexBox } from "../components";
import * as ROUTES from "../constants/routes";

function SignUp() {
	return (
		<AuthHeaderContainer>
			<Form.Wrapper>
				<Form className="__hasNoBackground">
					<Form.Inner
						width={"416px"}
						minHeight={"514px"}
						bgColor={"#383B41"}
						className="__signup_inner"
					>
						<Form.Base direction="column">
							<Form.Header>Tạo tài khoản</Form.Header>
							<Form.Label for="email">Email</Form.Label>
							<Form.Input type="email" name="email" />
							<Form.Label for="username">Tên đăng nhập</Form.Label>
							<Form.Input type="text" name="username" />
							<Form.Label for="password">Mật khẩu</Form.Label>
							<Form.Input type="password" name="password" />
							<Form.Label>Ngày sinh</Form.Label>
							<FlexBox direction="row">
								<Form.Select>
									<Form.Option value={null} text={"Ngày"} disabled selected />
									<Form.Option value={null} text={"1"} />
									<Form.Option value={null} text={"2"} />
									<Form.Option value={null} text={"3"} />
								</Form.Select>
								<Form.Select>
									<Form.Option value={null} text={"Tháng"} disabled selected />
									<Form.Option value={null} text={"1"} />
									<Form.Option value={null} text={"2"} />
									<Form.Option value={null} text={"3"} />
								</Form.Select>
								<Form.Select>
									<Form.Option value={null} text={"Năm"} disabled selected />
									<Form.Option value={null} text={"1"} />
									<Form.Option value={null} text={"2"} />
									<Form.Option value={null} text={"3"} />
								</Form.Select>
							</FlexBox>
							<Form.Button>Tiếp tục</Form.Button>
							<Form.Link to={ROUTES.__login}>
								<span>Đã có tài khoản</span>
							</Form.Link>
						</Form.Base>
					</Form.Inner>
				</Form>
			</Form.Wrapper>
		</AuthHeaderContainer>
	);
}

export default SignUp;
