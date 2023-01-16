import React from "react";

const AuthorWidget = () => {
	return (
		<div className="widget">
			<div className="widget-author">
				<a href="./author.html" className="image">
					<img src="/src/assets/others/1.jpg" alt="" />
				</a>
				<h6>
					<span>Hi, I'm David Smith</span>
				</h6>
				<p>
					I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until now.
				</p>

				<div className="social-media">
					<ul className="list-inline">
						<li>
							<a href="./post-default.html#" className="color-facebook">
								<i className="fab fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="./post-default.html#" className="color-instagram">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="./post-default.html#" className="color-twitter">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="./post-default.html#" className="color-youtube">
								<i className="fab fa-youtube"></i>
							</a>
						</li>
						<li>
							<a href="./post-default.html#" className="color-pinterest">
								<i className="fab fa-pinterest"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AuthorWidget;
