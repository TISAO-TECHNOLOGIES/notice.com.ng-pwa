import { Link } from "react-router-dom";
import { PostData } from "../../data/post";
import PostCard from "../shared/PostCard";

const GridLayout = () => {
	return (
		<>
			<section className="mt-80">
				<div className="container-fluid">
					<div className="row">
						{/* POST */}
						{PostData.map((card) => (
							<div key={card.id} className="col-lg-4 col-md-6">
								<PostCard
									thumbImg={card.thumbImg}
									category={card.category}
									title={card.title}
									description={card.description}
									author={{
										authorImage: card.author.authorImage,
										authorName: card.author.authorName,
									}}
									timeInt={card.timeInt}
									slug={card.slug}
								/>
							</div>
						))}

						{/* ADS BLOCK */}
						{/* <div className="col-lg-12">
							<div className="ads-block">
								<a href="./#">
									<img src="/assets/others/ads1.jpg" alt="" />
								</a>
							</div>
						</div> */}

						{/* PAGINATION */}
						<div className="col-lg-12">
							<div className="pagination ">
								<ul className="list-inline">
									<li className="active">
										<Link to="">1</Link>
									</li>
									<li>
										<Link to="">2</Link>
									</li>
									<li>
										<Link to="">3</Link>
									</li>
									<li>
										<Link to="">4</Link>
									</li>
									<li>
										<Link to="">
											<i className="arrow_carrot-2right"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default GridLayout;
