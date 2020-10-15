import React from "react";
import { Tab, FlexBox } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

function TabBar() {
	return (
		<Tab.Bar justify="space-between">
			<FlexBox>
				<FontAwesomeIcon
					icon={faUserFriends}
					style={{ color: "#72767D", margin: "0px 8px 0px 10px" }}
				/>
				<Tab.Header>Friends</Tab.Header>
				<Tab.Separator />
				<Tab.TextButton className="__selected">Online</Tab.TextButton>
				<Tab.TextButton>All</Tab.TextButton>
				<Tab.TextButton>Pending</Tab.TextButton>
				<Tab.TextButton>Blocked</Tab.TextButton>
				<Tab.StyledTextButton>Add Friend</Tab.StyledTextButton>
			</FlexBox>
		</Tab.Bar>
	);
}

export default TabBar;
