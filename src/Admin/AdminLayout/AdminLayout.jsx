import React from 'react'
import { Outlet } from 'react-router-dom'
import './AdminLayout.css'
import AdminSidebar from '../AdminSideBar/AdminSidebar'
import AdminHeader from '../AdminHeader/AdminHeader'

const AdminLayout = () => {
  return (
    <div className="userLayoutBody">
      <div className="sidebar">
        <AdminSidebar />
      </div>
      <div className="otherSide">
        <div className="userLayoutHeader">
          <AdminHeader />
        </div>
        <div className="holder">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout