import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { databases } from "../appwrite";
import { Query } from "appwrite";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const promise = databases.listDocuments(
			"66998cba000a441d2083",
			"66ad1739002540db4110",
			[Query.orderDesc("$updatedAt")]
		);

		promise
			.then((res) => {
				setTestimonials(res.documents);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);
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
	if (testimonials.length) {
		return (
			<div className="container mx-auto">
				<Slider {...settings}>
					{testimonials.map((testimonial, idx) => (
						<div key={idx} className="p-4">
							<div className="flex flex-col md:flex-row bg-white dark:bg-gray-800  shadow-lg md:h-[300px] h:[500px]">
								<img
									src={testimonial.image}
									alt="Testimonial"
									className="object-cover md:h-full md:w-1/3"
								/>
								<div className="flex flex-col flex-grow p-4 overflow-y-scroll">
									<p className="text-gray-700 dark:text-gray-200">{testimonial.date}</p>
									<h3 className="mt-2 text-2xl font-bold text-black dark:text-gray-300">
										{testimonial.name}
									</h3>
									<p className="flex-grow mt-4 text-gray-900 dark:text-gray-300 text-justify">
										{testimonial.content}
									</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	} else {
		return (
			<div className="mx-auto mb-8 text-xl font-bold text-orange-900">
				No Testimonials Yet
			</div>
		);
	}
};

export default Testimonials;
