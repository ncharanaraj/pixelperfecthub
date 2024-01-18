import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const useGetImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
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
  }, []);

  return { images, loading };
};
