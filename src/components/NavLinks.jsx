import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavLinks = ({ title, path, external, highlight }) => {
	const location = useLocation();
	const isActive = location.pathname === path;
	
	const baseClasses = "text-base font-semibold transition-transform duration-500 ease-in-out transform cursor-pointer font-satoshi hover:scale-110 hover:font-bold hover:text-white";
	const highlightClasses = highlight ? "font-bold text-white border-2 border-white px-2 py-1 rounded-md bouncy-highlight" : "";
	const activeClasses = isActive && !external ? "text-white font-bold" : "";
	
	return (
		<div className={`${baseClasses} ${highlightClasses} ${activeClasses}`}>
			{external ? (
				<a href={path} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			) : (
				<Link to={path}>{title}</Link>
			)}
		</div>
	);
};

export default NavLinks;
