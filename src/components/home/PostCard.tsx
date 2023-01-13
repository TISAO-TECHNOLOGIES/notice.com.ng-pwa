import React from "react";

const PostCard = () => {
	return (
		<div className="post-card">
			<div className="post-card-image">
				<a href="./post-default.html">
					<img src="/src/assets/others/25.jpg" alt="" />
				</a>
			</div>
			<div className="post-card-content">
				<a href="./blog-grid.html" className="categorie">
					Livestyle
				</a>
				<h5>
					<a href="./post-default.html">How to Choose Outfits for Work for woman and men</a>
				</h5>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
				<div className="post-card-info">
					<ul className="list-inline">
						<li>
							<a href="./author.html">
								<img src="/src/assets/others/1.jpg" alt="" />
							</a>
						</li>
						<li>
							<a href="./author.html">David Smith</a>
						</li>
						<li className="dot"></li>
						<li>January 15, 2021</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
