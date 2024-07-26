import { Link } from "react-router-dom";

interface IPost {
	thumbImg: string;
	category: string;
	title: string;
	description: string;
	author: {
		authorImage: string;
		authorName: string;
	};
	timeInt: string;
	slug: string;
}

const PostCard = ({ thumbImg, category, title, description, author, timeInt, slug }: IPost) => {
	const truncate = (word: string, n: number) => {
		return word?.length > n ? word.substr(0, n - 1) + "..." : word;
	};

	return (
		<div className="post-card">
			<div className="post-card-image">
				<Link to="/post">
					<img src={thumbImg} alt="" />
				</Link>
			</div>
			<div className="post-card-content">
				<Link to="/blog" className="categorie">
					{category}
				</Link>
				<h5>
					<Link to="/post?url={slug}">{title}</Link>
				</h5>
				<p>{truncate(description, 80)}</p>
				<div className="post-card-info">
					<ul className="list-inline">
						<li>
							<Link to="/author">
								<img src={author.authorImage} alt="" />
							</Link>
						</li>
						<li>
							<span className="author">{author.authorName}</span>
						</li>
						<li className="dot"></li>
						<li>{timeInt}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
