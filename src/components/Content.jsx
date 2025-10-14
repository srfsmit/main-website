import React from "react";

const Content = ({ title, children }) => {
	return (
		   <div className="flex flex-col items-center gap-4 text-white md:p-4 text-center w-full">
			   <div className="w-full text-xl font-bold md:text-3xl text-center">{title}</div>
			   <div className="w-full max-w-[95%] text-justify">{children}</div>
		   </div>
	);
};

export default Content;
