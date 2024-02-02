import React, { useState } from "react";
import Modal from "./Modal";
import Badge from "./Badge";
import ImageDetails from "./ImageDetails";
import { formatTags } from "../utils/formatTags";
import { useGetImageData } from "../hooks/useGetImageData";

const Figure = ({ id, previewURL, webformatURL, tags }) => {
  const [showModal, setShowModal] = useState(false);
  const { imageData, loading, getImageDetails } = useGetImageData();
  const tagsList = formatTags(tags);

  return (
    <>
      <div>
        <img
          src={webformatURL}
          alt=""
          className="w-full rounded-lg"
          onClick={() => {
            setShowModal(true);
            getImageDetails(id);
          }}
        />
      </div>
      <div className="flex gap-2 capitalize my-2">
        {tagsList.map(({ id, name }) => (
          <Badge key={id} tag={name} />
        ))}
      </div>
      <div>
        {showModal && imageData && (
          <Modal>
            <ImageDetails setShowModal={setShowModal} {...imageData} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Figure;
