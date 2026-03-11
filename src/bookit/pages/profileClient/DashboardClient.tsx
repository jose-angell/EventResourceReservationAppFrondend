import { Link, Outlet,useLocation } from "react-router";



const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Panel Principal' },
  { path: '/dashboard/orders', icon: 'list_alt', label: 'Mis Pedidos' },
  { path: '/dashboard/profile', icon: 'person', label: 'Editar Perfil' },
  { path: '/dashboard/security', icon: 'security', label: 'Seguridad' },
  { path: '/dashboard/payment-methods', icon: 'credit_card', label: 'Métodos de Pago' },
  { path: '/dashboard/history', icon: 'history', label: 'Historial de Actividad' },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface-light text-brand-text-dark">
      {/* Header (Simplified for Dashboard) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 h-16 shrink-0">
        <div className="h-full px-6 flex items-center justify-between max-w-480 mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 text-brand-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">celebration</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-brand-text-dark">BookIt</h1>
          </Link>
          <div className="flex items-center gap-4">
            <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 size-2.5 bg-brand-alert rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="size-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                JG
              </div>
              <span className="text-sm font-semibold text-brand-text-dark hidden sm:block">José Gallardo</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden max-w-[1920px] mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex overflow-y-auto">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Mi Cuenta</h2>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-brand-primary/10 text-brand-primary' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="p-6 mt-auto">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-brand-alert hover:bg-brand-alert/10 transition-colors w-full">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-brand-surface-light p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}