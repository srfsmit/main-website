import React from "react";
import kunal from "../images/kunal.jpeg";

import Developer from "../components/Developer";

const DevelopersPage = () => {
	const developers = [
		{
			name: "Kunal Sharma",
			registrationNo: "202100033",
			institution: "Sikkim Manipal Institute of Technology",
			email: "kunal_202100033@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/kunal021",
			image: kunal,
			message:
				"It was an amazing experience building this website. I learned a lot and enjoyed working with the team.",
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl md:text-5xl font-bold text-orange-800 font-satoshi text-center mb-8">
				Our Development Team
			</h1>
			<div className="grid grid-cols-1 gap-8">
				{developers.map((developer, index) => (
					<Developer key={index} developer={developer} />
				))}
			</div>
		</div>
	);
};

export default DevelopersPage;
