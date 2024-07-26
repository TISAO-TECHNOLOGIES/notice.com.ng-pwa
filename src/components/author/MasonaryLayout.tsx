import { Link } from "react-router-dom";
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
						{/* <!--/--> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MasonaryLayout;
