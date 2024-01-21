import React, { useState } from 'react'
import { IoMdPersonAdd } from 'react-icons/io';
import LayoutModal from './LayoutModal';

const AddShopUserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={openModal} className="custom-btn-alt">
        <span><IoMdPersonAdd /> </span>
        Add User
      </div>
      <LayoutModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="model-content-wrapper">
          <form action="">
            <h1 className="model-item-title">Add shop users</h1>
            <div className="row mt-3">
              <div className="col-md-7">
                <div className="form-input-item">
                  <input
                    type="text"
                    name="email_or_phone"
                    id="email_or_phone"
                    placeholder="Email or Phone"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-input-item">
                  <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                    <option selected>Select Role</option>
                    <option value="1">Shop Manager</option>
                    <option value="2">Shop Staff</option>

                  </select>
                </div>
              </div>
            </div>
            <div className="model-btn-items mt-3">
              <button className="custom-btn-alt">Add</button>
              <button className="close-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </LayoutModal>
    </>
  )
}

export default AddShopUserModal