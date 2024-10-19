  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!photos.length) {
    return <div>No photos found. Please check your Appwrite configuration.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-800 mb-8">SRF Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.$id} className="break-inside-avoid mb-4">
            <div className="relative group">
              <img 
                src={photo.img}
                alt={photo.Title || "Team member"}
                className="w-full h-auto object-cover rounded-lg shadow-md transition-all duration-300 border-2 border-[#f97316]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-end justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold p-4">{photo.Name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
