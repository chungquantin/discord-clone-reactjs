import React from "react";
import { Scroller } from "../../components";
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
				<Scroller.Item>
					<Scroller.Bubble>
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
					<Scroller.Bubble className="__func_item">
						<Scroller.Icon icon={faPlus} />
					</Scroller.Bubble>
				</Scroller.Item>
				<Scroller.Item>
					<Scroller.Bubble className="__func_item">
						<Scroller.Icon icon={faCompass} />
					</Scroller.Bubble>
				</Scroller.Item>
			</Scroller.Section>
			<Scroller.Separator />
			<Scroller.Section>
				<Scroller.Item>
					<Scroller.Bubble className="__func_item">
						<Scroller.Icon icon={faDownload} />
					</Scroller.Bubble>
				</Scroller.Item>
			</Scroller.Section>
		</Scroller>
	);
}

export default ServerContainer;
