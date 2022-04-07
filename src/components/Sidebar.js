import React from "react";
import "../Sidebar.css";
import SendIcon from "@material-ui/icons/Send";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarLine from "./SidebarLine";

function Sidebar() {
	return (
		<div className="sidebar">
			{/* Header */}
			<div className="sidebar_header">
				{/* Left Avatar */}
				<Avatar src="https://i.pinimg.com/originals/1e/28/6c/1e286c364663b1593313bcbc49518703.jpg" />
				{/* Header Right */}
				<div className="sidebar_headerRight">
					<IconButton>
						<DonutSmallIcon />
					</IconButton>
					<IconButton>
						<SendIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			{/* Search Bar */}
			<div className="sidebar_search">
				<div className="sidebar_searchContainer">
					<SearchOutlined />
					<input placeholder="Seek or drop a new line" type="text" />
				</div>
			</div>
			{/* Chats */}
			<div className="sidebar_lines">
				<SidebarLine />
				<SidebarLine />
				<SidebarLine />
				<SidebarLine />
				<SidebarLine />
			</div>
		</div>
	);
}

export default Sidebar;
