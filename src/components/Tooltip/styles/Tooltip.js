import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const Container = styled(ReactTooltip)`
	&& {
		background-color: black;
		padding: 5px 10px;
		font-size: 15px;
		max-width: 150px;
		text-align: center;
		font-weight: 600;
		text-transform: capitalize;
	}
`;
