import "./App.css";
import Line from "./components/Line";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<div className="app_body">
				{/* Sidebar */}
				<Sidebar />
				{/* ChatLine */}
				<Line />
			</div>
		</div>
	);
}

export default App;
