import styled from "styled-components";

export const Container = styled.div``;

export const Background = styled.img`
	position: fixed;
	z-index: -4;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Frame = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	position: fixed;
	z-index: -2;
	padding: 10px 20px;
`;

export const Logo = styled.img`
	height: 40px;
`;
