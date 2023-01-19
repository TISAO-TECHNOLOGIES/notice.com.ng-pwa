import React from "react";

const CommentForm = () => {
	return (
		<>
			<form className="widget-form" action="/post" method="POST" id="main_contact_form">
				<p>Your email adress will not be published ,Requied fileds are marked*.</p>
				<div className="alert alert-success contact_msg" style={{ display: "none" }} role="alert">
					Your message was sent successfully.
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Message*" required></textarea>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input type="text" name="name" id="name" className="form-control" placeholder="Name*" required />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input type="email" name="email" id="email" className="form-control" placeholder="Email*" required />
						</div>
					</div>
					<div className="col-12 mb-20">
						<div className="form-group">
							<input type="text" name="website" id="website" className="form-control" placeholder="website" />
						</div>
						<label>
							<input name="name" type="checkbox" value="1" required />
							<span>save my name , email and website in this browser for the next time I comment.</span>
						</label>
					</div>
					<div className="col-12">
						<button type="submit" name="submit" className="btn-custom">
							Post Comment
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default CommentForm;
