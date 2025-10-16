import React, { useState, useEffect } from "react";
import { databases } from "../appwrite";
import { Query } from "appwrite";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";
import { FaClock, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import moment from "moment";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		rows: 10,
		slidesToScroll: 1,
		slidesPerRow: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					arrows: false,
				},
			},
		],
	};

	useEffect(() => {
		setLoading(true);
		const promise = databases.listDocuments(
			"66998cba000a441d2083",
			"66ad25f1002ec01a6d1e",
			[Query.orderDesc("date"), Query.limit(25)]
		);

		promise
			.then((res) => {
				setEvents(res.documents);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="mx-auto mb-8 text-xl font-bold text-orange-900">
				Loading...
			</div>
		);
	}

	if (events.length) {
		return (
			<>
				<div className="mx-auto text-3xl font-bold text-orange-800 dark:text-orange-300 font-satoshi md:text-5xl">
					Events
				</div>
				<div className="container mx-auto">
					{loading ? (
						<div className="flex items-center justify-center h-64">
							<Oval
								height={50}
								width={50}
								color="#f97316"
								visible={true}
								ariaLabel="oval-loading"
								secondaryColor="#f97316"
								strokeWidth={2}
								strokeWidthSecondary={2}
							/>
						</div>
					) : (
						<Slider {...settings}>
							{events.map((event, idx) => (
								<div key={idx} className="p-4">
									<div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden md:h-[300px] h-auto">
										<img
											src={event.image}
											alt="event"
											className="object-cover md:h-full md:w-1/3 h-[200px] w-full"
										/>
										<div className="flex flex-col flex-grow p-4">
											<h3 className="text-lg font-bold text-black dark:text-white">
												{event.Title}
											</h3>
												<p className="mt-2 text-sm text-gray-900 dark:text-gray-300 text-justify">
												{event.content.substring(0, 300)}...
											</p>
											<div className="flex flex-col mt-2 space-y-2">
												<p className="flex items-center text-sm text-gray-700 dark:text-gray-300">
													<FaMapMarkerAlt className="mr-1" /> {event.venue}
												</p>
												<p className="flex items-center text-sm text-gray-700 dark:text-gray-300">
													<FaClock className="mr-1" />{" "}
													{moment(event.date).format("MMMM Do YYYY")}
												</p>
												{event.registrationLink && (
													<p className="flex items-center text-sm text-blue-700 dark:text-blue-300">
														<FaExternalLinkAlt className="mr-1" />{" "}
														<a
															href={event.registrationLink}
															target="_blank"
															rel="noopener noreferrer">
															Register Here
														</a>
													</p>
												)}
												{event.meetingLink && (
													<p className="flex items-center text-sm text-blue-700">
														<FaExternalLinkAlt className="mr-1" />{" "}
														<a
															href={event.meetingLink}
															target="_blank"
															rel="noopener noreferrer">
															Join Meeting
														</a>
													</p>
												)}
												{event.visitLink && (
													<p className="flex items-center text-sm text-blue-700">
														<FaExternalLinkAlt className="mr-1" />{" "}
														<a
															href={event.visitLink}
															target="_blank"
															rel="noopener noreferrer">
															More Info
														</a>
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					)}
				</div>
			</>
		);
	} else {
		return (
			<div className="mx-auto mb-8 text-xl font-bold text-orange-900">
				No Upcoming Events
			</div>
		);
	}
};

export default Events;
