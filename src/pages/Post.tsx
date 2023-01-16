import PostBody from "../components/post/PostBody";
import PostWidgets from "../components/post/PostWidgets";

const Post = () => {
	return (
		<>
			<section className="section pt-55">
				<div className="container-fluid">
					<div className="row">
						{/* POST BODY */}
						<PostBody />
						

						{/* WIDGET COLUMN */}
						<PostWidgets />
					</div>
				</div>
			</section>
		</>
	);
};

export default Post;
