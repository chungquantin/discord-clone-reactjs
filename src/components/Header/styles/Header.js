import styled from "styled-components";

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
	@media (max-width: 800px) {
		justify-content: center;
	}
	position: fixed;
	z-index: -2;
	padding: 7px 22px;
`;

export const Logo = styled.img`
	height: 35px;
`;

export const Container = styled.div`
	&.__580_break {
		width: fit-content;
		@media (max-width: 580px) {
			${Background}, ${Logo} {
				display: none;
			}
		}
	}
`;
