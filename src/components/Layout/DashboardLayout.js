import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashboardHeader from './DashboardHeader'


const DashboardLayout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <aside
          className={`${
            sidebarActive ? "active left-sidebar" : "left-sidebar"
          }`}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </aside>
        <div className="page-content">
          <div className="dashboard-header">
            <DashboardHeader toggleSidebar={toggleSidebar} />
          </div>
          <div className="dashboard-content">
            {children}
            <div className="dashboard-footer d-flex align-items-center justify-content-center my-5">
            <p>2023@atly. All rights reserved</p>
          </div>
          </div>
       
          <div className="dashboard-content">{children}</div>
          <div className="dashboard-footer"></div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout