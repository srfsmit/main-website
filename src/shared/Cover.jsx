import React from "react";
import Main from "../images/main.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

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

			<div className="justify-between hidden md:grid grid-cols-5 gap-4 ">
				<img src={img1} alt="1" className="h-auto rounded-tl-full col-span-1" />
				<img src={img2} alt="2" className="h-auto col-span-1" />
				<img src={img3} alt="3" className="h-auto col-span-1" />
				<img src={img4} alt="4" className="h-auto col-span-1" />
				<img
					src={img5}
					alt="5"
					className="=h-auto rounded-br-full col-span-1"
				/>
			</div>
		</div>
	);
};

export default Cover;
