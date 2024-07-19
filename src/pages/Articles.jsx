import React, { useState, useEffect } from "react";
import { databases } from "../appwrite";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const promise = databases.listDocuments(
			"66998cba000a441d2083",
			"66998cc6001807ee34db"
		);

		promise
			.then((res) => {
				setArticles(res.documents);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	const calculateRows = () => {
		const numberOfArticles = articles.length;
		if (numberOfArticles < 30) {
			return Math.ceil(numberOfArticles / 3);
		}
		return 10;
	};

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		rows: calculateRows(),
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
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

	return (
		<>
			<div className="mx-auto text-3xl font-bold text-orange-800 font-satoshi md:text-5xl">
				Articles By The Students
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
						{articles.map((article, idx) => (
							<div key={idx} className="p-4">
								<div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden md:h-[300px] h-[500px]">
									<img
										src={article.img}
										alt="Article"
										className="object-cover md:h-full md:w-1/3 rounded-t-lg md:rounded-none md:rounded-l-lg h-[200px] w-full"
									/>
									<div className="flex flex-col flex-grow p-4">
										<h3 className="text-lg font-bold text-black ">
											{article.Title}
										</h3>
										<p className="mt-2 text-xs text-gray-700">{article.Name}</p>
										<p className="mt-2 text-sm text-gray-900 h-[100px] overflow-hidden">
											{article.Content}
										</p>
										<button
											onClick={() => navigate(`/article/${article.$id}`)}
											className="px-4 py-2 mt-2 text-white bg-orange-500 rounded-lg">
											Read More
										</button>
									</div>
								</div>
							</div>
						))}
					</Slider>
				)}
			</div>
		</>
	);
};

export default Articles;
