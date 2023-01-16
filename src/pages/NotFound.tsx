import React from "react";

const NotFound = () => {
	return (
		<section className="section pt-55 mb-50">
			<div className="container-fluid">
				<div className="page404 widget">
					<div className="content">
						<h1>404</h1>
						<h3>Page Not Found.</h3>
						<p>It looks like nothing was found at this location.</p>
						<a href="./index.html" className="btn-custom">
							Go back to Home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
