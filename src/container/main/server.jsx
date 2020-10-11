import React from "react";
import { Scroller, Tooltip } from "../../components";
import * as ASSETS from "../../constants/assets";
import {
	faCompass,
	faPlus,
	faDownload,
} from "@fortawesome/free-solid-svg-icons";

function ServerContainer() {
	return (
		<Scroller>
			<Scroller.Section>
				<Scroller.Item style={{ paddingTop: "12px" }}>
					<Scroller.Bubble tooltip="Home" dataFor="tt-bb-home">
						<Scroller.Picture
							src={ASSETS.NO_BG_LOGO}
							alt="Default"
							width="28px"
						/>
						<Scroller.Badge value={37} />
					</Scroller.Bubble>
				</Scroller.Item>
			</Scroller.Section>
			<Scroller.Separator />
			<Scroller.Section direction="column">
				<Scroller.Item>
					<Scroller.Bubble
						tooltip="Add a Server"
						dataFor="tt-bb-add"
						className="__func_item"
					>
						<Scroller.Icon icon={faPlus} />
					</Scroller.Bubble>
				</Scroller.Item>
				<Scroller.Item>
					<Scroller.Bubble
						tooltip="Explore Public Servers"
						dataFor="tt-bb-servers"
						className="__func_item"
					>
						<Scroller.Icon icon={faCompass} />
					</Scroller.Bubble>
				</Scroller.Item>
			</Scroller.Section>
			<Scroller.Separator />
			<Scroller.Section>
				<Scroller.Item>
					<Scroller.Bubble
						tooltip="Download Apps"
						dataFor="tt-bb-download"
						className="__func_item"
					>
						<Scroller.Icon icon={faDownload} />
					</Scroller.Bubble>
				</Scroller.Item>
			</Scroller.Section>
		</Scroller>
	);
}

export default ServerContainer;
