import { Outlet } from "react-router-dom";

const PostLayout = () => {
	return (
		<main className="text-left">
			<Outlet />
		</main>
	);
};

export default PostLayout;
