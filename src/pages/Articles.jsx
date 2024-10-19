import React, { useState, useEffect } from "react";
import { databases } from "../appwrite";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";
import { Query } from "appwrite";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const promise = databases.listDocuments(
			"66998cba000a441d2083",
			"66998cc6001807ee34db",
			[Query.orderDesc("$createdAt")]
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
    <div className="bg-orange-50 py-8">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
        Articles By The Students
      </h1>
      <div className="container mx-auto px-4">
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
              <div key={idx} className="p-2">
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex h-[300px]">
                  <img
                    src={article.img}
                    alt={article.Title}
                    className="w-1/3 object-cover"
                  />
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{article.Title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{article.Name}</p>
                      <p className="text-sm text-gray-800 text-justify">
                        {article.Content.substring(0, 200)}...
                      </p>
                    </div>
                    <button
                      onClick={() => navigate(`/article/${article.$id}`)}
                      className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors mt-2"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Articles;
