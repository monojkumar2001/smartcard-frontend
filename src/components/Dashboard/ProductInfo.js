import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const ProductInfo = () => {
    const [status, setStatus] = useState('active');

    const toggleStatus = () => {
        setStatus((prevStatus) => (prevStatus === 'active' ? 'inactive' : 'active'));
    };
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Product Info</h2>
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
                                <div className="row">
                                    <div className="col-md-11">
                                        <div className="form-input-item">
                                            <label htmlFor="">Category</label>
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Select Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <button className='custom-btn-alt'><span><IoMdAdd /></span></button>
                                    </div>
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
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="product-status-con">
                                            <h3 className='product_shop_title'> Product Status</h3>
                                            <div className="product-status-item">
                                                <button onClick={toggleStatus}>Toggle Status</button>

                                                {/* Conditional rendering based on status */}
                                                {status === 'active' ? (
                                                    <p>active.</p>
                                                ) : (
                                                    <p>inactive.</p>
                                                )}
                                            </div>
                                        </div>
                                        <p>Toggle the switch to 'On' if you want the product to be displayed and available for purchase on your ecommerce website. When the switch is 'On' (active), the product will be visible to customers. To temporarily hide the product, simply switch it 'Off' (inactive).</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="product-details">
                                            <h3 className='product_shop_title'>Product Details</h3>
                                            <p>You can add multiple product details for a single product here. Like Brand, Model, Serial Number, Fabric Type, and EMI etc.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-input-item">
                                                    <label htmlFor="detail_type">Detail Type</label>
                                                    <input type="text" name='detail_type' id='detail_type' placeholder='detail_type' />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-input-item">
                                                    <label htmlFor="detail_description">Detail Description</label>
                                                    <input type="text" name='detail_description' id='detail_description' placeholder='Detail Type' />
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <span className='detail_danger'><IoCloseSharp /></span>
                                            </div>
                                        </div>
                                        <button>
                                            <span><IoMdAdd />   Add a new Field</span>
                                        </button>
                                    </div>
                                </div>
                                <button type='submit' className=''>Add Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div></>
    )
}

export default ProductInfo