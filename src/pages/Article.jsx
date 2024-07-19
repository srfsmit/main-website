import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../appwrite";
import { Oval } from "react-loader-spinner";

const Article = () => {
	const { id } = useParams();
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const promise = databases.getDocument(
			"66998cba000a441d2083",
			"66998cc6001807ee34db",
			id
		);

		promise
			.then((res) => {
				setArticle(res);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
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
		);
	}

	if (!article) {
		return <div>Article not found</div>;
	}

	return (
		<div className="container flex flex-col gap-4 p-4 mx-auto">
			<h1 className="text-3xl font-bold text-orange-800">{article.Title}</h1>
			<div className="flex flex-col items-center">
				<img
					src={article.img}
					alt={article.Title}
					className="object-cover w-[300px] h-auto my-4"
				/>
				<p className="mt-2 text-xl font-bold text-gray-700">{article.Name}</p>
			</div>

			<p className="text-lg text-gray-900 md:px-10 ">{article.Content}</p>
		</div>
	);
};

export default Article;
