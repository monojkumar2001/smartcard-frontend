import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import ProductRemoveModal from '../AllModel/ProductRemoveModal';
import CreateCategoryModal from '../AllModel/CreateCategoryModal';
const EditProductInfo = () => {
    const [status, setStatus] = useState('active'); // Set the initial status to 'active'

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };


    const [fields, setFields] = useState([{ detail_type: '', detail_description: '' }]);

    const handleInputChange = (index, fieldName, value) => {
      const newFields = [...fields];
      newFields[index][fieldName] = value;
      setFields(newFields);
    };
  
    const handleAddField = () => {
      setFields([...fields, { detail_type: '', detail_description: '' }]);
    };
  
    const handleRemoveField = (index) => {
      const newFields = [...fields];
      newFields.splice(index, 1);
      setFields(newFields);
    };
  
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header d-flex align-items-center justify-content-between gap-3">
                                <h2>Product Info</h2>
                                <ProductRemoveModal/>
                            </div>
                            <div className="form-input-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="item_name">Item Name</label>
                                            <input type="text" name='item_name' id='item_name' placeholder='Item Name' required />
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-end mb-3 justify-content-between gap-2">
                                    <div className="category-product-item">
                                        <div className="form-input-item">
                                            <label htmlFor="">Category</label>
                                            <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                                <option selected>Select Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                    </div>
                                    <CreateCategoryModal/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="current_price">Sell/Current Price</label>
                                            <input type="text" name='current_price' id='current_price' placeholder='Sell/Current Price' required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="old_price">Regular/Old Price</label>
                                            <input type="text" name='old_price' id='old_price' placeholder='Regular/Old Price' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="buy_price">Buying Price (Optional)</label>
                                            <input type="text" name='buy_price' id='buy_price' placeholder='Buying Price (Optional)' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="product_code">Product Code</label>
                                            <input type="text" name='product_code' id='product_code' placeholder='Product Code' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="quantity">Quantity (Stock)</label>
                                            <input type="number" name='quantity' id='quantity' placeholder='Quantity (Stock)' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="warranty">Warranty</label>
                                            <input type="text" name='warranty' id='warranty' placeholder='Warranty' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="shop_details">Shop Details</label>
                                            <textarea name="shop_details" id="shop_details" cols="30" rows="5" placeholder='Enter your Shop Details'></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="product-status-con mb-4 ">
                                            <h3 className='product_shop_title'> Product Status</h3>
                                            <div className="product-status-item">
                                                    <select
                                                        className="form-select form-select-lg"
                                                        aria-label=".form-select-lg example"
                                                        value={status}
                                                        onChange={handleStatusChange}
                                                    >
                                                        <option value='1'>Active</option>
                                                        <option value='2'>Inactive</option>
                                                    </select>
                                            </div>
                                        </div>
                                        <p>Toggle the switch to 'On' if you want the product to be displayed and available for purchase on your ecommerce website. When the switch is 'On' (active), the product will be visible to customers. To temporarily hide the product, simply switch it 'Off' (inactive).</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="product-details">
                                            <h3>Product Details</h3>
                                            <p>You can add multiple product details for a single product here. Like Brand, Model, Serial Number, Fabric Type, and EMI etc.</p>
                                        </div>
                                        {fields.map((field, index) => (
        <div className="d-flex gap-3 my-3 align-items-end w-100 justify-content-between" key={index}>
          <div className="form-input-item mb-0">
            <label htmlFor={`detail_type_${index}`}>Detail Type</label>
            <input
              type="text"
              name={`detail_type_${index}`}
              id={`detail_type_${index}`}
              placeholder='detail_type'
              value={field.detail_type}
              onChange={(e) => handleInputChange(index, 'detail_type', e.target.value)}
            />
          </div>
          <div className="form-input-item mb-0">
            <label htmlFor={`detail_description_${index}`}>Detail Description</label>
            <input
              type="text"
              name={`detail_description_${index}`}
              id={`detail_description_${index}`}
              placeholder='Detail Description'
              value={field.detail_description}
              onChange={(e) => handleInputChange(index, 'detail_description', e.target.value)}
            />
          </div>
          <button className='detail_danger' onClick={() => handleRemoveField(index)}>
            <IoCloseSharp />
          </button>
        </div>
      ))}
                                        <button className='custom-btn-alt' onClick={handleAddField}>
        <span><IoMdAdd /></span>
        Add a new Field
      </button>
                                    </div>
                                </div>
                                <button type='submit' className='custom-btn-alt mt-4 w-100'>Add Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div></>
    )
}

export default EditProductInfo