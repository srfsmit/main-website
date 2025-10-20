/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
const NavLinks = ({ title, path, external, highlight }) => {
	const location = useLocation();
	const isActive = location.pathname === path;
	
    const wrapperClasses = "text-base font-semibold font-poppins";
    const linkBase = "inline-block transition-transform duration-500 ease-in-out transform cursor-pointer text-white/90 hover:text-white dark:text-white/80 dark:hover:text-white pb-1";
    const highlightClasses = highlight ? "font-bold text-white border-2 border-white px-2 py-1 rounded-md bouncy-highlight" : "";
    const linkActive = isActive && !external ? "text-white font-bold border-black dark:border-orange-300 border-b-2 md:border-b-[3px]" : "";
	
	return (
        <div className={wrapperClasses}>
            {external ? (
                <a href={path} target="_blank" rel="noopener noreferrer" className={`${linkBase} ${highlightClasses} ${linkActive}`}>
                    {title}
                </a>
            ) : (
                <Link to={path} className={`${linkBase} ${highlightClasses} ${linkActive}`}>
                    {title}
                </Link>
            )}
        </div>
	);
};

export default NavLinks;
