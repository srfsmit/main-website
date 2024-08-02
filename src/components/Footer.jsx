import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center w-full gap-3 p-6 bg-black">
			<div className="flex text-2xl text-white">
				<CiFacebook className="cursor-pointer" />
				<CiInstagram className="cursor-pointer" />
			</div>
			<div
				className="px-6 py-2 font-medium text-black transition-all duration-100 bg-white rounded-3xl hover:bg-gray-200 hover:cursor-pointer"
				onClick={() => {
					navigate("/contact");
				}}>
				Contact Us
			</div>
			<div className=" border border-white border-1 w-[90%] md:w-[70%]"></div>
			<div className="text-sm text-gray-400">© All Rights Reserved SRF SMU</div>
		</div>
	);
};

export default Footer;
