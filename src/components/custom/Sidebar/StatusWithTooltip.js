import React, { Fragment, useReducer, useEffect } from "react";
import * as Style from "../../Sidebar/styles/Sidebar";
import { Tooltip } from "../../index";
import statusReducer from "../../../helpers/reducers/statusReducer";

const initialState = {
	source: "",
	tooltip: "",
};

function StatusWithTooltip({ status, id }) {
	const [state, dispatch] = useReducer(statusReducer, initialState);
	useEffect(() => dispatch({ type: status }), [status]);
	return (
		<Fragment>
			<Style.Status src={state.source} data-tip data-for={`__status_${id}`} />
			<Tooltip id={`__status_${id}`} effect="solid" place="top">
				{state.tooltip}
			</Tooltip>
		</Fragment>
	);
}

export default StatusWithTooltip;
