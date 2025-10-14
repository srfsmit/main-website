import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cover from "./shared/Cover";
import { Outlet } from "react-router-dom";
const Layout = () => {
       return (
	       <div className="flex flex-col justify-between min-h-screen bg-orange-100 dark:bg-gray-900 font-satoshi">
		       <Header />
		       <div className="flex flex-col gap-4 p-2 mb-4 md:gap-8 md:px-16">
			       <Cover />
		       </div>
		       <div className="flex flex-col gap-4 p-2 md:gap-8 md:px-16">
			       <Outlet />
		       </div>
		       <Footer />
	       </div>
       );
};

export default Layout;
