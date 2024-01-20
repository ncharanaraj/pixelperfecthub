import React from "react";

const Search = ({
  searchImageText,
  setSearchImageText,
  setSearchResultsText,
  getImages,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchImageText && getImages(searchImageText);
          setSearchResultsText(searchImageText);
          setSearchImageText("");
        }}
      >
        <label>
          <input
            type="text"
            value={searchImageText}
            placeholder="Start new search"
            onChange={(e) => setSearchImageText(e.target.value)}
          />
        </label>
        <button type="submit" className="border px-4 rounded-sm">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
