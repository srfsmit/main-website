import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Governing from "../pages/Governing";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import Layout from "../Layout";
import DevelopersPage from "../pages/Developers";

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
			{ path: "/developerspage", element: <DevelopersPage /> },
		],
	},
]);

export default router;
