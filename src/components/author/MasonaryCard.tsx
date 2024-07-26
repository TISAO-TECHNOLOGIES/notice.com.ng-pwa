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
}

const MasonaryCard = ({ thumbImg, category, title, description, author, timeInt }: IPost) => {
	const truncate = (word: string, n: number) => {
		return word?.length > n ? word.substr(0, n - 1) + "..." : word;
	};

	return (
		<div className="card">
			<div className="post-card post-full">
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
						<Link to="/post">{title}</Link>
					</h5>
					<p>{truncate(description, 80)}</p>
					<div className="post-card-info">
						<ul className="list-inline">
							<li>
								<Link to="">
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
		</div>
	);
};

export default MasonaryCard;
