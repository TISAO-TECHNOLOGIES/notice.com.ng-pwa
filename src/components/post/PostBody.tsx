import React from "react";
import Widget from "../shared/widgets/Widget";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import PostDetails from "./PostDetails";
import PostDirection from "./PostDirection";

const PostBody = () => {
	return (
		<div className="col-lg-8 mb-20">
			{/* <!--Post-single--> */}
			<PostDetails />

			{/* <!--next & previous-posts--> */}
			<PostDirection />

			{/* <!--widget-comments--> */}
			<Widget title="3 Comments" className="mb-50">
				<>
					{/* comments */}
					<ul className="widget-comments">
						{[1, 2, 3, 4].map((comment) => (
							<Comments key={comment} />
						))}
					</ul>

					{/* comment form */}
					<div className="title">
						<h5>Leave a Reply</h5>
					</div>

					<CommentForm />
				</>
			</Widget>
		</div>
	);
};

export default PostBody;
