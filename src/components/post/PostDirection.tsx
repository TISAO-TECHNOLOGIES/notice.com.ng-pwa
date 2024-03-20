import React from "react";
import { Link } from "react-router-dom";

const PostDirection = () => {
	return (
		<div className="row">
			{/* previous post */}
			<div className="col-md-6">
				<div className="widget">
					<div className="widget-next-post">
						<div className="small-post">
							<div className="image">
								<Link to="/post">
									<img src="/src/assets/others/1(1).jpg" alt="..." />
								</Link>
							</div>
							<div className="content">
								<div>
									<Link className="link" to="/post">
										<i className="arrow_left"></i>Previous post
									</Link>
								</div>
								<Link to="/post">7 Healty Dinner Recipes for a Date Night at Home</Link>
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
								<Link to="/post">
									<img src="/src/assets/others/2.jpg" alt="..." />
								</Link>
							</div>
							<div className="content">
								<div>
									<Link className="link" to="/post">
										Next post
										<i className="arrow_right"></i>
									</Link>
								</div>
								<Link to="/post">How to Choose Outfits for Work for woman and men</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDirection;
