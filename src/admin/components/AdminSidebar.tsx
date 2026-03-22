import { BarChart3, CalendarDays, LayoutDashboard, Package, PartyPopper, User, Users } from 'lucide-react'
import { Link } from 'react-router'

export const AdminSidebar = () => {
  return (
    <>
        <aside className="w-64 bg-background-dark text-white flex-shrink-0 flex-col transition-all duration-300 z-30 hidden lg:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="size-8 text-secondary flex items-center justify-center">
              <PartyPopper className="size-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">BookIt Admin</h1>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <Link to={'/admin'} className="flex items-center gap-3 px-3 py-2.5 bg-primary/20 text-secondary rounded-lg font-medium transition-colors">
            <LayoutDashboard className="size-5" /> Dashboard
          </Link>
          <Link to={'/admin/produts'} className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <Package className="size-5" /> Inventario
          </Link>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <CalendarDays className="size-5" /> Reservas
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <Users className="size-5" /> Clientes
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <BarChart3 className="size-5" /> Reportes
          </a>
        </nav>

        <div className="p-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-slate-700 flex items-center justify-center">
              <User className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-400">admin@bookit.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
