import React from "react";

const Background = ({ children, classNames = [] }) => {
  const containerClasses = [
    "flex",
    "flex-col",
    "text-white",
    "items-center",
    "p-8",
    "pb-4",
    "gap-12",
    "bg-[url('../public/assets/backgroundImage.jpeg')]",
    "bg-no-repeat",
    "bg-cover",
    "bg-center",
    ...classNames,
  ];
  return <div className={containerClasses.join(" ")}>{children}</div>;
};

export default Background;
