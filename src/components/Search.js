import { SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/searchContext";

const Search = () => {
  const navigate = useNavigate();
  const {
    searchImageText,
    setSearchImageText,
    setSearchResultsText,
    getImages,
  } = useSearch();

  return (
    <>
      <SearchIcon />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchImageText && getImages(searchImageText);
          setSearchResultsText(searchImageText);
          setSearchImageText("");
          navigate("/searchResults");
        }}
        className="flex mx-2 w-72 md:w-full"
      >
        <input
          type="text"
          value={searchImageText}
          placeholder="Search"
          onChange={(e) => setSearchImageText(e.target.value)}
          className="px-4 ml-2 w-[600px] border-l-white border-2 border-y-0 border-r-0 bg-transparent outline-none"
        />
        <button type="submit" className="border px-2 rounded-md mx-2">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
