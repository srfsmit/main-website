import React from "react";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center w-full gap-3 p-6 bg-black">
			<div className="flex text-2xl text-white">
				<a
					target="_blank"
					href="https://www.linkedin.com/in/srf-smit-2206b4306">
					<CiLinkedin className="cursor-pointer" />
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/srf_smit">
					<CiInstagram className="cursor-pointer" />
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/smu_srf">
					<CiInstagram className="cursor-pointer" />
				</a>
			</div>
			<div className="flex items-center text-white text-xl">
				<span
					className="hover:underline cursor-pointer"
					onClick={() => navigate("/contact")}>
					Contact us
				</span>
				<span className="mx-2">|</span>
				<span
					className="hover:underline cursor-pointer"
					onClick={() => navigate("/developers")}>
					Developers
				</span>
			</div>
			<div className="border border-white border-1 w-[90%] md:w-[70%] mt-4"></div>
			<div className="text-sm text-gray-400">© All Rights Reserved SRF SMU</div>
		</div>
	);
};

export default Footer;
