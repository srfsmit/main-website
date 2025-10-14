import React, { useState,useEffect } from "react";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import Logo from "../images/srflogo.svg";
import SMU from "../images/smulogo.jpg";

const Header = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	 const [darkMode, setDarkMode] = useState(false);

	const links = [
		{ title: "Home", path: "/" },
		{ title: "Governing Council", path: "/governing" },
		{ title: "Articles", path: "/articles" },
		{ title: "Events", path: "/events" },
		{ title: "Gallery", path: "/gallery" },
		{ title: "SRF Colloquium '25", path: "https://shorturl.at/xmUL7", external: true, highlight: true },
	];

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};
	 

useEffect(() => {
  const html = document.documentElement;
  if (darkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}, [darkMode]);
   

	return (
		<div className="relative w-full px-4 py-2 bg-orange-500 dark:bg-gray-900 md:px-16">
			<div className="flex items-center justify-between">
				<div className="flex gap-4">
					<img src={Logo} width={50} alt="Logo" className="rounded-md" />
					<img src={SMU} alt="" />
				</div>
				<div className="items-center justify-between hidden md:flex w-[60%]">
					{links.map((link, idx) => {
						return (
							<div className="w-fit" key={idx}>
								<NavLinks {...link} />
								
							</div>
						);
					})}
				</div>
				<div className="flex items-center gap-5">
					<button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-white text-orange-500 dark:bg-gray-800 dark:text-gray-100 font-medium hover:bg-gray-200 transition md:block"
          >
            {darkMode ? "🌞 Light": "🌙 Dark" }
          </button>
					<button onClick={toggleSidebar} className="md:hidden">
						<FiMenu className="text-white" size={24} />
					</button>
				</div>
			</div>
			<Sidebar
				links={links}
				isOpen={isSidebarOpen}
				toggleSidebar={toggleSidebar}
			/>
		</div>
	);
};

export default Header;
