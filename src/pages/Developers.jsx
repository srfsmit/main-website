import React from "react";
import kunal from "../images/kunal.jpeg";
import mayank from "../images/mayank.jpeg";
import tor from "../images/torgit.jpg";
import jitam from "../images/jitam.jpg";
import abhigyan from "../images/abhigyan.jpeg";
import tanushka from "../images/tanushka.jpeg";
import bedangshu from "../images/bedangshu.jpeg";
import isha from "../images/isha.jpg";
import peela from "../images/peela.jpeg";
import priyanka from "../images/priyanka.jpeg";
import parvesh from "../images/parvesh.jpeg";
import seedorf from "../images/seedorf.jpeg";

import Developer from "../components/Developer";

const DevelopersPage = () => {
	const developers = [
		{
			name: "Kunal Sharma",
			position: "Senior Developer, President, SRF SMIT (2024-2025)",
			batch: "2025",
			institution: "Sikkim Manipal Institute of Technology",
			email: "kunal_202100033@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/kunal021",
			github: "https://github.com/indiedev02",
			image: kunal,
			message: "I had the rewarding experience of guiding fellow students and contributing to the development of the SRF SMU website. Collaborating closely with my peers, I was able to share insights on both design and functionality, helping to create a platform that effectively represents SRF SMU’s mission. It was a great opportunity to both learn and lead, and I’m proud of the collective effort that resulted in a user-friendly and impactful website.",
		},
		{
			name: "Jitam Bharadwaj",
			position: "Senior Developer, Executive Board Member, SRF SMIT (2024-2025)",
			batch: "2025",
			institution: "Sikkim Manipal Institute of Technology",
			email: "jitam_202100242@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/jitam-bharadwaj-53121a224/",
			github: "https://github.com/bharadwajjitam101",
			image: jitam,
			message: "Working with my peers on the development of the SRF SMU website was a truly rewarding experience. I got the chance to guide junior students, sharing ideas and insights on both design and how the website should work. This teamwork helped us build a platform that aligns well with SRF SMU’s goals. It was an opportunity to grow as a leader while also learning from others, and I’m proud of how we worked together to create a smooth and impactful website.",
		},
		{
			name: "Mayank Jaiswal",
			position: "Internship Manager, Secretary, SRF SMIT (2024-2025)",
			batch: "2025",
			institution: "Sikkim Manipal Institute of Technology",
			email: "mayank_202100103@smit.smu.edu.in",
			linkedin: " https://www.linkedin.com/in/mayank-jaiswal-273bb2227",
			image: mayank,
			message: "Being part of the organizing team has been a valuable learning experience. I gained practical skills like using GitHub, which has been essential for collaboration and version control, and explored web development, allowing me to understand the basics of creating websites. Additionally, I learned a lot about team management, from coordinating tasks to ensuring smooth communication between team members. This experience has helped me grow both technical and managerial skills.",
		},
		{
			name: "Torsha G",
			position: "Developer & Webmaster, President, SRF SMIT (2025-2026)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "grantersofdardis@protonmail.com",
			github: "https://github.com/dianosaur12",
			image: tor,
			message: "Despite being a student of technology, web development had never really quite piqued my interest until I was asked to become the sole maintainer of this website. However, now that I've finally been made to rise to this occasion, I think web dev can be quite fun sometimes :)",
		},
		{
			name: "Abhigyan Borah",
			position: "Developer (Intern) & Member of Team of Officials, SRF SMIT (2024-2025)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "abhigyan_202200096@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/abhigyan-borah-075a88248/",
			instagram: "https://www.instagram.com/ssup.abhigyan/",
			github: "https://github.com/abhigyan2003",
			image: abhigyan,
			message: "I would like to express my heartfelt gratitude to the Student Research Forum (SRF) at SMIT for giving me the opportunity to contribute as a developer in the creation of their dynamic website. The experience has been invaluable, allowing me to apply my skills in web development and learn new technologies along the way. I would also like to extend my thanks to the entire SRF team for their continuous support and collaboration throughout this project.",
		},
		{
			name: "Tanushka Singh",
			position: "Developer (Intern)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "tanushka_202200284@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/tanushka-chauhan-279b9a247/",
			github: "https://github.com/tanushkasingh3000",
			image: tanushka,
			message: "It was a very good experience working woth SRF, it not only taught me about different programming languages but also taught me how to work with a team, as a team.",
		},
		{
			name: "Bedangshu Raj Mudiar",
			position: "Developer (Intern)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "bedangshu_202200319@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/bedangshu-raj-mudiar-b89259293/",
			instagram: "https://www.instagram.com/bedangshurajmudiar/profilecard/?igsh=dTM3dGdja2Y3NjRm",
			image: bedangshu,
			message: "Being part of the team and building this website has been an insightful and rewarding journey. I’ve gained a lot of knowledge and significantly improved my skill set along the way. A big thank you to all the mentors and teacher coordinators for providing me with this opportunity .I truly appreciate their guidance and support! Peace✌️",
		},
		{
			name: "Isha Sudarshini",
			position: "Developer (Intern)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "isha_202200287@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/isha-sudarshini-3b18a724b/",
			instagram: "https://www.instagram.com/__.xishaa.__/",
			image: isha,
			message: "During my web development internship at SRF SMIT, I had the opportunity to contribute to the frontend of the official website using React, HTML, and CSS. Although I had no prior experience with React, I quickly adapted and learned throughout the project. Working closely with an amazing team and receiving guidance from Jitam Bharadwaj and Kunal Sharma, I not only gained technical skills but also honed my ability to collaborate effectively using Git. This project was a great learning experience, and I'm proud to have been a part of it.",
		},
		{
			name: "Seedorf Rai",
			position: "Developer (Intern)",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "Seedorf_20200030@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/seedorf-rai-373689231/",
			instagram: "https://www.instagram.com/see._.dorf/",
			image: seedorf,
			message: "Building this website was a journey filled with collaboration, learning, and creativity. Working together as a team, we overcame challenges and turned our vision into reality. This experience has been both fulfilling and a testament to the power of teamwork",
		},
		{
			name: "Peela Sharandeep",
			position: "Developer (Intern), Intern SRF SMIT",
			batch: "2026",
			institution: "Sikkim Manipal Institute of Technology",
			email: "Sharan_202200481@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/sharandeep-peela-84b684219/",
			instagram: "https://www.instagram.com/sharandeep_peela/",
			image: peela,
			message: "Working on the website project with my seniors as mentors was an incredible experience. Their guidance, expertise, and encouragement not only enhanced my technical skills but also taught me valuable lessons in teamwork, communication, and problem-solving. Thank you for your mentorship and support - it's had a lasting impact on me as a developer.",
		},
		{
			name: "Priyanka Lama",
			position: "Developer (Intern)",
			batch: "2027",
			institution: "Sikkim Manipal Institute of Technology",
			email: "priyanka_202300064@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/priyanka-lama-519508280/",
			image: priyanka,
			message: "Collaborating with such a talented and dedicated team has been an invaluable experience. I've learned a lot from everyone involved and the experience i have gained.",
		},
		{
			name: "Pravesh Sharma",
			position: "Developer (Intern)",
			batch: "2027",
			institution: "Sikkim Manipal Institute of Technology",
			email: "Pravesh_202300002@smit.smu.edu.in",
			linkedin: "https://www.linkedin.com/in/pravesh-sharma-a93b39284/",
			image: parvesh,
			message: "It was very good opportunity to have been parts of this team and to have experience.",
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl md:text-5xl font-bold text-orange-800 font-satoshi text-center mb-8">
				Our Development Team
			</h1>
			<div className="grid grid-cols-1 gap-8">
				{developers.map((developer, index) => (
					<Developer key={index} developer={developer} batch={developer.batch} />
				))}
			</div>
		</div>
	);
};

export default DevelopersPage;
