import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NewsLetter from "../components/home/NewsLetter";
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

        <NewsLetter />
        
        <Footer />
			</div>
		</>
	);
};

export default RootLayout;
