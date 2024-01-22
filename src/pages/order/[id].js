import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
const orderDetailsPage = () => {
    return (
        <>
            <div className="dashboard-content-wrapper">
                <form action="">
                <div className="category-header d-flex align-items-center justify-content-between gap-3">
                    <h3 className="dasbhoard-header-title">Serial: <span>1</span></h3>
                    <h3 className="dasbhoard-header-title">Bill ID: #<span>22403</span></h3>
                </div>
                <div className="form-input-wrapper mt-4">
                    <div className="form-input-header">
                        <h2>Receipt Items</h2>
                    </div>
                    <div className="form-input-body">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="order-card-item">
                                    <div className="order-card-img">
                                        <img src="/assets/images/product/order-img.webp" alt="" />
                                    </div>
                                    <div className="order-card-content">
                                        <div className="form-input-item">
                                            <label htmlFor="item_name">Item Name</label>
                                            <input type="text" name='item_name' id='item_name' placeholder='Item Name' required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_unit_price">Item Unit Price</label>
                                                    <input type="text" name='item_unit_price' id='item_unit_price' required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_net_price">Item Net Price</label>
                                                    <input type="text" name='item_net_price' id='item_net_price' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-item">
                                            <label htmlFor="warranty">Warranty</label>
                                            <input type="text" name='warranty' id='warranty' required />
                                        </div>
                                    </div>
                                    <div className="order-card-count">
                                        <button><GrFormSubtract /></button>
                                        <span>2</span>
                                        <button><IoMdAdd /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="order-card-item">
                                    <div className="order-card-img">
                                        <img src="/assets/images/product/order-img.webp" alt="" />
                                    </div>
                                    <div className="order-card-content">
                                        <div className="form-input-item">
                                            <label htmlFor="item_name">Item Name</label>
                                            <input type="text" name='item_name' id='item_name' placeholder='Item Name' required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_unit_price">Item Unit Price</label>
                                                    <input type="text" name='item_unit_price' id='item_unit_price' required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_net_price">Item Net Price</label>
                                                    <input type="text" name='item_net_price' id='item_net_price' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-item">
                                            <label htmlFor="warranty">Warranty</label>
                                            <input type="text" name='warranty' id='warranty' required />
                                        </div>
                                    </div>
                                    <div className="order-card-count">
                                        <button><GrFormSubtract /></button>
                                        <span>2</span>
                                        <button><IoMdAdd /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="order-card-item">
                                    <div className="order-card-img">
                                        <img src="/assets/images/product/order-img.webp" alt="" />
                                    </div>
                                    <div className="order-card-content">
                                        <div className="form-input-item">
                                            <label htmlFor="item_name">Item Name</label>
                                            <input type="text" name='item_name' id='item_name' placeholder='Item Name' required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_unit_price">Item Unit Price</label>
                                                    <input type="text" name='item_unit_price' id='item_unit_price' required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-input-item">
                                                    <label htmlFor="item_net_price">Item Net Price</label>
                                                    <input type="text" name='item_net_price' id='item_net_price' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-item">
                                            <label htmlFor="warranty">Warranty</label>
                                            <input type="text" name='warranty' id='warranty' required />
                                        </div>
                                    </div>
                                    <div className="order-card-count">
                                        <button><GrFormSubtract /></button>
                                        <span>2</span>
                                        <button><IoMdAdd /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-input-wrapper mt-4" >
                    <div className="form-input-header">
                        <h2>Order Summary</h2>
                    </div>
                    <div className="form-input-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className='order-card-title-item'>Discount</h3>
                                <div className="form-input-item">
                                    <label htmlFor="">Percentage (%)</label>
                                    <input type="text" name='' id='' />
                                </div>
                                <div className="form-input-item">
                                    <label htmlFor="">Amount</label>
                                    <input type="text" name='' id='' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className='order-card-title-item'>VAT/TAX</h3>
                                <div className="form-input-item">
                                    <label htmlFor="">Percentage (%)</label>
                                    <input type="text" name='' id='' />
                                </div>
                                <div className="form-input-item">
                                    <label htmlFor="">Amount</label>
                                    <input type="text" name='' id='' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className='order-card-title-item'>Delivery</h3>
                                <div className="form-input-item">
                                    <label htmlFor="">Delivery Zone</label>
                                    <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                                        <option selected>Not Selected</option>
                                        <option value="1">Others</option>
                                    </select>
                                </div>
                                <div className="form-input-item">
                                    <label htmlFor="">Delivery Charge</label>
                                    <input type="text" name='' id='' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className='order-card-title-item'>Payment</h3>
                                <div className="form-input-item">
                                    <label htmlFor="">Status</label>
                                    <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                                        <option selected>Not Fully Paid</option>
                                        <option value="1">Fully Paid</option>
                                    </select>
                                </div>
                                <div className="form-input-item">
                                    <label htmlFor="">Paid Amount</label>
                                    <input type="text" name='' id='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-input-footer form-input-header">
                        <h3 className='form-input-due-amount'>Due Amount: BDT 24</h3>
                        <h2 className='form-input-Grand'>Grand Total: BDT 72</h2>
                    </div>
                </div>
                <div className="form-input-wrapper mt-4" >
                    <div className="form-input-header">
                        <h2>Order Information</h2>
                    </div>
                    <div className="form-input-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-input-item">
                                    <label htmlFor="">Order Type</label>
                                    <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                                        <option selected>In Shop</option>
                                        <option value="1">Online</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input-item">
                                    <label htmlFor="">Order Status</label>
                                    <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                                        <option selected>Order Placed</option>
                                        <option value="1">Order Cancelled</option>
                                        <option value="1">Order Completed</option>
                                        <option value="1">Order Delivered</option>
                                        <option value="1">Order Confirmed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-input-wrapper mt-4" >
                    <div className="form-input-header">
                        <h2>Customer Information</h2>
                    </div>
                    <div className="form-input-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-input-item">
                                    <label htmlFor="customer_name">Customer Name</label>
                                    <input type="text" name='customer_name' id='customer_name' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-input-item">
                                    <label htmlFor="customer_email">Customer Email</label>
                                    <input type="email" name='customer_email' id='customer_email' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-input-item">
                                    <label htmlFor="customer_phone">Customer Phone</label>
                                    <input type="email" name='customer_phone' id='customer_phone' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="form-input-item">
                                    <label htmlFor="customer_address">Customer Address</label>
                                    <input type="text" name='customer_address' id='customer_address' />
                                </div>
                            <div className="form-input-item">
                                    <label htmlFor="order_notes">Order Notes</label>
                                    <textarea name='order_notes' id='order_notes' cols="30" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="order-update-all-btn d-flex align-items-center gap-3 justify-content-end mt-5 mb-3 ">
                    <button className='custom-btn-alt'>Save Order</button>
                    <button className='custom-btn-alt'>Download Recepit</button>
                </div>
                </form>
            </div>
            
        </>
    )
}
orderDetailsPage.layout = DashboardLayout;
export default orderDetailsPage
