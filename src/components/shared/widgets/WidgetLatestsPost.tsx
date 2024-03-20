import { Link } from "react-router-dom";

const WidgetLatestsPost = () => {
	return (
		<li className="last-post">
			<div className="image">
				<div>
					<img src="/src/assets/others/1(2).jpg" alt="..." />
				</div>
			</div>
			<div className="nb">1</div>
			<div className="content">
				<p>
					<Link to="/post">5 Things I Wish I Knew Before Traveling to Malaysia</Link>
				</p>
				<small>
					<span className="icon_clock_alt"></span> January 15, 2021
				</small>
			</div>
		</li>
	);
};

export default WidgetLatestsPost;
