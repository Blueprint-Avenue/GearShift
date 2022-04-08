import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "../Line.css";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from "../axios";

function Line({ messages }) {
	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault(); //stops refresh
		await axios.post("/messages/new", {
			message: input,
			name: "Gear Room",
			timestamp: "Just Now!",
			received: true,
		});

		setInput("");
	};

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
				{messages.map((message) => (
					<p className={`line_text ${message.received && "line_receiver"}`}>
						<span className="line_name">{message.name}</span>
						{message.message}
						<span className="line_timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className="line_footer">
				<InsertEmoticonIcon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
						type="text"
					/>
					<button onClick={sendMessage} className="footer_btn" type="submit">
						Send A Dime
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Line;
