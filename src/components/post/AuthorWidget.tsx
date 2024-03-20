import React from "react";
import { Link } from "react-router-dom";

const AuthorWidget = () => {
	return (
		<div className="widget">
			<div className="widget-author">
				<Link to="/author" className="image">
					<img src="/src/assets/others/1.jpg" alt="" />
				</Link>
				<h6>
					<span>Hi, I'm David Smith</span>
				</h6>
				<p>
					I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until now.
				</p>

				<div className="social-media">
					<ul className="list-inline">
						<li>
							<Link to="" className="color-facebook">
								<i className="fab fa-facebook"></i>
							</Link>
						</li>
						<li>
							<Link to="" className="color-instagram">
								<i className="fab fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link to="" className="color-twitter">
								<i className="fab fa-twitter"></i>
							</Link>
						</li>
						<li>
							<Link to="" className="color-youtube">
								<i className="fab fa-youtube"></i>
							</Link>
						</li>
						<li>
							<Link to="" className="color-pinterest">
								<i className="fab fa-pinterest"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AuthorWidget;
