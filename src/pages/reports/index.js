import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { FiUsers } from 'react-icons/Fi';

const ReportsPage = () => {
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="reports-header d-flex align-items-center justify-content-between gap-3 mb-4">
                    <h3 className='dasbhoard-header-title'>Order Report</h3>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>This Month</li>
                            <li>This Month</li>
                            <li>Custom Date Range</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="order-sale-item-con">
                            <div className="order-sale-item">
                                <p>Total Amount</p>
                                <h3>BDT 0</h3>
                            </div>
                            <div className="order-sale-item">
                                <span><FaMoneyBillWave /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="order-sale-item-con">
                            <div className="order-sale-item">
                                <p>Total Sales</p>
                                <h3>3</h3>
                                <small>1 Jan - 31 Jan</small>
                            </div>
                            <div className="order-sale-item">
                                <span><MdDateRange /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="order-sale-item-con">
                            <div className="order-sale-item">
                                <p>Total Item Sales</p>
                                <h3>9</h3>
                            </div>
                            <div className="order-sale-item">
                                <span><FiUsers /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="order-sale-item-con">
                            <div className="order-sale-item">
                                <p>Total Customer Served</p>
                                <h3>9</h3>
                            </div>
                            <div className="order-sale-item">
                                <span><FiUsers /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">

                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Orders (<span>3</span>)</h2>
                            </div>
                            <div className="form-input-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="reports-card-item">
                                            <div className="reports-card-list">
                                                <p>#2</p>
                                                <p>19/01/2024 | 02:11 AM</p>
                                            </div>
                                            <div className="reports-card-list">
                                                <p>Items: 1</p>
                                                <p>Price: 384</p>
                                            </div>
                                            <div className="reports-btns mt-2  ">
                                            <button className='online-btn'>Online</button>

                                                    <button className='completed-btn'>Order Completed</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
ReportsPage.layout = DashboardLayout;
export default ReportsPage