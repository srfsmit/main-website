import { useEffect, useState } from "react";
import { storage } from "../appwrite"; // Make sure to import Query from Appwrite
import { Query } from "appwrite";

const PhotoGallery = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const itemsPerPage = 30; // Customize this to your desired items per page

	// Fetch photos from the Appwrite bucket
	const fetchPhotos = async (page) => {
		setLoading(true);
		try {
			const offset = (page - 1) * itemsPerPage;

			// Pass queries as an array
			const response = await storage.listFiles("66d7412a00285bc117f7", [
				Query.limit(itemsPerPage),
				Query.offset(offset),
			]);

			setPhotos(response.files);

			// Set total pages based on total file count
			const totalCount = response.total;
			setTotalPages(Math.ceil(totalCount / itemsPerPage));
			setLoading(false);
		} catch (err) {
			console.log(err);
			setError(err.message || "Something went wrong!");
			setLoading(false);
		}
	};

	// Fetch photos when the component mounts and when currentPage changes
	useEffect(() => {
		fetchPhotos(currentPage);
	}, [currentPage]);

	// Handle page navigation
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="w-12 h-12 border-4 border-orange-500 dark:border-gray-700 rounded-full animate-spin border-t-transparent"></div>
			</div>
		);
	}

	if (error) {
		return <div className="text-red-500 dark:text-gray-200">Error: {error}</div>;
	}

	if (!photos.length) {
		return <div>No photos found...</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-orange-800 dark:text-gray-300 mb-8 text-center">
				SRF Gallery
			</h1>
			<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
				{photos.map((photo) => (
					<div key={photo.$id} className="break-inside-avoid mb-4">
						<div className="relative group">
							<img
								src={
									storage.getFilePreview("66d7412a00285bc117f7", photo.$id).href
								} // Fetch file preview URL
								alt={photo.name || "Image"}
								className="w-full h-auto object-cover rounded-lg shadow-md transition-all duration-300 border-2 border-[#f97316] dark:border-gray-300"
							/>
						</div>
					</div>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center mt-8 space-x-4">
				<button
					onClick={handlePrevPage}
					className="px-4 py-2 bg-orange-500 dark:bg-gray-900 text-white rounded-md hover:bg-orange-600 dark:hover:bg-gray-700"
					disabled={currentPage === 1}>
					Previous
				</button>
				<span className="text-lg text-orange-800 dark:text-gray-200">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNextPage}
					className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 dark:bg-gray-900 dark:hover:bg-gray-700"
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</div>
	);
};

export default PhotoGallery;
