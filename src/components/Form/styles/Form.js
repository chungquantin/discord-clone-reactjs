import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	opacity: 0.85;
	background-color: rgb(0, 0, 0);
`;

export const Inner = styled.div`
	height: 464px;
	width: 680px;
	display: flex;
	border-radius: 10px;
	background-color: white;
	overflow: hidden;
`;

export const Button = styled.button``;

export const Label = styled.h5`
	width: 100%;
	font-size: 12px;
	line-height: 16px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: rgb(106, 116, 128);
	font-weight: 700px;
	text-transform: uppercase;
`;

export const Link = styled.a`
	color: #1ea7fd;
`;

export const Select = styled.select`
	width: 100px;
	height: 40px;
	margin: 0px 10px;
	border: 1px solid gray;
	border-radius: 4px;
	background: ;
`;

export const Option = styled.option``;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	${Select}:nth-child(2) {
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

export const Image = styled.img``;
