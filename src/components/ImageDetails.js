import React, { useState } from "react";
import Badge from "./Badge";
import { formatTags } from "../utils/formatTags";
import { getImageURL } from "../utils/getImageURL";
import { imageDownloader } from "../utils/imageDownloader ";
import { CheckCircle2, Circle, XSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

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
    <div className="w-1/4">
      <h6 className="font-thin">{title}</h6>
      <p className="font-bold">{description}</p>
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
  const { token } = useAuth;
  const navigate = useNavigate();

  const imageSizeURL = getImageURL(
    selectedSize,
    previewURL,
    webformatURL,
    largeImageURL
  );

  const handleDownload = () => {
    token ? imageDownloader(imageSizeURL, "Image") : navigate("/login");
  };

  return (
    <div className=" bg-white rounded-lg  w-full md:max-w-3xl md:h-auto h-full relative md:overflow-auto overflow-y-scroll">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <p>Preview ID: {id} </p>
        <XSquare onClick={() => setShowModal(false)} />
      </div>
      <div className="p-4 ">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-1/2">
            <img src={webformatURL} alt="" className="rounded-lg max-w-full" />
            <div className="flex gap-2 items-center py-2">
              Tags:{" "}
              {tagsList &&
                tagsList.map(({ id, name }) => <Badge key={id} tag={name} />)}
            </div>
          </div>
          <div className="md:w-1/2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Download</h3>
              <div className="flex flex-col gap-4">
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
                  onClick={handleDownload}
                  className="bg-[#487d48] py-2 px-4 rounded-sm text-white text-xs "
                >
                  Download for free!
                </button>
              </div>
            </div>
            <div className="my-4 w-full">
              <h3 className="mb-2 text-lg font-semibold">Information</h3>
              <div className="flex flex-wrap gap-2 justify-between">
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
      </div>
    </div>
  );
};

export default ImageDetails;
