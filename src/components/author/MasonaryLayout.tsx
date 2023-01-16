import { PostData } from "../../data/post";
import MasonaryCard from "./MasonaryCard";

const MasonaryLayout = () => {
	return (
		<section className="masonry-layout col2-layout mt-30">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						{/* <!--cards--> */}
						<div className="card-columns">
							{PostData.map((post) => (
								<MasonaryCard
									key={post.id}
									postImage={post.postImage}
									category={post.category}
									title={post.title}
									description={post.description}
									author={{
										authorImage: post.author.authorImage,
										authorName: post.author.authorName,
									}}
									day={post.day}
								/>
							))}
						</div>

						{/* <!--pagination--> */}
						<div className="pagination mt-30">
							<ul className="list-inline">
								<li className="active">
									<a href="./author.html#">1</a>
								</li>
								<li>
									<a href="./author.html#">2</a>
								</li>
								<li>
									<a href="./author.html#">3</a>
								</li>
								<li>
									<a href="./author.html#">4</a>
								</li>
								<li>
									<a href="./author.html#">
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
	);
};

export default MasonaryLayout;
