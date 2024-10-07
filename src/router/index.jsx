import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Governing from "../pages/Governing";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import DevelopersPage from "../pages/Developers";
import Layout from "../Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/governing", element: <Governing /> },
			{ path: "/events", element: <Events /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/article/:id", element: <Article /> },
			{ path: "/articles", element: <Articles /> },
			{ path: "/developers", element: <DevelopersPage /> },
			{ path: "*", element: <Home /> },
		],
	},
]);

export default router;
