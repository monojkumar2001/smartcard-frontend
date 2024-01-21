import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import LayoutModel from "./LayoutModal";

const DeleteCategoryModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="category-delete-btn">
        <RiDeleteBin6Line />{" "}
      </button>
      <LayoutModel isOpen={isModalOpen} onClose={closeModal}>
        <div className="model-content-wrapper">
          <form action="">
            <p className="text-center mb-3">
              Do you want to delete the category js?
            </p>
            <div className="model-btn-items">
              <button className="custom-btn-alt">Proceed</button>
              <button className="close-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </LayoutModel>
    </>
  );
};

export default DeleteCategoryModal;
