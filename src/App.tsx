import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import ScriptResource from "./hooks/scriptResource";
// pages
import Blog from "./pages/Blog";
import HomeScreen from "./pages/HomeScreen";
import Post from "./pages/Post";
import Author from "./pages/Author";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
// layout
import RootLayout from "./layouts/RootLayout";
import PostLayout from "./layouts/PostLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomeScreen />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/author" element={<Author />} />
			<Route path="/contact" element={<Contact />} />

			<Route path="/post" element={<PostLayout />}>
				<Route index element={<Post />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	// scripts
	ScriptResource("/src/assets/js/jquery-3.5.0.min.js");
	ScriptResource("/src/assets/js/popper.min.js");
	ScriptResource("/src/assets/js/bootstrap.min.js");
	// JS Plugins
	ScriptResource("/src/assets/js/ajax-contact.js");
	ScriptResource("/src/assets/js/owl.carousel.min.js");
	ScriptResource("/src/assets/js/medium-zoom.min.js");
	// Main JS
	ScriptResource("/src/assets/js/main.js");

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
