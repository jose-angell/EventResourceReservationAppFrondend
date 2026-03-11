import { Link, useParams } from "react-router";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export default function DashboardOrderDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Link to="/dashboard" className="hover:text-brand-primary transition-colors">Panel</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link to="/dashboard/orders" className="hover:text-brand-primary transition-colors">Mis Pedidos</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-brand-text-dark font-medium">{id || 'ORD-8001'}</span>
          </nav>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-brand-text-dark tracking-tight">Pedido {id || 'ORD-8001'}</h1>
            <Badge className="bg-brand-accent text-white border-none font-medium px-3 py-1">En proceso</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined mr-2">receipt_long</span>
            Descargar Factura
          </Button>
          <Button className="rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white shadow-md shadow-brand-primary/20">
            <span className="material-symbols-outlined mr-2">support_agent</span>
            Soporte
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-brand-text-dark flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">inventory_2</span>
                Artículos Alquilados
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[1, 2].map((item) => (
                <div key={item} className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-50/50 transition-colors">
                  <div className="size-24 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-brand-text-dark text-lg mb-1">Silla Chiavari Dorada</h3>
                        <p className="text-sm text-slate-500">Categoría: Mobiliario</p>
                      </div>
                      <span className="font-bold text-brand-primary text-lg">$250.00</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">Cant: 50</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        3 días ($5.00/día)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-secondary">event</span>
                Detalles del Evento
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Tipo de Evento</span>
                  <span className="font-semibold text-brand-text-dark">Boda</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Fechas</span>
                  <span className="font-semibold text-brand-text-dark">15 Oct 2023 - 18 Oct 2023</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Dirección</span>
                  <span className="font-semibold text-brand-text-dark">Finca Los Olivos, Ctra. Nacional km 45, 28000 Madrid</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-secondary">local_shipping</span>
                Logística
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Método de Entrega</span>
                  <span className="font-semibold text-brand-text-dark">Entrega y Montaje en destino</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Estado de Entrega</span>
                  <Badge className="bg-brand-accent/10 text-brand-accent border-none font-medium px-2 py-0.5 mt-1">Programada</Badge>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">Contacto Logística</span>
                  <span className="font-semibold text-brand-text-dark">+34 600 123 456 (Transportista)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-brand-text-dark mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-primary">payments</span>
              Resumen de Pago
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Subtotal artículos</span>
                <span className="font-medium text-brand-text-dark">$625.00</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Depósito de garantía</span>
                <span className="font-medium text-brand-text-dark">$150.00</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Entrega y Montaje</span>
                <span className="font-medium text-brand-text-dark">$150.00</span>
              </div>
              <div className="h-px bg-slate-200 my-2"></div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-sm text-slate-500 font-medium mb-1">Total Pagado</span>
                  <span className="text-xs text-slate-400">Visa terminada en 4242</span>
                </div>
                <span className="text-2xl font-bold text-brand-primary">$925.00</span>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-secondary mt-0.5">info</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                El depósito de garantía ($150.00) será reembolsado a tu tarjeta en un plazo de 3-5 días hábiles tras la devolución y revisión del material en buen estado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}