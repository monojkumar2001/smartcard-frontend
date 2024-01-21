import React, { useState } from "react";
import Model from "./Model";

const CreateCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="custom-btn-alt">
        New Category
      </button>
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <div className="model-content-wrapper">
          <form action="">
            <h1 className="model-item-title">New Category</h1>
            <div className="form-input-item">
              <label htmlFor="category_name">Category Name</label>
              <input
                type="text"
                name="category_name"
                id="category_name"
                placeholder="Category Name"
                required
              />
            </div>
            <div className="model-btn-items">
              <button className="custom-btn-alt">Create</button>
              <button className="close-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Model>
    </>
  );
};

export default CreateCategory;
