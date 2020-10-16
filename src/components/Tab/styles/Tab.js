import styled from "styled-components";
import { FlexBox, Form } from "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	background-color: green;
`;

export const Body = styled(FlexBox)`
	width: 100%;
	background-color: #36393f;
	height: calc(100% - 48px);
	padding-top: 48px;
`;

export const Bar = styled(FlexBox)`
	width: 100%;
	position: fixed;
	height: 48px;
	padding: 0px 8px 0px 8px;
	background-color: #36393f;
	box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
		0 2px 0 rgba(4, 4, 5, 0.05);
`;

export const Separator = styled.div`
	height: 24px;
	background-color: hsla(0, 0%, 100%, 0.06);
	border-radius: 1px;
	width: 1px;
	margin: 0px 16px;
`;

export const TextButton = styled.button`
	background-color: unset;
	border: none;
	color: #b9bbbe;
	font-size: 16px;
	cursor: pointer;
	margin-right: 16px;
	border-radius: 4px;
	padding-top: 1.5px;
	padding-bottom: 1.5px;
	&:hover {
		background-color: rgba(79, 84, 92, 0.16);
		color: #dcddde;
	}
	&.__selected {
		color: #ffffff;
		background-color: rgba(79, 84, 92, 0.32);
	}
`;

export const StyledTextButton = styled(TextButton)`
	background-color: #43b581;
	color: white;
	padding: 1.5px 8px;
	&:hover {
		background-color: #43b581;
		color: white;
	}
	&.__selected {
		background-color: #38524c;
		color: #3fae81;
	}
`;

export const Header = styled.h3`
	color: white;
	font-size: 14px;
	margin-right: 10px;
`;

export const IconButton = styled(FontAwesomeIcon)`
	color: #b9bbbe;
	cursor: pointer;
`;

export const Link = styled.a`
	margin-right: 15px;
`;

export const Active = styled.section`
	box-sizing: border-box;
	height: 100%;
	background-color: #2f3136;
	width: 367px;
	padding: 16px 16px 0px 16px;
`;

export const ActiveCard = styled(FlexBox)`
	background-color: #36393f;
	margin: 8px 0px;
	box-sizing: border-box;
	height: fit-content;
	border-radius: 3px;
	padding: 16px;
`;

export const Text = styled.p`
	text-align: center;
	color: #b9bbbe;
	font-size: 13px;
	line-height: 18px;
`;

export const Panel = styled(FlexBox)`
	background-color: transparent;
	width: calc(100% - 367px);
	height: 100%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const Button = styled(StyledTextButton)`
	margin-top: 20px;
	padding: 8px 14px;
	background-color: #677bc4;
	&:hover {
		background-color: rgb(88, 111, 196);
	}
`;

export const Input = styled(Form.Input)`
	border-radius: 8px;
	height: 52px;
	box-sizing: border-box;
	width: 100%;
`;

export const AddFriendArea = styled.div`
	background-color: red;
	width: 100%;
	background-color: #36393f;
	padding: 15px 30px;
	padding-bottom: 20px;
	box-sizing: border-box;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	${Text} {
		width: fit-content;
		font-size: 14px;
		color: #dcddde;
	}
	${Header} {
		margin-bottom: 10px;
		font-size: 16px;
	}
	div {
		position: relative;
		margin-top: 20px;
		${Button} {
			margin: 0;
			position: absolute;
			font-size: 14px;
			padding: 5px 10px;
			right: 14px;
			top: 12px;
		}
	}
`;
