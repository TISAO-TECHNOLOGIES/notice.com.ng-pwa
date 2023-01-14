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

				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
