import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai';

const ShopColor = () => {
    const [selectedColor, setSelectedColor] = useState('#7922e6'); // Initial color is black

    const handleColorChange = (e) => {
      setSelectedColor(e.target.value);
    };
  
  return (
    <>
              <div className="row mt-4">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="form-input-wrapper">
                                        <div className="form-input-header">
                                            <h2 style={{color:selectedColor}}>Shop Theme</h2>
                                        </div>
                                        <div className="form-input-body">
                                            <div className="shop-color-item">
                                                <input type="color" value={selectedColor} onChange={handleColorChange}  />
                                            </div>

                                            <button type='submit' className='custom-btn-alt w-100' style={{background:selectedColor}}><span><AiOutlineUpload /></span> Save theme</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
</>
  )
}

export default ShopColor