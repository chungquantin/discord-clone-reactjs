import React from "react";
import { SideBar, Tooltip } from "../../components";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import * as ASSETS from "../../constants/assets";

function SideBarContainer({ mainAnimation }) {
	return (
		<SideBar>
			{/* React.createPortals for searchBar */}
			<SideBar.Inner>
				<SideBar.SearchBar>Find or start a conversation</SideBar.SearchBar>
			</SideBar.Inner>
			<SideBar.Inner>
				<SideBar.Option className="__selected">
					<SideBar.Icon icon={faUserFriends} />
					<SideBar.Content>Friends</SideBar.Content>
				</SideBar.Option>
				<SideBar.Header>
					<span>Direct Messages</span>
					<button data-tip="Create DM" data-for="tt-add-dm">
						+ <Tooltip id="tt-add-dm" effect="solid" />
					</button>
				</SideBar.Header>
				<SideBar.Option>
					<SideBar.Avatar status={true} src={ASSETS.TEST_AVATAR} />
					<SideBar.Content>Unknown</SideBar.Content>
				</SideBar.Option>
				<SideBar.Option>
					<SideBar.Avatar status={true} src={ASSETS.TEST_AVATAR_2} />
					<SideBar.Content>Unknown</SideBar.Content>
				</SideBar.Option>
			</SideBar.Inner>
		</SideBar>
	);
}

export default SideBarContainer;
