import React from "react";
// import { Helmet } from "react-helmet";
import "./App.css";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<>
			<div className="App">
				{/* loading */}
				<div className="loading" style={{ display: "none" }}>
					<div className="circle"></div>
				</div>

				<Navigation />

				{/* pages */}
				<HomeScreen />
			</div>
		</>
	);
}

export default App;
