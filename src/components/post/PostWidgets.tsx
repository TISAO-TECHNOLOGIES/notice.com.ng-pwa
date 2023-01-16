import React from "react";
import InstagramWidget from "../shared/widgets/InstagramWidget";
import Widget from "../shared/widgets/Widget";
import WidgetCategory from "../shared/widgets/WidgetCategory";
import WidgetLatestsPost from "../shared/widgets/WidgetLatestsPost";
import AuthorWidget from "./AuthorWidget";

const PostWidgets = () => {
	return (
		<div className="col-lg-4 max-width">
			{/* <!--widget-author--> */}
			<AuthorWidget />
			{/* <!--/--> */}

			{/* <!--widget-latest-posts--> */}
			<Widget title="Latest Posts">
				<ul className="widget-latest-posts">
					{[1, 2, 3, 4].map((latest) => (
						<WidgetLatestsPost key={latest} />
					))}
				</ul>
			</Widget>
			{/* <!--/--> */}

			{/* <!--widget-categories--> */}
			<Widget title="Categories">
				<ul className="widget-categories">
					{[1, 2, 3, 4].map((category) => (
						<WidgetCategory key={category} />
					))}
				</ul>
			</Widget>
			{/* <!--/--> */}

			{/* <!--widget-instagram--> */}
			<Widget title="Instagram">
				<ul className="widget-instagram">
					{[1, 2, 3, 4, 5, 6].map((image) => (
						<InstagramWidget key={image} />
					))}
				</ul>
			</Widget>
			{/* <!--/--> */}

			{/* <!--widget-tags--> */}
			<Widget title="Tags">
				<div className="widget-tags">
					<ul className="list-inline">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tag) => (
							<li key={tag}>
								<a href="./blog-grid.html">Travel</a>
							</li>
						))}
					</ul>
				</div>
			</Widget>
			{/* <!--/--> */}
		</div>
	);
};

export default PostWidgets;
