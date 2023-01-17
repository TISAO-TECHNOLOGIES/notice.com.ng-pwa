import React from "react";

const AboutBody = () => {
	return (
		<div className="col-lg-8 mt-30">
			<div className="about-us">
				<div className="about-us-image">
					<img src="/src/assets/others/about-us.jpg" alt="" />
				</div>
				<div className="description">
					<h6>Thank you for checking out our blog website.</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident perferendis minima accusamus
						aliquam reprehenderit autem
					</p>
					<p>
						praesentium sunt beatae libero non totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum
						provident perferendis minima accusamus aliquam reprehenderit autem praesentium sunt beatae libero non totam.
					</p>
					<div className="quote">
						<div>
							<i className="icon_quotations_alt"></i>
						</div>
						<p>"My website’s kind of fun for me. I get to do drawings on that. It’s kind of fun.”</p>
						<small>Jeff Bridges.</small>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien.
						In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum malesuada fames ante ipsum primis in
						faucibus. Aenean scelerisque efficitur mauris nec tincidunt. cursus leo ultricies magna faucibus id.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutBody;
