import React from "react";
import Content from "./Content";
const About = () => {
	return (
		<div className="grid w-full grid-cols-1 md:grid-cols-3 ">
			<div className="h-full p-2 bg-orange-500 rounded-t-3xl md:rounded-none md:rounded-tl-3xl">
				<Content title={"About SMU SRF"}>
					The Student Research Forum at Sikkim Manipal University is a dynamic
					platform that fosters intellectual growth and research skills among
					students. We believe in nurturing curiosity and promoting academic
					excellence.
				</Content>
			</div>
			<div className="h-full p-4 bg-orange-300">
				<Content title={"Mission Statement"}>
					Our mission is to foster a dynamic research environment that
					encourages innovation, collaboration, and excellence among students,
					empowering them to become leaders in their respective fields.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-500 md:rounded-tr-3xl">
				<Content title={"Research Areas"}>
					Explore the diverse research fields we focus on, ranging from
					cutting-edge technology and engineering to life sciences and social
					sciences. Our multidisciplinary approach ensures comprehensive
					development and impactful discoveries.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-300">
				<Content title={"Events and Workshops"}>
					Stay updated on our latest events, workshops, and seminars. These
					gatherings are designed to provide students with valuable insights,
					networking opportunities, and hands-on experience in various research
					domains.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-500">
				<Content title={"Our Approach"}>
					We adopt a collaborative and interdisciplinary approach, providing
					students with the necessary tools and guidance to conduct impactful
					research. Our focus is on fostering critical thinking and
					problem-solving skills.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-300">
				<Content title={"Student Achievements"}>
					Celebrate the accomplishments of our student researchers. From
					published papers to awards and recognitions, learn about the
					milestones our members have reached and the impact of their work.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-500 md:rounded-bl-3xl">
				<Content title={"Learning"}>
					At our forum, learning is a journey of discovery. We encourage
					students to explore, question, and innovate. Through our programs,
					students learn to transform their ideas into meaningful research.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-300">
				<Content title={"Collaboration Opportunities"}>
					Discover opportunities for collaboration within and beyond our
					university. We encourage partnerships with other academic
					institutions, industry leaders, and research organizations to enhance
					the scope and reach of our projects.
				</Content>
			</div>
			<div className="h-full p-2 bg-orange-500 md:rounded-none md:rounded-br-3xl rounded-b-3xl ">
				<Content title={"Join Us"}>
					Interested in becoming a part of SMU SRF? Learn how you can join our
					community, participate in research projects, and contribute to
					groundbreaking work that makes a difference.
				</Content>
			</div>
		</div>
	);
};

export default About;
