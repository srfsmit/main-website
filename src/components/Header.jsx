import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import Logo from "../images/srflogo.svg";

const Header = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const links = [
		{ title: "Home", path: "/" },
		{ title: "Governing Council", path: "/governing" },
		{ title: "Articles", path: "/articles" },
		{ title: "Events", path: "/events" },
		{ title: "Gallery", path: "/gallery" },
	];

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="relative w-full px-4 py-2 bg-orange-500 md:px-16">
			<div className="flex items-center justify-between">
				<img src={Logo} width={50} alt="Logo" />
				<div className="items-center justify-between hidden gap-16 md:flex">
					{links.map((link, idx) => {
						return (
							<div className="w-32" key={idx}>
								<NavLinks {...link} />
							</div>
						);
					})}
				</div>
				<div className="flex items-center md:hidden">
					<button onClick={toggleSidebar}>
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
