import React from "react";

const Figure = ({ previewURL, tags }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="rounded-md bg-slate-400 h-48 w-96">
        {/*wrap Link arount it */}
        <img
          src={previewURL}
          alt=""
          className="object-cover rounded-md w-full h-full"
        />
      </div>
      <div className="flex gap-2 ">
        {tags.split(",").map((tag, index) => (
          <div key={index} className="bg-gray-100 px-2 rounded-sm text-sm ">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figure;
