import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	justify-content: ${({ justify }) => (justify ? justify : "center")};
	align-items: center;
`;
