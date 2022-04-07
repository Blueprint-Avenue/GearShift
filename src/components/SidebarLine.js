import { Avatar } from "@material-ui/core";
import React from "react";
import "../SidebarLine.css";

function SidebarChat() {
	return (
		<div className="sidebarLine">
			<Avatar />
			<div className="sidebarLine_info">
				<h2 className="sidebarLine_Heading">Gearhead</h2>
				<p className="sidebarLine_content">Get Ur Speed On</p>
			</div>
		</div>
	);
}

export default SidebarChat;
