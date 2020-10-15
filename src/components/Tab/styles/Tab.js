import styled from "styled-components";
import { FlexBox } from "../../index";

export const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	background-color: green;
`;

export const Body = styled.div`
	width: 100%;
	background-color: #36393f;
	height: calc(100% - 48px);
	padding-top: 48px;
`;

export const Bar = styled(FlexBox)`
	width: 100%;
	position: fixed;
	height: 48px;
	padding: 0px 8px;
	background-color: #36393f;
	box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
		0 2px 0 rgba(4, 4, 5, 0.05);
`;

export const Separator = styled.div`
	height: 24px;
	background-color: hsla(0, 0%, 100%, 0.06);
	border-radius: 1px;
	width: 1px;
	margin: 0px 6px;
`;

export const TextButton = styled.button`
	background-color: unset;
	border: none;
	color: #b9bbbe;
	font-size: 16px;
	cursor: pointer;
	margin: 0px 8px;
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
`;

export const Header = styled.h3`
	color: white;
	font-size: 16px;
	margin-right: 10px;
`;
