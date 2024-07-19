import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavLinks = ({ title, path }) => {
	const location = useLocation();
	const isActive = location.pathname === path;
	return (
		<div
			className={`text-base font-semibold transition-transform duration-500 ease-in-out transform cursor-pointer font-satoshi hover:scale-110 hover:font-bold hover:text-white ${
				isActive ? "text-lg text-white scale-110" : ""
			}`}>
			<Link to={path}>{title}</Link>
		</div>
	);
};

export default NavLinks;
