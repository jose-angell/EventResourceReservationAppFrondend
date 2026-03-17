import { Outlet } from "react-router"
import { Header } from "../Components/Haeder"


export const BookitLayout = () => {
  return (
    <div className="bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased h-screen flex flex-col overflow-hidden">
          <Header />
          <main className="flex flex-1 h-[calc(100vh-100px)] overflow-hidden">
          <Outlet />
           
          </main>
        </div>
  )
}
