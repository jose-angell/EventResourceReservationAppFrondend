import { Outlet } from "react-router"
import { Header } from "../components/Haeder"
import { Footer } from "../components/Footer"


export const BookitLayout = () => {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased flex flex-col overflow-hidden">
      <Header />
      <main className="flex flex-1 h-[calc(100vh-100px)] overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
