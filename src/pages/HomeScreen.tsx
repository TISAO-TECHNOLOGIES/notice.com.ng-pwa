import Carousel from "../components/home/Carousel";
import Footer from "../components/Footer";
import GridLayout from "../components/home/GridLayout";
import NewsLetter from "../components/home/NewsLetter";
// import ScriptResource from "../hooks/scriptResource";

const HomeScreen = () => {
	// ScriptResource("/src/assets/js/owl.carousel.min.js");
	// ScriptResource("/src/assets/js/main.js");

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
		</>
	);
};

export default HomeScreen;
