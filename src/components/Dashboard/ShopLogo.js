import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai';

const ShopLogo = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
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
                                <div className="shop-logo-item">
                                    <input type="file" onChange={handleImageChange} />
                                    {selectedImage && (
                                        <div>
                                            <p>Preview:</p>
                                            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
                                        </div>
                                    )}
                                </div>

                                <button type='submit' className='custom-btn-alt w-100'><span><AiOutlineUpload  /></span> Upload Shop Logo</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ShopLogo