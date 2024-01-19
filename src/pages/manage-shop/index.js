import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import UpdateShopInfoForm from '../../components/Dashboard/UpdateShopInfoForm';
import ShopSettingsForm from '../../components/Dashboard/ShopSettingsForm';
import ShopQR from '../../components/Dashboard/ShopQR';
import { AiOutlineUpload } from "react-icons/ai";
const ManageShopPage = () => {
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="row">
                    <div className="col-md-9">
                        <UpdateShopInfoForm />
                        <ShopSettingsForm />
                    </div>
                    <div className="col-md-3">
                        <ShopQR />
                        <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="form-input-wrapper">
                                        <div className="form-input-header">
                                            <h2>Shop QR</h2>
                                        </div>
                                        <div className="form-input-body">
                                            <div className="shop-logo-item">
                                                <input type="file" />
                                            </div>

                                            <button type='submit' className='custom-btn-alt'><span><AiOutlineUpload /></span> Upload Shop Logo</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="form-input-wrapper">
                                        <div className="form-input-header">
                                            <h2>Shop Theme</h2>
                                        </div>
                                        <div className="form-input-body">
                                            <div className="shop-logo-item">
                                                <input type="color" />
                                            </div>

                                            <button type='submit' className='custom-btn-alt'><span><AiOutlineUpload /></span> Save theme</button>
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
ManageShopPage.layout = DashboardLayout;
export default ManageShopPage