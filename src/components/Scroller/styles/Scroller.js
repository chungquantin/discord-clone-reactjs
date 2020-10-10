import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { FlexBox } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	width: fit-content;
	height: 100vh;
	background-color: #202225;
`;

export const Badge = styled(FlexBox)`
	position: absolute;
	background-color: rgb(240, 71, 71);
	color: white;
	width: 22px;
	border-radius: 30px;
	border: 5px solid #202225;
	bottom: 0;
	right: 0;
	margin-bottom: -5px;
	span {
		font-size: 12px;
		font-weight: 700;
	}
`;

export const Separator = styled.div`
	height: 2px;
	margin: 0px auto;
	background-color: hsla(0, 0%, 100%, 0.06);
	border-radius: 1px;
	width: 32px;
	margin-bottom: 8px;
`;

export const Section = styled(FlexBox)``;

export const Picture = styled.img`
	width: ${({ width }) => width};
	margin: 0px auto;
`;

export const Icon = styled(FontAwesomeIcon)`
	margin: 0px auto;
	font-size: 18px;
	color: #43b581;
`;

export const Inner = styled.div``;

export const Item = styled(FlexBox)`
	width: 72px;
	margin-bottom: 8px;
`;

export const Bubble = styled(ReactRouterLink)`
	background-color: #36393f;
	position: relative;
	height: 48px;
	width: 48px;
	justify-content: center;
	flex-direction: column;
	display: flex;
	transition: all 0.2s;
	border-radius: 50px;
	&:hover {
		background-color: #7289da;
		transition: all 0.3s;
		border-radius: 13px;
	}
	&.__func_item {
		&:hover {
			background-color: #43b581;
			${Icon} {
				color: white;
			}
		}
	}
`;
