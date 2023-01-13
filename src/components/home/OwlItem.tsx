import React from "react";

interface ICarousel {
	bgImage: string;
	category: string;
	title: string;
	author: {
		authorImage: string;
		authorName: string;
	};
	day: string;
	time: number;
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
							<a href="./blog-grid.html" className="categorie">
								{category}
							</a>
							<h2>
								<a href="./post-default.html">{title} </a>
							</h2>
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
