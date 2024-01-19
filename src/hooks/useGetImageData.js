import { useState } from "react";
import { API_URL } from "../utils/constants";

export const useGetImageData = () => {
  const [imageData, setImageData] = useState({});
  const [loading, setLoading] = useState(false);

  const getImageDetails = async (imageId) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}&id=${imageId}`);
      const data = await response.json();
      setImageData(data.hits[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { imageData, loading, getImageDetails };
};
