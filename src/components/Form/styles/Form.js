import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: rgb(0, 0, 0);
	&.__hasNoBackground {
		background-color: unset;
		.__login_inner {
			padding: 32px;
			z-index: 1;
			width: 100%;
			border-radius: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
			justify-content: space-between;
			.__login_input_area {
				padding-top: 10px;
				width: 414.4px;
				max-height: 340.6px;
				.__login_header {
					color: white;
				}
				.__login_body {
					color: #b4b6b8;
					margin-top: 10px;
					margin-bottom: 5px;
				}
				.__login_label {
					color: #889297;
					width: 414.4px;
					margin: 10px 0px;
				}
				.__login_button {
					margin-top: 10px;
					margin-bottom: 0px;
				}
				.__login_link {
					font-weight: 500;
					color: #7289da;
					margin: 5px 0px 0px 0px;
					font-size: 14px;
				}
			}
			.__login_qr_area {
				width: 240px;
			}
		}
	}
`;

export const Inner = styled.div`
	min-height: ${({ minHeight }) => minHeight};
	width: ${({ width }) => width};
	display: flex;
	border-radius: 7px;
	background-color: ${({ bgColor }) => bgColor};
	overflow: hidden;
`;

export const Button = styled.button`
	height: 44px;
	width: 408px;
	margin-top: 55px;
	border-radius: 3px;
	border: 0px;
	color: white;
	background-color: ${({ disabled }) =>
		disabled === true ? "#b7c3ec" : "#7289da"};
	cursor: pointer;
`;

export const Label = styled.h5`
	width: 100%;
	font-size: 12px;
	line-height: 16px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: rgb(106, 116, 128);
	font-weight: 700px;
	text-transform: uppercase;
`;

export const Link = styled(ReactRouterLink)`
	cursor: pointer;
	color: #1ea7fd;
	text-decoration: none;
`;

export const Placeholder = styled.h5`
	position: absolute;
	left: 50px;
	color: red;
`;

export const Select = styled.select`
	appearance: none;
	cursor-pointer: none;
	width: 100px;
	height: 40px;
	padding-left: 10px;
	margin: 0px 10px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	border: 1.5px solid rgba(210, 210, 210, 1);
	border-radius: 4px;
	background-color: rgba(250, 250, 250, 0.767);
	color: rgb(138, 138, 138);
`;

export const Option = styled.option``;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	div:nth-child(2) > ${Select} {
		width: 154px;
	}
`;

export const Header = styled.h1`
	font-size: 24px;
	line-height: 30px;
	font-weight: 600px;
	margin: 0px;
`;

export const Body = styled.p`
	text-align: center;
	font-size: 16px;
	line-height: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	cursor: pointer;
	right: 23px;
	color: rgb(46, 51, 56);
	font-size: smaller;
	top: 14px;
`;

export const Image = styled.img``;

export const Wrapper = styled.div`
	min-height: 580px;
	height: 100vh;
	width: 100vw;
	max-width: 1480px;
`;

export const Input = styled.input`
	height: 40px;
	padding: 0px 16px;
	transition: border 0.5s;
	background-color: #36393f;
	border: 1px solid #32353a;
	border-radius: 3px;
	color: #dfe0e2;
	&:focus {
		border: 1px solid #7289da;
		border-radius: 3px;
	}
`;

export const Text = styled.h5`
	color: #72767d;
	margin-top: 15px;
	font-weight: normal;
`;
