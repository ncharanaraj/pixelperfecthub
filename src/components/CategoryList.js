import React from "react";
import { categories } from "../utils/constants";

const CategoryList = ({ setSelectedCategory }) => {
  return (
    <>
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-8 py-2 rounded-sm border"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CategoryList;
