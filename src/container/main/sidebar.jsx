import React from "react";
import { SideBar } from "../../components";

function SideBarContainer() {
	return (
		<SideBar>
			{/* React.createPortals for searchBar */}
			<SideBar.Inner>
				<SideBar.SearchBar />
			</SideBar.Inner>
			<SideBar.Inner>
				<SideBar.Option>
					<SideBar.Content>Friends</SideBar.Content>
				</SideBar.Option>
				<SideBar.Header>
					Direct Message
					<button>+</button>
				</SideBar.Header>
				<SideBar.Option>
					<SideBar.Content>Unknown</SideBar.Content>
				</SideBar.Option>
			</SideBar.Inner>
		</SideBar>
	);
}

export default SideBarContainer;
