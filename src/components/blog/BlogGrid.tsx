import { BlogData } from "../../data/blog";
import PostCard from "../shared/PostCard";
import BlogFirstPost from "./BlogFirstPost";
import InstagramWidget from "../shared/widgets/InstagramWidget";
import Widget from "../shared/widgets/Widget";
import WidgetCategory from "../shared/widgets/WidgetCategory";
import WidgetLatestsPost from "../shared/widgets/WidgetLatestsPost";

const BlogGrid = () => {
	return (
		<>
			<section className="blog-grid">
				<div className="container-fluid">
					<div className="row">
						{/* POST COLUMN */}
						<div className="col-lg-8 mt-30">
							<div className="row">
								{/* Post */}
								{BlogData.map((post) =>
									post.id === "1" ? (
										<BlogFirstPost
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
									) : (
										<div key={post.id} className="col-lg-6 col-md-6">
											<PostCard
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
										</div>
									)
								)}

								{/* <!--pagination--> */}
								<div className="col-lg-12">
									<div className="pagination mt--10">
										<ul className="list-inline">
											<li className="active">
												<a href="./blog-grid.html#">1</a>
											</li>
											<li>
												<a href="./blog-grid.html#">2</a>
											</li>
											<li>
												<a href="./blog-grid.html#">3</a>
											</li>
											<li>
												<a href="./blog-grid.html#">4</a>
											</li>
											<li>
												<a href="./blog-grid.html#">
													<i className="arrow_carrot-2right"></i>
												</a>
											</li>
										</ul>
									</div>
									{/* <!--/--> */}
								</div>
							</div>
						</div>

						{/* WIDGET COLUMN */}
						<div className="col-lg-4 max-width">
							{/* <!--widget-latest-posts--> */}
							<Widget title="Latest Posts">
								<ul className="widget-latest-posts">
									{[1, 2, 3, 4].map((latest) => (
										<WidgetLatestsPost key={latest} />
									))}
								</ul>
							</Widget>
							{/* <!--/--> */}

							{/* <!--widget-categories--> */}
							<Widget title="Categories">
								<ul className="widget-categories">
									{[1, 2, 3, 4].map((category) => (
										<WidgetCategory key={category} />
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

							{/* <!--widget-tags--> */}
							<Widget title="Tags">
								<div className="widget-tags">
									<ul className="list-inline">
										{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tag) => (
											<li key={tag}>
												<a href="./blog-grid.html">Travel</a>
											</li>
										))}
									</ul>
								</div>
							</Widget>
							{/* <!--/--> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogGrid;
