import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import GridLayout from "../components/home/GridLayout";
import NewsLetter from "../components/home/NewsLetter";
// import SearchForm from "../components/SearchForm";

const HomeScreen = () => {
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
