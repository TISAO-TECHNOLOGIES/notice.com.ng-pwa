import React from "react";
import { Link } from "react-router-dom";

interface ICarousel {
	bgImage: string;
	category: string;
	title: string;
	author: {
		authorImage: string;
		authorName: string;
	};
	day: string;
	time: string;
}

const OwlItem = ({ bgImage, category, title, author, day, time }: ICarousel) => {
	return (
		<div
			className="hero d-flex align-items-center"
			style={{
				backgroundImage: `url(${bgImage})`,
			}}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
						<div className="hero-content">
							<Link to="/blog" className="categorie">
								{category}
							</Link>
							<h2>
								<Link to="/post">{title} </Link>
							</h2>
							<div className="post-card-info">
								<ul className="list-inline">
									<li>
										<Link to="/author">
											<img src={author.authorImage} alt="" />
										</Link>
									</li>
									<li>
										<Link to="/author">{author.authorName}</Link>
									</li>
									<li className="dot"></li>
									<li>{day}</li>
									<li className="dot"></li>
									<li>{time} Min Reads</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OwlItem;
