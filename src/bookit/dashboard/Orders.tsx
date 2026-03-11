import { Link } from "react-router";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const orders = [
  { id: 'ORD-8001', date: '12 Oct 2023', total: 450.00, status: 'En proceso', statusColor: 'bg-brand-accent text-white', items: 12 },
  { id: 'ORD-8002', date: '05 Sep 2023', total: 1250.00, status: 'Completado', statusColor: 'bg-brand-secondary text-white', items: 45 },
  { id: 'ORD-8003', date: '22 Ago 2023', total: 320.00, status: 'Cancelado', statusColor: 'bg-brand-alert text-white', items: 8 },
  { id: 'ORD-8004', date: '15 Jul 2023', total: 890.00, status: 'Completado', statusColor: 'bg-brand-secondary text-white', items: 24 },
];

export default function DashboardOrders() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Mis Pedidos</h1>
          <p className="text-slate-500">Historial completo de tus reservas y alquileres.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined mr-2">filter_list</span>
            Filtrar
          </Button>
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined mr-2">download</span>
            Exportar
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-6">ID Pedido</th>
                <th className="p-6">Fecha</th>
                <th className="p-6">Artículos</th>
                <th className="p-6">Total</th>
                <th className="p-6">Estado</th>
                <th className="p-6 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-6">
                    <span className="font-bold text-brand-text-dark">{order.id}</span>
                  </td>
                  <td className="p-6">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      {order.date}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{order.items} items</span>
                  </td>
                  <td className="p-6">
                    <span className="font-bold text-brand-text-dark">${order.total.toFixed(2)}</span>
                  </td>
                  <td className="p-6">
                    <Badge className={`${order.statusColor} border-none font-medium px-3 py-1`}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="p-6 text-right">
                    <Link to={`/dashboard/orders/${order.id}`}>
                      <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
                        Ver Detalles
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="text-sm text-slate-500 font-medium">Mostrando 1 a 4 de 12 pedidos</span>
          <div className="flex gap-2">
            <Button variant="outline" className="size-10 p-0 rounded-xl border-slate-200 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </Button>
            <Button variant="outline" className="size-10 p-0 rounded-xl border-brand-primary bg-brand-primary/5 text-brand-primary font-bold">
              1
            </Button>
            <Button variant="outline" className="size-10 p-0 rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
              2
            </Button>
            <Button variant="outline" className="size-10 p-0 rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
              3
            </Button>
            <Button variant="outline" className="size-10 p-0 rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
              <span className="material-symbols-outlined">chevron_right</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}