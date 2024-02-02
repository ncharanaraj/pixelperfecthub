import {
  Background,
  Header,
  BlurContainer,
  Search,
  CategoryList,
  Figure,
} from "../components";
import React from "react";
import { categories } from "../utils/constants";
import { useSearch } from "../context/searchContext";

const SearchResults = () => {
  const { searchResultsText, setSelectedCategory, loading, images } =
    useSearch();

  console.log(images);

  return (
    <div>
      <Background classNames={["h-80"]}>
        <Header />
        <div className="mt-4 w-max flex flex-col ">
          <BlurContainer classNames={["flex", "items-center"]}>
            <Search />
          </BlurContainer>
          {searchResultsText && (
            <div className="font-medium text-4xl py-4 m-auto">
              Results: {searchResultsText}
            </div>
          )}
        </div>
      </Background>
      <div className="flex gap-2 mb-8 overflow-x-scroll no-scrollbar bg-[#F5F5F5] py-4 px-8 ">
        {categories.map(({ id, categoryName }) => (
          <CategoryList
            key={id}
            category={categoryName}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="p-8">
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="md:columns-3 columns-1 gap-8 ">
            {images.map((image) => (
              <Figure key={image.id} {...image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
