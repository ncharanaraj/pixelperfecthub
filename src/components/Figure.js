import React, { useState } from "react";
import Modal from "./Modal";
import Badge from "./Badge";
import ImageDetails from "./ImageDetails";
import { formatTags } from "../utils/formatTags";
import { useGetImageData } from "../hooks/useGetImageData";

const Figure = ({ id, previewURL, tags }) => {
  const [showModal, setShowModal] = useState(false);
  const { imageData, loading, getImageDetails } = useGetImageData();
  const tagsList = formatTags(tags);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="rounded-md bg-slate-400 h-48 w-96">
        <img
          src={previewURL}
          alt=""
          className="object-cover rounded-md w-full h-full"
          onClick={() => {
            setShowModal(true);
            getImageDetails(id);
          }}
        />
      </div>
      <div className="flex gap-2 capitalize">
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
    </div>
  );
};

export default Figure;
