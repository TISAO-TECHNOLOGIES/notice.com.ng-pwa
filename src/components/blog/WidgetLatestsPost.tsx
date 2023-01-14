import React from "react";

const WidgetLatestsPost = () => {
	return (
		<li className="last-post">
			<div className="image">
				<a href="./post-default.html">
					<img src="/src/assets/others/1(2).jpg" alt="..." />
				</a>
			</div>
			<div className="nb">1</div>
			<div className="content">
				<p>
					<a href="./post-default.html">5 Things I Wish I Knew Before Traveling to Malaysia</a>
				</p>
				<small>
					{" "}
					<span className="icon_clock_alt"></span> January 15, 2021
				</small>
			</div>
		</li>
	);
};

export default WidgetLatestsPost;
