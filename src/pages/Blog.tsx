import React from "react";
import BlogGrid from "../components/blog/BlogGrid";

const Blog = () => {
	return (
		<>
			{/* Category header */}
			<section className="categorie-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-8">
							<div className="categorie-title">
								<small>
									<a href="./index.html">Home</a>
									<span className="arrow_carrot-right"></span> Food
								</small>
								<h3>
									Category : <span> Food</span>
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis
									fugit
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<BlogGrid />
		</>
	);
};

export default Blog;
