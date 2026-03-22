import { 
  Package, User,  ArrowLeft, Printer, Ban, Truck, MapPin, Calendar, 
  Clock, Phone, FileText, Send, Mail, CheckCircle2 
} from "lucide-react"
import { Button } from "../../components/ui/button";
import { Link } from "react-router";

// --- TIPOS ---
interface OrderItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
  imageUrl: string;
}

interface OrderData {
  id: string;
  createdAt: string;
  status: 'confirmado' | 'pendiente' | 'camino' | 'finalizado' | 'cancelado';
  customer: {
    name: string;
    email: string;
    phone: string;
    avatarUrl: string;
    isVip: boolean;
    previousReservations: number;
    company: string;
    lastReservation: string;
  };
  logistics: {
    deliveryAddress: { name: string; street: string; city: string; };
    eventDate: { date: string; duration: string; };
    timeWindow: { delivery: string; pickup: string; };
    onsiteContact: { name: string; phone: string; };
  };
  payment: {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
    paidAt?: string;
  };
  items: OrderItem[];
}

// --- DATOS DE PRUEBA (Mock Data) ---
const mockOrderData: OrderData = {
  id: "#BK-8842",
  createdAt: "15 Oct, 2023",
  status: "confirmado",
  customer: {
    name: "Ana García", email: "ana.g@example.com", phone: "+52 55 9876 5432",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpxzkOuQZ7VwlziKihMkmygv7OZqiJp5ZMdYBjUE4i9hqluhG-BlVNVFR3mKH2tPRkCmb0H47KfkxNBHTHLNxqPUCRgtOOnrXg09TbzCm6ugNBbGXrwgFkNLViUIyiZjMyX0do-YiD5SW0J6NCYWFsU-_bj62_e06iSaE6FNqqLlOwmdpkFYylLVynUNAYPZjA0_yahAaIzS0I5D-URjEVI7YgOKwBuR8IrE_SnieoWfkConpD9fIinKDp_aJHT0kYnm6ombzdRZQT",
    isVip: true, previousReservations: 12, company: "Particular", lastReservation: "Hace 2 meses"
  },
  logistics: {
    deliveryAddress: { name: "Hacienda Los Encinos", street: "Av. Principal #450, Jardines del Valle", city: "Monterrey, NL 64000" },
    eventDate: { date: "24 Octubre, 2023", duration: "1 Día" },
    timeWindow: { delivery: "09:00 AM", pickup: "10:00 AM (Día Siguiente)" },
    onsiteContact: { name: "Roberto Gómez", phone: "+52 81 1234 5678" }
  },
  payment: {
    subtotal: 1250.00, shipping: 150.00, tax: 224.00, discount: 0.00, total: 1624.00, paidAt: "16 Oct, 2023"
  },
  items: [
    { id: "1", name: "Sillas Chiavari Doradas", category: "Mobiliario / Asientos", quantity: 100, unitPrice: 8.50, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTOMynlhuu8M5wuwSDrIPsfCdMzvXF-1yBZQSwJUasHqrBxHpuzTioRglNRt8RndSOsGBMrow2gVSbBUa-2gJhc-SKzlb6RPIm2Mk3W9wquAaomcncqhdAwititgg0EnKvFNK3xyqgQxtEAQLLGYXWj0xjDEg1bXdzfWxqOS1-DsjF_0_tpJz33fkwzQJL-ARDswKyIaaMnY0m0JSAWCeSO7S_e2K3G43kdmEg6PHRQukevGKQUWxZUl3gSc6Nsbe5IspKlfbqlQT_" },
    { id: "2", name: "Mesas Redondas 1.5m", category: "Mobiliario / Mesas", quantity: 10, unitPrice: 25.00, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0bqc4cwwMN9bbf1W33wQEmsRJ4w_hkB3WZyVvMexZDwcZXkwVILeJPc-R0d3IHOkdH5YK_ckhsg3vUpTc02KXCOp9XWyD6lv5_kDpX8LPavqwJEYuljRpSF8XKlCqE7hLvnj_aj7hcrBe6wSzWf8414rq29VftA3_8URipmC_u84SnlnbchxWKLWMhoM3ShW43RHjAjLI0G9JsN3CzMdqm3MwjvgKBhvN43uFh0miqKTEAW5_7Y8vW6onJ-2CxYljH49vutdQSKWT" },
    { id: "3", name: "Carpa Modular 10x10", category: "Estructuras / Exterior", quantity: 1, unitPrice: 150.00, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkW6wQeKTtZ8xcGY7yCWVZhjFp6aWFonwxXQupZndZ2rjxwHH8jDzV3AoBUSpk5DWdn_GXqpXTZcvrRFQFqZHKPZXsTZ2Hb6BeZhP0kPgsiIp0jUTKxq6w7F-bqMyHM5zUNhmppnlySzR05lOK2sJ6wXp68K8iAtZ6MmHR-hgZU71Xx7DclNOvINb2cDDPko4I3UuuWgFRGmDUUuQ7lqNUeV3sTBZnw6zQktsWjzRc7Br2cqPZtL7ndWtvCcCwkazAQr3PnWTREuIJ" }
  ]
};

// Formateador de moneda
const formatCurrency = (amount: number) => 
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

export const AdminReservationDetail = () => {
  const { id, createdAt, status, customer, logistics, payment, items } = mockOrderData;

  return (
    <>
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Header de la Reserva (Volver, Imprimir, Cancelar) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <Button 
                render={<Link to={'/admin/reservations'}/>}
                className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Volver">
                  <ArrowLeft className="size-5 text-white" />
                </Button>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark dark:text-white">
                    Detalle de Reserva <span className="text-primary">{id}</span>
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Creada el {createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2">
                  <Printer className="size-4.5" /> Imprimir
                </button>
                <button className="px-4 py-2 text-sm font-medium text-alert hover:bg-alert/5 rounded-lg border border-alert/20 transition-colors flex items-center gap-2">
                  <Ban className="size-4.5" /> Cancelar Pedido
                </button>
              </div>
            </div>

            {/* Banner de Estado */}
            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Truck className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Estado del Pedido</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                    <span className="font-bold text-lg dark:text-white capitalize">{status}</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-64">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Cambiar Estado</label>
                  <select defaultValue={status} className="w-full bg-surface-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none rounded-lg text-sm py-2.5 pl-3 pr-10 dark:text-white cursor-pointer font-medium shadow-sm">
                    <option value="confirmado">Confirmado</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="camino">En camino</option>
                    <option value="finalizado">Finalizado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>
                <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm shadow-primary/30 mt-5 sm:mt-0">
                  Actualizar
                </button>
              </div>
            </div>

            {/* Layout Principal: 2 Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* COLUMNA IZQUIERDA (Artículos y Logística) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Tabla de Artículos */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-surface-light/50 dark:bg-surface-dark">
                    <h4 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2">
                      <Package className="text-primary size-5" /> Artículos y Equipamiento
                    </h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {items.length} Artículos
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-surface-light dark:bg-background-dark text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold">
                        <tr>
                          <th className="px-6 py-3">Artículo</th>
                          <th className="px-6 py-3 text-center">Cantidad</th>
                          <th className="px-6 py-3 text-right">Precio Unit.</th>
                          <th className="px-6 py-3 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <p className="font-bold text-text-dark dark:text-white">{item.name}</p>
                                  <p className="text-xs text-slate-500">{item.category}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                                {item.quantity}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-300">
                              {formatCurrency(item.unitPrice)}
                            </td>
                            <td className="px-6 py-4 text-right font-medium text-text-dark dark:text-white">
                              {formatCurrency(item.quantity * item.unitPrice)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tarjetas de Logística */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h4 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2 mb-6">
                    <Truck className="text-primary size-5" /> Logística del Evento
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-light dark:bg-background-dark border border-slate-100 dark:border-slate-700">
                      <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">Dirección de Entrega</p>
                        <p className="text-sm font-medium text-text-dark dark:text-white">{logistics.deliveryAddress.name}</p>
                        <p className="text-sm text-slate-500">{logistics.deliveryAddress.street}</p>
                        <p className="text-sm text-slate-500">{logistics.deliveryAddress.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-light dark:bg-background-dark border border-slate-100 dark:border-slate-700">
                      <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                        <Calendar className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">Fecha del Evento</p>
                        <p className="text-sm font-medium text-text-dark dark:text-white">{logistics.eventDate.date}</p>
                        <p className="text-sm text-slate-500">Duración: {logistics.eventDate.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-light dark:bg-background-dark border border-slate-100 dark:border-slate-700">
                      <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center flex-shrink-0">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">Ventana de Entrega</p>
                        <p className="text-sm font-medium text-text-dark dark:text-white">Entrega: {logistics.timeWindow.delivery}</p>
                        <p className="text-sm text-slate-500">Recolección: {logistics.timeWindow.pickup}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-light dark:bg-background-dark border border-slate-100 dark:border-slate-700">
                      <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">Contacto en Sitio</p>
                        <p className="text-sm font-medium text-text-dark dark:text-white">{logistics.onsiteContact.name}</p>
                        <p className="text-sm text-slate-500">{logistics.onsiteContact.phone}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA (Cliente, Pago, Acciones) */}
              <div className="space-y-6">
                
                {/* Info del Cliente */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h4 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2 mb-4">
                    <User className="text-primary size-5" /> Información del Cliente
                  </h4>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={customer.avatarUrl} alt="Cliente" className="size-16 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700" />
                    <div>
                      <p className="font-bold text-lg text-text-dark dark:text-white">{customer.name}</p>
                      <p className="text-sm text-slate-500 mb-1">{customer.email}</p>
                      <div className="flex items-center gap-1">
                        {customer.isVip && (
                          <span className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent font-medium border border-accent/20">VIP</span>
                        )}
                        <span className="text-xs text-slate-400">• {customer.previousReservations} Reservas previas</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Teléfono:</span>
                      <span className="font-medium text-text-dark dark:text-white">{customer.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Empresa:</span>
                      <span className="font-medium text-text-dark dark:text-white">{customer.company}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Última reserva:</span>
                      <span className="font-medium text-text-dark dark:text-white">{customer.lastReservation}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button className="w-full text-center text-sm font-medium text-primary hover:underline">Ver perfil completo</button>
                  </div>
                </div>

                {/* Resumen de Pago */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h4 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2 mb-4">
                    <FileText className="text-primary size-5" /> Resumen de Pago
                  </h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                      <span className="font-medium text-text-dark dark:text-white">{formatCurrency(payment.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Envío y Montaje</span>
                      <span className="font-medium text-text-dark dark:text-white">{formatCurrency(payment.shipping)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Impuestos (16%)</span>
                      <span className="font-medium text-text-dark dark:text-white">{formatCurrency(payment.tax)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Descuento</span>
                      <span className="font-medium text-green-600">-{formatCurrency(payment.discount)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-lg text-text-dark dark:text-white">Total del Pedido</span>
                    <span className="font-bold text-xl text-accent">{formatCurrency(payment.total)}</span>
                  </div>
                  
                  {payment.paidAt && (
                    <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-800/30 flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                      <p className="text-sm text-green-700 dark:text-green-300 font-medium">Pagado el {payment.paidAt}</p>
                    </div>
                  )}
                </div>

                {/* Acciones Rápidas */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h4 className="font-bold text-lg text-text-dark dark:text-white mb-4">Acciones Rápidas</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-surface-light dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 py-2.5 px-4 rounded-lg font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                      <FileText className="size-4.5" /> Generar Factura
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-surface-light dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 py-2.5 px-4 rounded-lg font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                      <Send className="size-4.5" /> Enviar Recordatorio
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark py-2.5 px-4 rounded-lg font-medium transition-colors shadow-sm shadow-primary/20">
                      <Mail className="size-4.5" /> Contactar Cliente
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </>
  )
}