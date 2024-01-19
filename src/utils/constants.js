import { v4 as uuidv4 } from "uuid";

export const API_URL =
  "https://pixabay.com/api/?key=" + process.env.REACT_APP_PIXABAY_API_KEY;

const categoryList = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

export const categories = categoryList.map((category) => ({
  id: uuidv4(),
  categoryName: category,
}));
