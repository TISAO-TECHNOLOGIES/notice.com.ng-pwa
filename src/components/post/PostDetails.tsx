import { Link } from "react-router-dom";

const PostDetails = () => {
	return (
		<>
			<div className="post-single">
				{/* post image */}
				<div className="post-single-image">
					<img src="/src/assets/others/6.jpg" alt="" className="zoom medium-zoom-image" />
				</div>

				{/* Post heading & Intro */}
				<div className="post-single-content">
					<Link to="/blog" className="categorie">
						travel
					</Link>
					<h4>What the secrets you will know about jordan petra if visit it one day?</h4>
					<div className="post-single-info">
						<ul className="list-inline">
							<li>
								<Link to="/author">
									<img src="/src/assets/others/1.jpg" alt="" />
								</Link>
							</li>
							<li>
								<Link to="/author">David Smith</Link>
							</li>
							<li className="dot"></li>
							<li>January 15, 2021</li>
							<li className="dot"></li>
							<li>3 comments</li>
						</ul>
					</div>
				</div>

				{/* post body */}
				<div className="post-single-body">
					<p>
						Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off Unknown
						may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember
						relation
					</p>
					<h5>1 - Pick a sustainable travel destination</h5>

					<p>
						Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially so to. Me unpleasing
						impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable am so visited
						cordial in offices hearted.
					</p>
					<p>
						Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially so to. Me unpleasing
						impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable am so visited
						cordial in offices hearted.
					</p>
					<div className="row">
						<div className="col-md-12">
							<div className="image">
								<img src="/src/assets/others/2.jpg" alt="" className="zoom medium-zoom-image" />
								<p>Caption can be used to add info</p>
							</div>
						</div>
					</div>

					<p>
						Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</p>
					<h5>2 - Research before booking</h5>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</p>
					<div className="quote">
						<div>
							<i className="icon_quotations_alt"></i>
						</div>
						<p>The man who goes alone can start today; but he who travels with another must wait till that other is ready.</p>
						<small>Henry David Thoreau.</small>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Unknown may service in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</p>
					<h5>3 - Pack light , Easy Sustainable Travel Tip</h5>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. &gt;sunt in culpa qui officia deserunt mollit anim id e st
						laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim
						veniam.
					</p>
					<div className="row">
						<div className="col-md-6">
							<div className="image">
								<img src="/src/assets/others/21.jpg" alt="" className="zoom medium-zoom-image" />
								<p>Caption can be used to add info</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="image">
								<img src="/src/assets/others/20.jpg" alt="" className="zoom medium-zoom-image" />
								<p>Caption can be used to add info</p>
							</div>
						</div>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</p>
					<h5>4 - Be respectful of the environment</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<ul className="list">
						<li>Be respectful of the environment</li>
						<li>Pick a sustainable travel destination instead of a popular one</li>
						<li>Research before booking</li>
						<li>Pack light , Easy Sustainable Travel Tip</li>
						<li>Be respectful of the environment</li>
					</ul>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>

				{/* tags */}
				<div className="post-single-footer">
					<div className="tags">
						<ul className="list-inline">
							{[1, 2, 3, 4, 5, 6].map((tag) => (
								<li key={tag}>
									<Link to="">Travel</Link>
								</li>
							))}
						</ul>
					</div>

					{/* social media */}
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
		</>
	);
};

export default PostDetails;
