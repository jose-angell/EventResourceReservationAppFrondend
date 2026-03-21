import {LayoutDashboard, Shield, CreditCard, History, LogOut, ShoppingBag, } from 'lucide-react'
import { Link } from 'react-router'

export const UserSidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Mi Cuenta</h2>
            <nav className="space-y-1">
              <Link to={"/user"} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold transition-colors">
                <LayoutDashboard className="size-5" />
                <span>Mi Panel</span>
              </Link>
              <Link to={"/user/user-orders"} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <ShoppingBag className="size-5 group-hover:text-primary transition-colors" />
                <span>Mis Pedidos</span>
              </Link>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <Shield className="size-5 group-hover:text-primary transition-colors" />
                <span>Seguridad</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <CreditCard className="size-5 group-hover:text-primary transition-colors" />
                <span>Métodos de Pago</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <History className="size-5 group-hover:text-primary transition-colors" />
                <span>Historial</span>
              </a>
            </nav>
          </div>
          <div className="mt-auto p-6 border-t border-slate-100 dark:border-slate-800">
            <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-alert hover:bg-alert/5 transition-colors">
              <LogOut className="size-5" />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </aside>
  )
}
