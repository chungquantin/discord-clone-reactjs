import React from "react";
import { Scroller } from "../../components";
import BubbleWithTooltip from "../../components/custom/Scroller/BubbleWithToolTip.js";
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
					<BubbleWithTooltip tooltip="Trang chủ" dataFor="tt-bb-home" to="#">
						<Scroller.Picture
							src={ASSETS.NO_BG_LOGO}
							alt="Default"
							width="28px"
						/>
						<Scroller.Badge value={37} />
					</BubbleWithTooltip>
				</Scroller.Item>
			</Scroller.Section>
			<Scroller.Separator />
			<Scroller.Section direction="column">
				<Scroller.Item>
					<BubbleWithTooltip
						tooltip="Thêm Máy Chủ"
						dataFor="tt-bb-add"
						className="__func_item"
						to="#"
					>
						<Scroller.Icon icon={faPlus} />
					</BubbleWithTooltip>
				</Scroller.Item>
				<Scroller.Item>
					<BubbleWithTooltip
						tooltip="Khám Phá Máy Chủ Công Khai"
						dataFor="tt-bb-servers"
						className="__func_item"
						to="#"
					>
						<Scroller.Icon icon={faCompass} />
					</BubbleWithTooltip>
				</Scroller.Item>
			</Scroller.Section>
			<Scroller.Separator />
			<Scroller.Section direction="column">
				<Scroller.Item>
					<BubbleWithTooltip
						tooltip="Tải Ứng Dụng"
						dataFor="tt-bb-download"
						className="__func_item"
						to="#"
					>
						<Scroller.Icon icon={faDownload} />
					</BubbleWithTooltip>
				</Scroller.Item>
			</Scroller.Section>
		</Scroller>
	);
}

export default ServerContainer;
