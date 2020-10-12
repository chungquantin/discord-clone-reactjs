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
					<SideBar.Content text="Friends" />
				</SideBar.Option>
				<SideBar.Header>
					<span>Direct Messages</span>
					<button data-tip="Create DM" data-for="tt-add-dm">
						+ <Tooltip id="tt-add-dm" effect="solid" />
					</button>
				</SideBar.Header>
				<SideBar.Option type="closable">
					<SideBar.Avatar
						status={"online"}
						src={ASSETS.TEST_AVATAR}
						id={"#1"}
					/>
					<SideBar.Content text="LeDat" className="__friend_option" />
				</SideBar.Option>
				<SideBar.Option type="closable">
					<SideBar.Avatar
						status={"offline"}
						src={ASSETS.TEST_AVATAR_2}
						id={"#2"}
					/>
					<SideBar.Content text="ĐuổiEmỞTrênĐổi" />
				</SideBar.Option>
				<SideBar.Option type="closable">
					<SideBar.Avatar status={"idle"} id={"#3"} />
					<SideBar.Content text="reyna1123" />
				</SideBar.Option>
				<SideBar.Option type="closable">
					<SideBar.Avatar status={"disturb"} id={"#4"} />
					<SideBar.Content text="thanhhhhhhhhhhhhhhhhhhhhhhhhhhh" />
				</SideBar.Option>
				<SideBar.Panel>
					<SideBar.Option type="monitor">
						<SideBar.Avatar status={"online"} id={"#5"} />
						<SideBar.Content text="ĐuổiEmỞTrênĐổi" />
					</SideBar.Option>
				</SideBar.Panel>
			</SideBar.Inner>
		</SideBar>
	);
}
//TODO set key id for each object

export default SideBarContainer;
