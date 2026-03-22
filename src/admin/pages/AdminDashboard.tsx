import * as React from "react"
import { 
  PartyPopper, LayoutDashboard, Package, CalendarDays, Users, BarChart3, 
  User, Menu, Bell, TrendingUp, CircleDollarSign, CalendarCheck, 
  UserPlus, AlertTriangle, Info, ChevronLeft, ChevronRight 
} from "lucide-react"

// --- TIPOS E INTERFACES ---
interface KpiStat {
  id: string;
  title: string;
  value: string;
  trendValue: string;
  isPositive: boolean;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  trendIconClass: string;
}

interface Order {
  id: string;
  customerName: string;
  time: string;
  status: "Pendiente" | "Confirmado" | "Cancelado";
}

interface StockAlert {
  id: string;
  item: string;
  message: string;
  type: "critical" | "warning";
}

interface InventoryAvailability {
  id: string;
  name: string;
  percentage: number;
  colorClass: string;
}

// --- DATOS MOCK ---
const KPI_STATS: KpiStat[] = [
  { id: "kpi-1", title: "Ingresos Totales", value: "$128,450", trendValue: "+12.5%", isPositive: true, icon: CircleDollarSign, colorClass: "text-primary", bgClass: "bg-primary/10", trendIconClass: "text-emerald-600" },
  { id: "kpi-2", title: "Reservas Activas", value: "42", trendValue: "+4.3%", isPositive: true, icon: CalendarCheck, colorClass: "text-secondary", bgClass: "bg-secondary/10", trendIconClass: "text-emerald-600" },
  { id: "kpi-3", title: "Nuevos Clientes", value: "156", trendValue: "+8.2%", isPositive: true, icon: UserPlus, colorClass: "text-accent", bgClass: "bg-accent/10", trendIconClass: "text-emerald-600" },
  { id: "kpi-4", title: "Stock Crítico", value: "8", trendValue: "Requiere atención", isPositive: false, icon: AlertTriangle, colorClass: "text-alert", bgClass: "bg-alert/10", trendIconClass: "text-alert" },
];

const RECENT_ORDERS: Order[] = [
  { id: "#4291", customerName: "Ana G.", time: "Hoy, 10:30", status: "Pendiente" },
  { id: "#4290", customerName: "Carlos R.", time: "Ayer, 18:15", status: "Confirmado" },
  { id: "#4289", customerName: "Hotel Lux", time: "Ayer, 14:20", status: "Cancelado" },
  { id: "#4288", customerName: "Sofia M.", time: "22 Oct", status: "Pendiente" },
];

const STOCK_ALERTS: StockAlert[] = [
  { id: "sa-1", item: "Silla Chiavari", message: "5 unidades restantes", type: "critical" },
  { id: "sa-2", item: "Mantelería Blanca", message: "2 unidades restantes", type: "critical" },
  { id: "sa-3", item: "Focos LED", message: "Stock bajo pronto", type: "warning" },
];

const AVAILABILITY: InventoryAvailability[] = [
  { id: "av-1", name: "Sillas Chiavari", percentage: 85, colorClass: "bg-primary" },
  { id: "av-2", name: "Mesas Imperiales", percentage: 45, colorClass: "bg-secondary" },
  { id: "av-3", name: "Equipos de Sonido", percentage: 92, colorClass: "bg-accent" },
];

const CHART_DATA = [
  { month: "Ene", height: "40%", active: false },
  { month: "Feb", height: "55%", active: false },
  { month: "Mar", height: "45%", active: false },
  { month: "Abr", height: "60%", active: false },
  { month: "May", height: "75%", active: false },
  { month: "Jun", height: "90%", active: true }, // Mes actual / destacado
  { month: "Jul", height: "80%", active: false },
  { month: "Ago", height: "65%", active: false },
];

// --- HELPERS ---
const getStatusBadge = (status: Order["status"]) => {
  switch (status) {
    case "Pendiente": return "bg-accent/10 text-accent";
    case "Confirmado": return "bg-secondary/10 text-secondary";
    case "Cancelado": return "bg-alert/10 text-alert";
    default: return "bg-slate-100 text-slate-500";
  }
};

export const AdminDashboard = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark text-text-dark dark:text-slate-100 font-display antialiased min-h-screen flex overflow-hidden">
      
      {/* --- SIDEBAR ADMIN --- */}
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
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-primary/20 text-secondary rounded-lg font-medium transition-colors">
            <LayoutDashboard className="size-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <Package className="size-5" /> Inventario
          </a>
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

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* HEADER ADMIN */}
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

        {/* DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {KPI_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">{stat.value}</h3>
                      <span className={`text-xs font-medium flex items-center mt-1 ${stat.trendIconClass}`}>
                        {stat.isPositive ? <TrendingUp className="size-3.5 mr-1" /> : <AlertTriangle className="size-3.5 mr-1" />}
                        {stat.trendValue}
                      </span>
                    </div>
                    <div className={`p-2 rounded-lg ${stat.bgClass} ${stat.colorClass}`}>
                      <Icon className="size-6" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Grid (Gráfico y Tablas) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column (Chart & Orders) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Ingresos Mensuales (Gráfico de Barras CSS) */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Ingresos Mensuales</h3>
                    <select className="bg-surface-light dark:bg-background-dark border-none text-sm rounded-lg py-1 pl-3 pr-8 focus:ring-1 focus:ring-primary dark:text-white">
                      <option>Este año</option>
                      <option>Año pasado</option>
                    </select>
                  </div>
                  <div className="h-64 flex items-end justify-between gap-2 px-2">
                    {CHART_DATA.map((data, index) => (
                      <div key={index} className="w-full flex flex-col items-center gap-2 group">
                        <div 
                          className={`w-full max-w-[40px] rounded-t-sm transition-colors relative ${
                            data.active 
                              ? 'bg-accent group-hover:bg-accent/90 shadow-lg shadow-accent/20' 
                              : `bg-primary/${(index + 2) * 10} group-hover:bg-primary/${(index + 3) * 10}`
                          }`} 
                          style={{ height: data.height }}
                        ></div>
                        <span className={`text-xs ${data.active ? 'font-bold text-text-dark dark:text-white' : 'text-slate-400'}`}>
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pedidos Pendientes */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Pedidos Pendientes</h3>
                    <a href="#" className="text-xs text-primary font-bold hover:underline">Ver todos</a>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 uppercase bg-surface-light dark:bg-background-dark/50">
                        <tr>
                          <th className="px-3 py-2 rounded-l-md">ID</th>
                          <th className="px-3 py-2">Cliente</th>
                          <th className="px-3 py-2 rounded-r-md">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {RECENT_ORDERS.map((order) => (
                          <tr key={order.id}>
                            <td className="px-3 py-3 font-medium">{order.id}</td>
                            <td className="px-3 py-3">
                              <div className="flex flex-col">
                                <span className="font-medium text-text-dark dark:text-white">{order.customerName}</span>
                                <span className="text-[10px] text-slate-400">{order.time}</span>
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getStatusBadge(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column (Alerts & Calendar) */}
              <div className="space-y-6">
                
                {/* Alertas de Stock */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-bold text-text-dark dark:text-white mb-4">Alertas de Stock</h3>
                  <div className="space-y-3">
                    {STOCK_ALERTS.map((alert) => (
                      <div key={alert.id} className={`flex items-start gap-3 p-3 rounded-lg border ${alert.type === 'critical' ? 'bg-alert/5 border-alert/10' : 'bg-accent/5 border-accent/10'}`}>
                        <div className={`p-1.5 rounded shrink-0 ${alert.type === 'critical' ? 'bg-alert/20 text-alert' : 'bg-accent/20 text-accent'}`}>
                          {alert.type === 'critical' ? <AlertTriangle className="size-4" /> : <Info className="size-4" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-dark dark:text-white">{alert.item}</p>
                          <p className={`text-xs font-medium ${alert.type === 'critical' ? 'text-alert' : 'text-accent'}`}>{alert.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors font-medium">
                    Ver inventario completo
                  </button>
                </div>

                {/* Calendario de Disponibilidad */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Disponibilidad</h3>
                    <div className="flex gap-2">
                      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><ChevronLeft className="size-4" /></button>
                      <span className="text-sm font-medium">Octubre 2023</span>
                      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><ChevronRight className="size-4" /></button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {AVAILABILITY.map((item) => (
                      <div key={item.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                          <span className="text-slate-400">{item.percentage}% Ocupado</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                          <div className={`${item.colorClass} h-2.5 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}