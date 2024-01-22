import React, { useState } from 'react'
import LayoutModal from './LayoutModal';

const CustomDateRangeModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* <div onClick={openModal} className="custom-btn-alt create-category-btn">
        New Category
      </div> */}
            <div className="option" onClick={openModal} >
                Custom Date Range
            </div>
            <LayoutModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="model-content-wrapper">
                    <form action="">
                        <h1 className="model-item-title">Set Date Range</h1>
                     <div className="row">
                        <div className="col-md-6">
                        <div className="form-input-item">
                            <label htmlFor="from_date">From Date</label>
                            <input
                                type="date"
                                name="from_date"
                                id="from_date"
                                required
                            />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-input-item">
                            <label htmlFor="to_date">To Date</label>
                            <input
                                type="date"
                                name="to_date"
                                id="to_date"
                                required
                            />
                        </div>
                        </div>
                     </div>
                        <div className="model-btn-items mt-2">
                            <button className="custom-btn-alt">Apply Date Range</button>
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

export default CustomDateRangeModal