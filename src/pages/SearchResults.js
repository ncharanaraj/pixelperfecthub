import React from "react";
import Figure from "../components/Figure";
import Search from "../components/Search";
import Header from "../components/Header";
import { categories } from "../utils/constants";
import Background from "../components/Background";
import CategoryList from "../components/CategoryList";
import BlurContainer from "../components/BlurContainer";
import { useSearch } from "../context/searchContext";

const SearchResults = () => {
  const { searchResultsText, setSelectedCategory, loading, images } =
    useSearch();

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
      <div className="flex flex-wrap justify-between gap-y-6 px-8">
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
