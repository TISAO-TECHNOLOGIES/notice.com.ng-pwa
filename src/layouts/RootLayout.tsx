import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const RootLayout = () => {
	return (
		<>
			<div className="App">
				{/* loading */}
				<div className="loading" style={{ display: "none" }}>
					<div className="circle"></div>
				</div>

				<Navigation />

				<main  className="text-left">
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default RootLayout;
