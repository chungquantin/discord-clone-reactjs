import React, { useState } from "react";
import { SideBar, Tooltip } from "../../components";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import * as ASSETS from "../../constants/assets";
import UserItem from "../../components/custom/Sidebar/UserItem";
import {
	faHeadphones,
	faMicrophone,
	faCog,
} from "@fortawesome/free-solid-svg-icons";

function SideBarContainer({ mainAnimation }) {
	const [micOn, setMic] = useState(true);
	const [headphoneOn, setHeadPhone] = useState(true);

	return (
		<SideBar>
			{/* React.createPortals for searchBar */}
			<SideBar.Inner>
				<SideBar.SearchBar>Find or start a conversation</SideBar.SearchBar>
			</SideBar.Inner>
			<SideBar.Inner direction="column">
				<SideBar.Option className="__selected">
					<SideBar.Icon icon={faUserFriends} />
					<SideBar.Content text="Friends" />
				</SideBar.Option>
				<SideBar.Header>
					<span>Direct Messages</span>
					<button data-tip="Create DM" data-for="tt-add-dm">
						+ <Tooltip id="tt-add-dm" effect="solid" />
					</button>
				</SideBar.Header>
				<UserItem
					status="online"
					type="closable"
					id="#1"
					text="LeDat"
					subText="Minecraft"
					src={ASSETS.TEST_AVATAR}
				/>
				<UserItem
					status="offline"
					type="closable"
					id="#2"
					text="reyna1123"
					subText="League Of Legends"
					src={null}
				/>
				<UserItem
					status="offline"
					type="closable"
					id="#3"
					text="thanhhhhhhhhhhhhhhhhhhhhhhhhhhh"
					subText={null}
					src={null}
				/>
			</SideBar.Inner>
			<SideBar.Panel justify="flex-start">
				<UserItem
					className="__personal"
					status="online"
					type="monitor"
					id="#5"
					text="ĐuổiEmỞTrênĐổi"
					subText={"Minecraft"}
					src={null}
				/>
				<SideBar.MonitorSection>
					<SideBar.Icon
						icon={faMicrophone}
						className={!micOn ? "__muted" : null}
						onClick={() => {
							setMic((state) => !state);
						}}
						data-tip
						data-for="mic-tt"
					/>
					<Tooltip id="mic-tt" effect="solid">
						{micOn ? "Mute" : "Unmute"}
					</Tooltip>
					<SideBar.Icon
						icon={faHeadphones}
						className={!headphoneOn ? "__muted" : null}
						onClick={() => {
							setHeadPhone((state) => !state);
						}}
						data-tip
						data-for="headphone-tt"
					/>
					<Tooltip id="headphone-tt" effect="solid">
						{headphoneOn ? "Deafen" : "Undeafen"}
					</Tooltip>
					<SideBar.Icon data-tip data-for="cog-tt" icon={faCog} />
					<Tooltip id="cog-tt" effect="solid">
						Setting
					</Tooltip>
				</SideBar.MonitorSection>
			</SideBar.Panel>
		</SideBar>
	);
}
//TODO set key id for each object

export default SideBarContainer;
