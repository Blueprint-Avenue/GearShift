import { useEffect, useState } from "react";
import "./App.css";
import Line from "./components/Line";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get("/messages/sync").then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("d6e0e5636b5fe01fa334", {
			cluster: "us2",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessage) => {
			alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	console.log(messages);
	return (
		<div className="App">
			<div className="app_body">
				{/* Sidebar */}
				<Sidebar />
				{/* ChatLine */}
				<Line messages={messages} />
			</div>
		</div>
	);
}

export default App;
