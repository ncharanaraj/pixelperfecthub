import { createContext, useContext, useState } from "react";
import { useGetImages } from "../hooks/useGetImages";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchImageText, setSearchImageText] = useState("");
  const [searchResultsText, setSearchResultsText] = useState("");

  const { images, loading, getImages } = useGetImages(selectedCategory);

  return (
    <searchContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchImageText,
        setSearchImageText,
        searchResultsText,
        setSearchResultsText,
        images,
        loading,
        getImages,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);
