import React from "react";
import { CarouselData } from "../../data/carousel";
import OwlItem from "./OwlItem";

const Carousel = () => {
	return (
		<>
			<section className="section carousel-hero">
				<div className="owl-carousel owl-loaded owl-drag">
					<div className="owl-stage-outer">
						<div
							className="owl-stage"
							style={{
								transform: "translate3d(-2698px, 0px, 0px)",
								transition: "all 1s ease 0s",
								width: "9443px",
							}}>
							{/* carousel */}
							{CarouselData.map((owl) => (
								<div key={owl.id} className="owl-item cloned" style={{ width: "1349px" }}>
									<OwlItem
										bgImage={owl.bgImage}
										category={owl.category}
										title={owl.title}
										author={{
											authorImage: owl.author.authorImage,
											authorName: owl.author.authorName,
										}}
										day={owl.day}
										time={owl.time}
									/>
								</div>
							))}

							{/* carousel 1 */}
							{/* <div className="owl-item cloned" style={{ width: "1349px" }}>
								<div
									className="hero d-flex align-items-center"
									style={{
										backgroundImage: `url('/src/assets/img/hero/1.jpg')`,
									}}>
									<div className="container-fluid">
										<div className="row">
											<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
												<div className="hero-content">
													<a href="./blog-grid.html" className="categorie">
														Livestyle
													</a>
													<h2>
														<a href="./post-default.html">Top 10 Fashion Trends from Spring/Summer 2021 Fashion Weeks </a>
													</h2>
													<div className="post-card-info">
														<ul className="list-inline">
															<li>
																<a href="./author.html">
																	<img src="/src/assets/others/1.jpg" alt="" />
																</a>
															</li>
															<li>
																<a href="./author.html">David smith</a>
															</li>
															<li className="dot"></li>
															<li>January 12, 2021</li>
															<li className="dot"></li>
															<li>10 Min Reads</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>

					{/* carousel nav */}
					<div className="owl-nav">
						<button type="button" role="presentation" className="owl-prev">
							<span aria-label="Previous">‹</span>
						</button>
						<button type="button" role="presentation" className="owl-next">
							<span aria-label="Next">›</span>
						</button>
					</div>
					<div className="owl-dots disabled"></div>
				</div>
			</section>
		</>
	);
};

export default Carousel;
