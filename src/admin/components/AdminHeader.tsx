import { Bell, Menu } from 'lucide-react'


export const AdminHeader = () => {
  return (
    <>
         <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 h-16 shrink-0 flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
              <Menu className="size-5" />
            </button>
            <div className="font-bold text-lg dark:text-white">BookIt</div>
          </div>
          
          <h2 className="text-xl font-bold text-text-dark dark:text-white hidden lg:block">Panel de Administración</h2>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
              <Bell className="size-5" />
              <span className="absolute top-1.5 right-1.5 size-2 bg-accent rounded-full border border-white dark:border-surface-dark"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">AD</div>
            </div>
          </div>
        </header>
    </>
  )
}
