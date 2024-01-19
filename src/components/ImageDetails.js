import { CheckCircle2, Circle, XSquare } from "lucide-react";
import React, { useState } from "react";
import Badge from "./Badge";
import { formatTags } from "../utils/formatTags";
import { getImageURL } from "../utils/getImageURL";
import { imageDownloader } from "../utils/imageDownloader ";

const SizeSelector = ({
  size,
  width,
  height,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div
      className="flex border-b-2 p-2 cursor-pointer hover:bg-green-200"
      onClick={() => setSelectedSize(size)}
    >
      <p className="flex-1">{size}</p>
      <p className="mr-4">{`${width}x${height}`}</p>
      {selectedSize !== size ? (
        <Circle strokeWidth={"1px"} color="gray" />
      ) : (
        <div className="bg-green-400 rounded-full">
          <CheckCircle2 color="white" />
        </div>
      )}
    </div>
  );
};

const Info = ({ title, description }) => {
  return (
    <div>
      <h6 className="font-thin">{title}</h6>
      <p className="font-medium">{description}</p>
    </div>
  );
};

const ImageDetails = ({
  setShowModal,
  id,
  webformatURL,
  tags,
  user,
  user_id,
  type,
  views,
  downloads,
  likes,
  previewWidth,
  previewHeight,
  imageWidth,
  imageHeight,
  webformatWidth,
  webformatHeight,
  largeImageURL,
  previewURL,
}) => {
  const tagsList = formatTags(tags);
  const [selectedSize, setSelectedSize] = useState("Small");

  const imageSizeURL = getImageURL(
    selectedSize,
    previewURL,
    webformatURL,
    largeImageURL
  );

  return (
    <div className="w-3/4 h-3/4  bg-white rounded-lg">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <p>Preview ID: {id} </p>
        <XSquare onClick={() => setShowModal(false)} />
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <div className="w-3/4">
            <img src={webformatURL} alt="" className="rounded-lg" />
          </div>
          <div className="w-1/4">
            <div>
              <h3>Download</h3>
              <div>
                <div className="border rounded-md">
                  <SizeSelector
                    size="Small"
                    width={previewWidth}
                    height={previewHeight}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <SizeSelector
                    size="Medium"
                    width={webformatWidth}
                    height={webformatHeight}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <SizeSelector
                    size="Big"
                    width={imageWidth}
                    height={imageHeight}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                </div>

                <button
                  onClick={() => imageDownloader(imageSizeURL, "Image")}
                  className="bg-[#487d48] py-2 px-4 rounded-sm text-white text-xs"
                >
                  Download for free!
                </button>
              </div>
            </div>
            <div>
              <h3>Information</h3>
              <div className="flex flex-wrap gap-2">
                <Info title="User" description={user} />
                <Info title="User ID" description={user_id} />
                <Info title="Type" description={type} />
                <Info title="Views" description={views} />
                <Info title="Downloads" description={downloads} />
                <Info title="Likes" description={likes} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center py-2">
          Tags:{" "}
          {tagsList &&
            tagsList.map(({ id, name }) => <Badge key={id} tag={name} />)}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
