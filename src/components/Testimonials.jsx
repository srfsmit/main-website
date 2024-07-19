import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/img1.jpg"; // Import your images

const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};

	const testimonials = [
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		{
			date: "May 8, 2024",
			name: "Kunal Sharma",
			content:
				"My journey with SRF SMU has been nothing short of transformative. The opportunities provided have not only honed my research skills but also boosted my confidence and expanded my professional network. I am grateful for the growth and learning I've experienced here.",
			image: img1,
		},
		// Add more testimonials as needed
	];

	return (
		<div className="container mx-auto">
			<Slider {...settings}>
				{testimonials.map((testimonial, idx) => (
					<div key={idx} className="p-4">
						<div className="flex flex-col md:flex-row bg-white shadow-lg md:h-[300px] h:[500px]">
							<img
								src={testimonial.image}
								alt="Testimonial"
								className="object-cover md:h-full md:w-1/3"
							/>
							<div className="flex flex-col flex-grow p-4 overflow-y-scroll">
								<p className="text-gray-700">{testimonial.date}</p>
								<h3 className="mt-2 text-2xl font-bold text-black">
									{testimonial.name}
								</h3>
								<p className="flex-grow mt-4 text-gray-900">
									{testimonial.content}
								</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Testimonials;
