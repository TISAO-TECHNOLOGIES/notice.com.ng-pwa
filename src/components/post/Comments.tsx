import React from "react";

const Comments = () => {
	return (
		<li className="comment-item">
			<img src="/src/assets/others/1(2).jpg" alt="" />
			<div className="content">
				<ul className="info list-inline">
					<li>Mohammed Ali</li>
					<li className="dot"></li>
					<li>January 15, 2021</li>
				</ul>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!</p>
				<div>
					{/* <a href="./post-default.html#" className="link">
						{" "}
						<i className="arrow_back"></i> Reply
					</a> */}
				</div>
			</div>
		</li>
	);
};

export default Comments;
