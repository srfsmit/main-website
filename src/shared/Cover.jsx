import React from "react";
import Main from "../images/main.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const Cover = () => {
	return (
		<div className="gap-4 p-4 md:flex md:flex-col">
			<div className="flex items-stretch justify-between w-full" id="main">
				<div
					className="flex flex-col flex-1 gap-2 text-5xl font-bold tracking-widest uppercase md:text-8xl"
					id="srf">
					<div>
						<span className="text-orange-500">S</span>tudent
					</div>
					<div>
						<span className="text-orange-500">R</span>esearch
					</div>
					<div>
						<span className="text-orange-500">F</span>orum
					</div>
					<div>
						<span className="text-orange-500">S</span>MU
					</div>
				</div>

				<div className="justify-end flex-1 hidden md:flex">
					<img
						src={Main}
						alt="Large"
						className="object-contain w-auto h-[400px] rounded-xl"
					/>
				</div>
			</div>

			<div className="justify-between hidden col-span-5 md:flex">
				<img src={img1} alt="1" className="w-1/6 h-auto rounded-tl-full" />
				<img src={img2} alt="2" className="w-1/6 h-auto" />
				<img src={img3} alt="3" className="w-1/6 h-auto" />
				<img src={img4} alt="4" className="w-1/6 h-auto" />
				<img src={img5} alt="5" className="w-1/6 h-auto rounded-br-full" />
			</div>
		</div>
	);
};

export default Cover;
