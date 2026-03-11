import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export default function DashboardPanel() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">¡Hola, José!</h1>
        <p className="text-slate-500">Bienvenido a tu panel de control. Aquí puedes gestionar tus reservas y configuración.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <span className="text-sm font-medium text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded-md">+2 este mes</span>
          </div>
          <span className="text-3xl font-bold text-brand-text-dark mb-1">12</span>
          <span className="text-sm text-slate-500 font-medium">Pedidos Totales</span>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">En proceso</span>
          </div>
          <span className="text-3xl font-bold text-brand-text-dark mb-1">3</span>
          <span className="text-sm text-slate-500 font-medium">Pedidos Activos</span>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center">
              <span className="material-symbols-outlined">favorite</span>
            </div>
          </div>
          <span className="text-3xl font-bold text-brand-text-dark mb-1">24</span>
          <span className="text-sm text-slate-500 font-medium">Artículos Favoritos</span>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
              <span className="material-symbols-outlined">payments</span>
            </div>
          </div>
          <span className="text-3xl font-bold text-brand-text-dark mb-1">$1,250</span>
          <span className="text-sm text-slate-500 font-medium">Gasto Total</span>
        </div>
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h2 className="text-lg font-bold text-brand-text-dark flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-primary">history</span>
              Pedidos Recientes
            </h2>
            <Link to="/dashboard/orders" className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors">
              Ver todos
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3].map((order) => (
              <div key={order} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-brand-text-dark">Pedido #ORD-{8000 + order}</span>
                      <Badge className={order === 1 ? "bg-brand-accent text-white" : "bg-brand-secondary text-white"}>
                        {order === 1 ? 'En proceso' : 'Completado'}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-3">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> 12 Oct 2023</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span> $450.00</span>
                    </div>
                  </div>
                </div>
                <Link to={`/dashboard/orders/${order}`}>
                  <Button variant="outline" className="w-full sm:w-auto rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-brand-text-dark mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-primary">bolt</span>
              Acciones Rápidas
            </h2>
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="size-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-brand-text-dark">Nueva Reserva</span>
                  <span className="text-xs text-slate-500">Explorar catálogo</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-primary transition-colors">chevron_right</span>
              </Link>
              <Link to="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="size-10 rounded-lg bg-brand-secondary/10 text-brand-secondary flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">manage_accounts</span>
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-brand-text-dark">Actualizar Perfil</span>
                  <span className="text-xs text-slate-500">Modificar datos personales</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-secondary transition-colors">chevron_right</span>
              </Link>
              <Link to="/dashboard/payment-methods" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="size-10 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-brand-text-dark">Métodos de Pago</span>
                  <span className="text-xs text-slate-500">Gestionar tarjetas</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-accent transition-colors">chevron_right</span>
              </Link>
            </div>
          </div>

          <div className="bg-linear-to-br from-brand-primary to-brand-primary-dark rounded-3xl p-6 text-white shadow-lg shadow-brand-primary/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 size-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 size-32 bg-brand-secondary/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="size-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">support_agent</span>
              </div>
              <h3 className="text-lg font-bold mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-white/80 mb-4">Nuestro equipo de soporte está disponible 24/7 para ayudarte con tus reservas.</p>
              <Button className="w-full bg-white text-brand-primary hover:bg-slate-50 rounded-xl font-semibold">
                Contactar Soporte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}