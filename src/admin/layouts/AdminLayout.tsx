import React from 'react'
import { AdminDashboard } from '../pages/AdminDashboard'
import { AdminHeader } from '../components/AdminHeader'
import { AdminSidebar } from '../components/AdminSidebar'

export const AdminLayout = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark text-text-dark dark:text-slate-100 font-display antialiased min-h-screen flex overflow-hidden">
        <AdminSidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <AdminHeader />
        <AdminDashboard/>   


        </div>

    </div>
  )
}
