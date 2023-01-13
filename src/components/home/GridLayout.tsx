import React from "react";
import { PostData } from "../../data/post";
import PostCard from "./PostCard";

const GridLayout = () => {
	return (
		<>
			<section className="mt-80">
				<div className="container-fluid">
					<div className="row">
						{/* <!--Post--> */}
						{PostData.map((card) => (
							<div key={card.id} className="col-lg-4 col-md-6">
								<PostCard
									postImage={card.postImage}
									category={card.category}
									title={card.title}
									description={card.description}
									author={{
										authorImage: card.author.authorImage,
										authorName: card.author.authorName,
									}}
									day={card.day}
								/>
							</div>
						))}

						{/* <!--ads-block--> */}
						<div className="col-lg-12">
							<div className="ads-block">
								<a href="./#">
									<img src="/assets/others/ads1.jpg" alt="" />
								</a>
							</div>
						</div>

						{/* <!--pagination--> */}
						<div className="col-lg-12">
							<div className="pagination ">
								<ul className="list-inline">
									<li className="active">
										<a href="./#">1</a>
									</li>
									<li>
										<a href="./#">2</a>
									</li>
									<li>
										<a href="./#">3</a>
									</li>
									<li>
										<a href="./#">4</a>
									</li>
									<li>
										<a href="./#">
											<i className="arrow_carrot-2right"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* <!--/--> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default GridLayout;
