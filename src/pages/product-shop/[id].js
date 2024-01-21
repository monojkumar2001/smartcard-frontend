import React, { useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';

import { LuImagePlus } from "react-icons/lu";
import { IoCloseSharp } from 'react-icons/io5';
import EditProductInfo from '../../components/Dashboard/EditProductInfo';

const EditProductShopPage = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // Update state with new images
        setImages([...images, ...files]);
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);

        // Update state with remaining images
        setImages(newImages);
    };

    return (
        <>
            <div className="dashboard-content-wrapper">
                <h2 className='dasbhoard-header-title'>Edit Product</h2>
                <div className="row">
                    <div className="col-md-8">
                        <EditProductInfo />
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="form-input-wrapper">
                                        <div className="form-input-header">
                                            <h2>Product Images</h2>
                                        </div>
                                        <div className="form-input-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                               
                                                    <div className="product-upload-img">
                                            
                                                        <div className="upload-btn-wrapper">
                                                            <button className="upload-btn"> <span><LuImagePlus /></span>Upload Image</button>
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                accept="image/*"
                                                                onChange={handleImageChange}
                                                                multiple
                                                            />
                                                        </div>
                                                        <div className="product-upload-img-card">
                                                    {images.map((image, index) => (
                                                            <div key={index} className="uploaded-image-container">
                                                                <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} />
                                                                <button onClick={() => handleRemoveImage(index)} className='uploaded-image-remove'><IoCloseSharp /></button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type='submit' className='custom-btn-alt mt-2 w-100'>Update Delivery Charge </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
EditProductShopPage.layout = DashboardLayout;
export default EditProductShopPage