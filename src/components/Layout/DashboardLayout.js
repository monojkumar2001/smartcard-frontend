import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashboardHeader from './DashboardHeader'


const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="dashboard-wrapper">
        <aside className="left-sidebar">
          <Sidebar />
        </aside>
        <div className="page-content">
          <div className="dashboard-header">
       <DashboardHeader/>
          </div>
          <div className="dashboard-content">
            {children}
          </div>
          <div className="dashboard-footer">

          </div>
        </div>
      </div>

   
    </>
  )
}

export default DashboardLayout