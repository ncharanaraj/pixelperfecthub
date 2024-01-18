import React from "react";
import Figure from "../components/Figure";
import { useGetImages } from "../hooks/useGetImages";

const SearchResults = () => {
  const { images, loading } = useGetImages();

  console.log(images, loading);

  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <div>loading...</div>
      ) : (
        images.map((image) => <Figure key={image.id} {...image} />)
      )}
    </div>
  );
};

export default SearchResults;
