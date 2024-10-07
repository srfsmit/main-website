import React from "react";
import img1 from "../images/1.jpg";
import Developer from "../components/Developer";

const DevelopersPage = () => {
	const developers = [
		{
			name: "Developer 1",
			registrationNo: "REG001",
			institution: "Sikkim Manipal Institute of Technology",
			email: "dev1@smu.edu.in",
			linkedin: "https://www.linkedin.com/in/dev1",
			instagram: "https://www.instagram.com/dev1",
			image: img1,
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
