import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "../Line.css";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function Line() {
	return (
		<div className="line">
			<div className="line_header">
				<Avatar />
				<div className="line_headerInfo">
					<h3 className="header_title">Whip Name</h3>
					<p className="header_content">Last seen at...</p>
				</div>
				<div className="line_headerRight">
					<IconButton>
						<RemoveRedEyeIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="line_body">
				<p className="line_text">
					<span className="line_name">Mac</span>
					Mopars where its at
					<span className="line_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="line_text line_receiver">
					<span className="line_name">Mac</span>
					Mopars where its at
					<span className="line_timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>
			<div className="line_footer">
				<InsertEmoticonIcon />
				<form>
					<input placeholder="Type a message" type="text" />
					<button className="footer_btn" type="submit">
						Send A Dime
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Line;
