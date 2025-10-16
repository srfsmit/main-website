import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import Logo from "../images/srflogo.svg";
import { FiSun, FiMoon } from "react-icons/fi";
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
          const handleResize = () => {
              try {
                  if (window.innerWidth >= 768 && isSidebarOpen) {
                      setSidebarOpen(false);
                  }
              } catch (e) {
                  // ignore
              }
          };
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }, [isSidebarOpen]);



	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const next = !prev;
			try {
				if (next) {
					document.documentElement.classList.add('dark');
					localStorage.setItem('theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('theme', 'light');
				}
			} catch (e) {
				// ignore
			}
			return next;
		});
	};

    return (
        <div className="relative w-full px-4 py-2 bg-orange-500 md:px-16">
            <div className="flex items-center justify-between">
               <div className="flex gap-2 items-center">
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
                <div className="flex items-center gap-3">
                    <button
                        aria-label="Toggle dark mode"
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 relative z-20"
                    >
                        {darkMode ? <FiSun className="text-yellow-300" size={20} /> : <FiMoon className="text-gray-700" size={20} />}
                    </button>
                    <div className="md:hidden">
                        <button onClick={toggleSidebar} aria-label="Open menu">
                            <FiMenu className="text-white" size={24} />
                        </button>
                    </div>
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
