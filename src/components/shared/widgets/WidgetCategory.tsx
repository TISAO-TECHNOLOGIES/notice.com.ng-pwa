import { Link } from "react-router-dom";

const WidgetCategory = () => {
	return (
		<li>
			<Link to="/blog" className="categorie">
				Livestyle
			</Link>
			<span className="ml-auto">22 Posts</span>
		</li>
	);
};

export default WidgetCategory;
