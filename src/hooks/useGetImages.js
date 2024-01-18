import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const useGetImages = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async (searchText) => {
    try {
      setLoading(true);
      const url = !searchText ? `category=${category}` : `q=${searchText}`;
      const response = await fetch(`${API_URL}&${url}`);
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return { images, loading, getImages };
};
