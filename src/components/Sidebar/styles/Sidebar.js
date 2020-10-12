import styled from "styled-components";
import { FlexBox } from "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Inner = styled(FlexBox)`
	height: 48px;
	padding: 0px 10px;
`;

export const Container = styled.div`
	height: 100vh;
	width: 240px;
	background-color: #2f3136;
	${Inner}:last-child {
		flex-direction: column;
		height: fit-content;
		padding: 8px;
	}
	${Inner}:first-child {
		box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
			0 2px 0 rgba(4, 4, 5, 0.05);
	}
`;

export const SearchBar = styled.button`
	height: 28px;
	width: 100%;
	border: none;
	background-color: #202225;
	border-radius: 4px;
	text-align: left;
	color: #72767d;
	font-weight: 600;
	cursor: pointer;
`;

export const Content = styled.h4`
	color: #8e9297;
	font-weight: 600;
	width: 164px;
	font-size: 15px;
`;

export const Option = styled(FlexBox)`
	height: 42px;
	width: 208px;
	padding: 1px 8px;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	&.__selected {
		background-color: #393c42;
		${Content} {
			color: #dcddde;
		}
		&:hover {
			background-color: #393c42;
		}
	}
	&:hover {
		background-color: #33363c;
		.__close_button {
			display: block;
		}
		${Content} {
			color: #dcddde;
		}
	}
	.__close_button {
		display: none;
		color: #d9dadb;
		font-size: smaller;
		font-weight: normal;
	}
`;

export const Header = styled(FlexBox)`
	box-sizing: border-box;
	height: 18px;
	width: 100%;
	justify-content: space-between;
	padding: 0px 3px 0px 10px;
	margin-top: 18px;
	margin-bottom: 8px;
	&:hover {
		span {
			color: #dcddde;
		}
	}
	span {
		color: #8e9297;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 11.5px;
	}
	button {
		background-color: transparent;
		border: unset;
		font-size: 22px;
		cursor: pointer;
		color: #dcddde;
	}
`;

export const Avatar = styled(FlexBox)`
	height: 32px;
	width: 32px;
	overflow: hidden;
	border-radius: 50px;
	margin-right: 14px;
	img {
		height: 100%;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 20px;
	margin-right: 14px;
`;

export const Status = styled.img`
	position: absolute;
	width: 13px;
	right: 12px;
	bottom: -1px;
`;

export const Wrapper = styled.div`
	position: relative;
`;

export const Panel = styled.div`
	position: absolute;
	bottom: 0;
`;
