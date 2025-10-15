import React from "react";
import Logo from "../images/srflogo.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ links, isOpen, toggleSidebar }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-64 h-full bg-orange-300 transform py-2 ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 ease-in-out z-50`}>
			<div className="flex justify-between px-4 ">
				<img src={Logo} width={50} alt="Logo" />
				<button className="absolute top-4 right-4" onClick={toggleSidebar}>
					✖
				</button>
			</div>
			<ul className="mt-8">
				{links.map((link) => (
					<li key={link.path} className="px-4 py-2 hover:bg-orange-400">
						{link.external ? (
							<a
								href={link.path}
								target="_blank"
								rel="noopener noreferrer"
								className={`px-4 py-2 hover:bg-orange-400 text-white ${link.highlight ? 'font-bold border-2 border-white rounded-md' : ''}`}>
								{link.title}
							</a>
						) : (
							<Link
								to={link.path}
								className="px-4 py-2 text-white hover:bg-orange-400">
								{link.title}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
