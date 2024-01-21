import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai';

const ShopLogo = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState([
        "/assets/images/dashboard/profile.jpg",
    ]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Create a preview image URL
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Your upload logic here
            console.log("Uploading file:", selectedFile);
        }
    };


    return (
        <>
            <div className="row mt-4">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Shop Logo</h2>
                            </div>
                            <div className="form-input-body">
                                <div className="upload-shop-logo-item mb-3 upload-btn-wrapper">
                                    {previewImage && (
                                        <div className="user-img-items mb-3">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                style={{ maxWidth: "100%" }}
                                            />
                                        </div>
                                    )}
                                    <button className="upload-btn" onClick={handleUpload}>

                                        Upload Image
                                    </button>
                                    <input type="file" name="image" onChange={handleFileChange} />
                                </div>

                                <button type='submit' className='custom-btn-alt w-100'><span><AiOutlineUpload /></span> Upload Shop Logo</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ShopLogo