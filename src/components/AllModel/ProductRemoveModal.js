import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import LayoutModel from "./LayoutModal";

const ProductRemoveModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className="denger-btn custom-btn-alt">
      Remove from Product
      </div>
      <LayoutModel isOpen={isModalOpen} onClose={closeModal}>
        <div className="model-content-wrapper">
          <form action="">
            <p className="text-center mb-3">
            Do you want to delete the inventory Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ?
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

export default ProductRemoveModal;


