import { Link } from "react-router-dom";

const AuthorWidget = () => {
	return (
		<section className="section author full-space mb-40 pt-55">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="widget-author inner-width">
							<div className="image">
								<img src="/src/assets/others/1.jpg" alt="" />
							</div>
							<h6>
								<span>Hi, I'm David Smith</span>
							</h6>
							<div className="link">13 Articles</div>
							<p>
								I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until
								now.
							</p>

							<div className="social-media">
								<ul className="list-inline">
									<li>
										<Link to="" className="color-facebook">
											<i className="fab fa-facebook"></i>
										</Link>
									</li>
									<li>
										<Link to="" className="color-instagram">
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link to="" className="color-twitter">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link to="" className="color-youtube">
											<i className="fab fa-youtube"></i>
										</Link>
									</li>
									<li>
										<Link to="" className="color-pinterest">
											<i className="fab fa-pinterest"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AuthorWidget;
