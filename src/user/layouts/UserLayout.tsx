import { Outlet } from 'react-router'
import { UserSidebar } from '../components/UserSidebar'
import { UserHeader } from '../components/UserHeader'

export const UserLayout = () => {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased flex flex-col overflow-hidden">
        <UserHeader/>
        <main className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden max-w-480 mx-auto w-full">
            <UserSidebar />
            <Outlet />
        </main>
    </div>
  )
}
