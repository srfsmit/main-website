import React from "react";

const Content = ({ title, children }) => {
	return (
		<div className="flex flex-col items-center gap-4 text-white md:p-4">
			<div className="text-xl font-bold md:text-3xl ">{title}</div>
			<div className="max-w-[95%]">{children}</div>
		</div>
	);
};

export default Content;
