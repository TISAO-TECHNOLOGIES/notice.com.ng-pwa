// import React, { useEffect } from "react";
import Carousel from "../components/home/Carousel";
import Footer from "../components/Footer";
import GridLayout from "../components/home/GridLayout";
import NewsLetter from "../components/home/NewsLetter";
import ScriptResource from "../hooks/scriptResource";
// import SearchForm from "../components/SearchForm";

const HomeScreen = () => {
	// const scriptResource = (path: String) => {
	// 	const script = document.createElement("script");
	// 	script.src = `${path}`;
	// 	// script.src = "/src/assets/js/owl.carousel.min.js";
	// 	script.async = true;
	// 	document.body.appendChild(script);
	// };

	// useEffect(() => {
	// 	scriptResource("/src/assets/js/owl.carousel.min.js");
	// 	scriptResource("/src/assets/js/main.js");
	// }, []);

	ScriptResource("/src/assets/js/owl.carousel.min.js");
	ScriptResource("/src/assets/js/main.js");

	return (
		<>
			<Carousel />

			{/* ads top */}
			<div className="ads-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ads-block">
								<a href="./#">
									<img src="/assets/others/ads1.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<GridLayout />

			<NewsLetter />

			<Footer />

			{/* <SearchForm /> */}
		</>
	);
};

export default HomeScreen;
