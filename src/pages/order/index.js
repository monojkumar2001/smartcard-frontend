import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';

const OrderPage = () => {
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-input-item">
                            <label htmlFor="deliveryt_charge">Select Order Type</label>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>All</option>
                                <option value="1">In Shop</option>
                                <option value="2">Online</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-input-item">
                            <label htmlFor="deliveryt_charge">Select Order Status</label>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>All</option>
                                <option value="1">Order Placed</option>
                                <option value="1">Order Cancelled</option>
                                <option value="1">Order Completed</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
OrderPage.layout = DashboardLayout;
export default OrderPage