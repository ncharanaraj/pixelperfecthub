import React from "react";

const BlurContainer = ({ children, classNames = [] }) => {
  const containerClasses = [
    "border",
    "p-3",
    "rounded-md",
    "bg-[#D9D9D91D]",
    "shadow-[box-shadow: -3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset;]",
    "backdrop-blur-[25.034873962402344px]",
    ...classNames,
  ];

  return <div className={containerClasses.join(" ")}>{children}</div>;
};

export default BlurContainer;
