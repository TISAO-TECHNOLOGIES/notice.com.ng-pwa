import React from "react";

interface IPost {
	postImage: string;
	category: string;
	title: string;
	description: string;
	author: {
		authorImage: string;
		authorName: string;
	};
	day: string;
}

const BlogFirstPost = ({ postImage, category, title, description, author, day }: IPost) => {
	const truncate = (word: string, n: number) => {
		return word?.length > n ? word.substr(0, n - 1) + "..." : word;
	};

	return (
		<div className="col-lg-12">
			<div className="post-card">
				<div className="post-card-image">
					<a href="./post-default.html">
						<img src={postImage} alt="" />
					</a>
				</div>
				<div className="post-card-content">
					<a href="./blog-list.html" className="categorie">
						{category}
					</a>
					<h5>
						<a href="./post-default.html">{title}</a>
					</h5>
					<p>{truncate(description, 80)}</p>
					<div className="post-card-info">
						<ul className="list-inline">
							<li>
								<a href="./author.html">
									<img src={author.authorImage} alt="" />
								</a>
							</li>
							<li>
								<a href="./author.html">{author.authorName}</a>
							</li>
							<li className="dot"></li>
							<li>{day}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogFirstPost;
