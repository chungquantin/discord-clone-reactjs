import React from "react";
import { SideBar } from "../../components";

function SideBarContainer() {
	return (
		<SideBar>
			{/* React.createPortals for searchBar */}
			<SideBar.SearchBar />
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
		</SideBar>
	);
}

export default SideBarContainer;
