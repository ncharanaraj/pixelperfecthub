import React from "react";

const CategoryList = ({ category, setSelectedCategory }) => {
  return (
    <>
      <button
        className="px-8 py-2 rounded-sm border"
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    </>
  );
};

export default CategoryList;
