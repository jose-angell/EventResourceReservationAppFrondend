import * as React from "react"
import {  
  ArrowLeft, CheckCircle, ChevronDown, Package, 
  Armchair, Box, Music, Truck, Receipt, Download, Headphones 
} from "lucide-react"
import { Link } from "react-router";


// --- TIPOS E INTERFACES ---
interface OrderItem {
  id: string;
  name: string;
  category: string;
  priceTotal: string;
  quantity: number;
  unitPrice: string;
  icon: React.ElementType; // Para pasar componentes de Lucide dinámicamente
}

// --- DATOS MOCK (Simulando la respuesta de tu API) ---
const MOCK_ITEMS: OrderItem[] = [
  {
    id: "item-1",
    name: "Silla Chiavari Dorada",
    category: "Mobiliario",
    priceTotal: "$1,200.00",
    quantity: 200,
    unitPrice: "$6.00",
    icon: Armchair
  },
  {
    id: "item-2",
    name: "Mesa Redonda Banquetera",
    category: "Mobiliario",
    priceTotal: "$300.00",
    quantity: 20,
    unitPrice: "$15.00",
    icon: Box
  },
  {
    id: "item-3",
    name: "Pista de Baile LED",
    category: "Iluminación / Decoración",
    priceTotal: "$900.00",
    quantity: 1,
    unitPrice: "$900.00",
    icon: Music
  }
];

export const UserOrderDetail = () => {
  return (
    <>
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Cabecera (Back + Título) */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <Link to={'/user/orders'} className="flex items-center justify-center size-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
                  <ArrowLeft className="size-5" />
                </Link>
                <div>
                  <h2 className="text-2xl font-bold text-text-dark dark:text-white flex items-center gap-2">
                    Detalle de Pedido #BK-7829
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Realizado el 24 de Octubre, 2023</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Estado Rápido */}
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center">
                  <CheckCircle className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Estado actual</p>
                  <p className="text-lg font-bold text-text-dark dark:text-white">Confirmado</p>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="pl-3 text-sm font-semibold text-slate-600 dark:text-slate-300">Cambiar Estado:</span>
                <div className="relative flex-1 md:w-48">
                  <select 
                    defaultValue="confirmado"
                    className="w-full pl-3 pr-10 py-2 bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary text-primary dark:text-primary appearance-none cursor-pointer"
                  >
                    <option value="confirmado">Confirmado</option>
                    <option value="en_camino">En camino</option>
                    <option value="finalizado">Finalizado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-primary">
                    <ChevronDown className="size-5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Grid Principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Columna Izquierda (Artículos y Entrega) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Artículos Reservados */}
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <h3 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2">
                      <Package className="size-5 text-primary" />
                      Artículos Reservados
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Renderizado dinámico de la lista de artículos */}
                    {MOCK_ITEMS.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <React.Fragment key={item.id}>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0 flex items-center justify-center text-slate-400">
                              <Icon className="size-10" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-text-dark dark:text-white text-base">{item.name}</h4>
                                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Categoría: {item.category}</p>
                                </div>
                                <p className="font-bold text-text-dark dark:text-white">{item.priceTotal}</p>
                              </div>
                              <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                  <span className="font-medium">Cantidad:</span> {item.quantity} un.
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                  <span className="font-medium">Precio Unitario:</span> {item.unitPrice}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Agregamos el separador excepto en el último elemento */}
                          {index < MOCK_ITEMS.length - 1 && (
                            <hr className="border-slate-100 dark:border-slate-800" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Información de Entrega */}
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <h3 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2">
                      <Truck className="size-5 text-primary" />
                      Información de Entrega
                    </h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Dirección del Evento</p>
                      <p className="text-text-dark dark:text-white font-medium">Hacienda Los Arcángeles</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Carr. San Miguel Km 12.5</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">San Miguel de Allende, GTO 37700</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Fecha y Hora</p>
                      <p className="text-text-dark dark:text-white font-medium">Sábado, 15 Nov 2023</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Entrega: 10:00 AM</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Recolección: Domingo, 16 Nov 11:00 AM</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Persona de Contacto</p>
                      <p className="text-text-dark dark:text-white font-medium">María González (Planner)</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">+52 555 123 4567</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">maria.planner@email.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Instrucciones</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm italic">"Entrar por la puerta de servicio lateral. Preguntar por el encargado de montaje Sr. Ramírez."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha (Resumen de Pago) */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <h3 className="font-bold text-lg text-text-dark dark:text-white flex items-center gap-2">
                      <Receipt className="size-5 text-primary" />
                      Resumen de Pago
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Subtotal</span>
                      <span className="font-medium text-text-dark dark:text-white">$2,400.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Envío y Montaje</span>
                      <span className="font-medium text-text-dark dark:text-white">$150.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Impuestos (16%)</span>
                      <span className="font-medium text-text-dark dark:text-white">$408.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Depósito de Garantía</span>
                      <span className="font-medium text-green-600 dark:text-green-400">-$181.05</span>
                    </div>
                    <hr className="border-slate-100 dark:border-slate-800 my-2" />
                    <div className="flex justify-between items-end">
                      <span className="text-base font-bold text-text-dark dark:text-white">Total</span>
                      <span className="text-2xl font-bold text-primary">$2,776.95</span>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors shadow-sm shadow-primary/30">
                        <Download className="size-5" />
                        Descargar Factura
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold py-3 rounded-lg transition-colors">
                        <Headphones className="size-5" />
                        Contactar Soporte
                      </button>
                    </div>
                    <div className="text-center pt-2">
                      <p className="text-xs text-slate-400">Pago realizado vía Visa terminada en 4242</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}