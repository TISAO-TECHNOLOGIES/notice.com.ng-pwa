import React from "react";
import AboutBody from "../components/about/AboutBody";
import InstagramWidget from "../components/shared/widgets/InstagramWidget";
import Widget from "../components/shared/widgets/Widget";
import WidgetLatestsPost from "../components/shared/widgets/WidgetLatestsPost";

const About = () => {
	return (
		<section className="section pt-50">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h5>About us</h5>
						</div>
					</div>
				</div>

				<div className="row">
					<AboutBody />

					{/* WIDGETS */}
					<div className="col-lg-4 max-width">
						{/* <!--widget-latest-posts--> */}
						<Widget title="Latest Posts">
							<ul className="widget-latest-posts">
								{[1, 2, 3, 4].map((latest) => (
									<WidgetLatestsPost key={latest} />
								))}
							</ul>
						</Widget>

						{/* <!--widget-instagram--> */}
						<Widget title="Instagram">
							<ul className="widget-instagram">
								{[1, 2, 3, 4, 5, 6].map((image) => (
									<InstagramWidget key={image} />
								))}
							</ul>
						</Widget>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
