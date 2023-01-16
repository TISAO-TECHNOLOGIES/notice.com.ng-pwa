import React from "react";

const PostDirection = () => {
	return (
		<div className="row">
			{/* previous post */}
			<div className="col-md-6">
				<div className="widget">
					<div className="widget-next-post">
						<div className="small-post">
							<div className="image">
								<a href="./post-default.html">
									<img src="/src/assets/others/1(1).jpg" alt="..." />
								</a>
							</div>
							<div className="content">
								<div>
									<a className="link" href="./post-default.html">
										<i className="arrow_left"></i>Previous post
									</a>
								</div>
								<a href="./post-default.html">7 Healty Dinner Recipes for a Date Night at Home</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* next post */}
			<div className="col-md-6">
				<div className="widget">
					<div className="widget-previous-post">
						<div className="small-post">
							<div className="image">
								<a href="./post-default.html">
									<img src="/src/assets/others/2.jpg" alt="..." />
								</a>
							</div>
							<div className="content">
								<div>
									<a className="link" href="./post-default.html">
										Next post
										<i className="arrow_right"></i>
									</a>
								</div>
								<a href="./post-default.html">How to Choose Outfits for Work for woman and men</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDirection;
