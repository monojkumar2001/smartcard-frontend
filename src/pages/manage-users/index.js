import React from 'react'
import { IoMdPersonAdd } from "react-icons/io";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import AddShopUserModal from '../../components/AllModel/AddShopUserModal';
const manageUsersPage = () => {
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="manage-user-wrapper ">
                    <div className="reports-header d-flex align-items-center justify-content-between gap-3">
                        <h3 className='reports-header-title'>Manage Users & Permissions</h3>
                        <AddShopUserModal/>
                    </div>
                    <ul className="manage-user-body">
                        <li className='manage-user-item'>
                            <div className="manage-user-left">
                                <div className="manage-user-img">
                                    <img src="/assets/images/dashboard/profile.jpeg" alt="" />
                                </div>
                                
                                <div className="manage-user-content">
                                    <h4>Unnamed User (You)</h4>
                                    <span>monoj93roy@gmail.com</span>
                                </div>
                                <div className="manage-user-btn">
                                    <button >Shop Owner</button>
                                </div>
                            </div>
                            <div className="manage-user-right">
                                <button className='custom-btn-alt' disabled>Remove</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
manageUsersPage.layout = DashboardLayout;
export default manageUsersPage