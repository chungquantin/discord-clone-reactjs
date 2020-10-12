import React, { Fragment } from "react";
import * as Style from "../styles/Sidebar";
import * as ASSETS from "../../../constants/assets";
import { Tooltip } from "../../index";

function StatusWithTooltip({ status, src }) {
	return (
		<Fragment>
			<Style.Status
				src={status ? ASSETS.STATUS_ONLINE : ASSETS.STATUS_OFFLINE}
				data-tip
				data-for={`__status_${src}`}
			/>
			<Tooltip id={`__status_${src}`} effect="solid" place="top">
				{status === true ? "Online" : "Offline"}
			</Tooltip>
		</Fragment>
	);
}

export default StatusWithTooltip;
