import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { statusText } = useRouteError();

  return (
    <div className="flex flex-col items-center h-screen w-screen mt-8">
      <h2 className="text-6xl font-bold">{statusText}</h2>
      <img src="/assets/pageNotFound.svg" />
    </div>
  );
};

export default Error;
