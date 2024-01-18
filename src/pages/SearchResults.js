import React, { useState } from "react";
import Figure from "../components/Figure";
import { useGetImages } from "../hooks/useGetImages";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

const SearchResults = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchImageText, setSearchImageText] = useState("");
  const [searchResultsText, setSearchResultsText] = useState("");
  const { images, loading, getImages } = useGetImages(selectedCategory);

  return (
    <div className="m-8">
      <div className="my-4">
        <Search
          searchImageText={searchImageText}
          setSearchImageText={setSearchImageText}
          setSearchResultsText={setSearchResultsText}
          getImages={getImages}
        />
        {searchResultsText && <div>Results: {searchResultsText}</div>}
      </div>
      <div className="flex gap-2 overflow-x-scroll mb-8">
        <CategoryList setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {loading ? (
          <div>loading...</div>
        ) : (
          images.map((image) => <Figure key={image.id} {...image} />)
        )}
      </div>
    </div>
  );
};

export default SearchResults;
