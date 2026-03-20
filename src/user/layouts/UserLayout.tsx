import { Outlet } from 'react-router'

export const UserLayout = () => {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased flex flex-col overflow-hidden"> 
        <Outlet />
    </div>
  )
}
