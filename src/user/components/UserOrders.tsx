import { useState } from "react"
import {  ChevronDown, FileText, ChevronLeft, ChevronRight, Search } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Link } from "react-router";

// Definimos la interfaz para TypeScript basada en los datos de tu tabla
interface Order {
  id: string;
  date: string;
  status: "Confirmado" | "Finalizado" | "En camino" | "Cancelado";
  title: string;
  description: string;
  total: string;
}

// Datos de prueba (Mocks) que simulan la respuesta de tu backend (.NET)
const MOCK_ORDERS: Order[] = [
  {
    id: "#BK-7829", date: "24 Oct 2023", status: "Confirmado",
    title: "Paquete Boda Premium", description: "200 x Silla Chiavari, 20 x Mesa Redonda, Pista de Baile...",
    total: "$2,776.95"
  },
  {
    id: "#BK-7540", date: "12 Sep 2023", status: "Finalizado",
    title: "Equipo de Sonido JBL", description: "2 x Altavoces 1000W, 1 x Mixer 8 Canales, 2 x Micrófonos...",
    total: "$850.00"
  },
  {
    id: "#BK-6921", date: "05 Nov 2023", status: "En camino",
    title: "Iluminación Ambiental", description: "10 x Par LED, 1 x Controlador DMX, Cableado...",
    total: "$1,240.50"
  },
  {
    id: "#BK-5102", date: "20 Ago 2023", status: "Cancelado",
    title: "Carpa Modular 10x10", description: "1 x Carpa Estándar, 4 x Laterales transparentes...",
    total: "$450.00"
  },
  {
    id: "#BK-4933", date: "15 Jun 2023", status: "Finalizado",
    title: "Mobiliario Lounge VIP", description: "4 x Sofá Chester, 2 x Mesa de Centro, 1 x Alfombra...",
    total: "$1,100.00"
  }
];

// Helper para asignar los colores correctos según el estado
const getStatusStyles = (status: Order["status"]) => {
  switch (status) {
    case "Confirmado":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 dot-bg-green-500";
    case "Finalizado":
      return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 dot-bg-slate-500";
    case "En camino":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 dot-bg-blue-500";
    case "Cancelado":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 dot-bg-red-500";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export const UserOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  // Aquí podrías filtrar el MOCK_ORDERS basado en searchTerm y statusFilter
  const displayedOrders = MOCK_ORDERS; 

  return (
    <>
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            <div className="max-w-6xl mx-auto space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                <h2 className="text-2xl font-bold text-text-dark dark:text-white flex items-center gap-2">
                    Mis Pedidos
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {MOCK_ORDERS.length}
                    </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Gestiona y revisa el estado de tus reservas de eventos.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Search className="size-5" />
                    </span>
                    <Input 
                    className="pl-10 w-full sm:w-64 bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 py-5" 
                    placeholder="Buscar por ID o artículo..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <select 
                    className="pl-3 pr-10 py-2.5 h-full border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-surface-dark text-sm focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer w-full sm:w-40 text-slate-600 dark:text-slate-300"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    >
                    <option value="todos">Todos</option>
                    <option value="confirmado">Confirmado</option>
                    <option value="en_camino">En camino</option>
                    <option value="finalizado">Finalizado</option>
                    <option value="cancelado">Cancelado</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <ChevronDown className="size-5" />
                    </span>
                </div>
                </div>
            </div>

            {/* Tabla de Pedidos */}
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">ID Pedido</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">Fecha</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-40">Estado</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Artículos</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">Total</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right w-48">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    
                    {/* Renderizado dinámico de filas */}
                    {displayedOrders.map((order) => {
                        const statusStyle = getStatusStyles(order.status);
                        // Extraemos la clase del punto (dot-bg-...) y el resto para el badge
                        const bgDotClass = statusStyle.split(' ').find(c => c.startsWith('dot-bg-'))?.replace('dot-', '') || 'bg-slate-500';
                        const badgeClasses = statusStyle.split(' ').filter(c => !c.startsWith('dot-bg-')).join(' ');

                        return (
                        <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                            <td className="px-6 py-4 text-sm font-medium text-text-dark dark:text-white">{order.id}</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{order.date}</td>
                            <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${badgeClasses}`}>
                                <span className={`size-1.5 rounded-full ${bgDotClass}`}></span>
                                {order.status}
                            </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                            <p className="font-medium text-text-dark dark:text-white">{order.title}</p>
                            <p className="text-xs text-slate-500 truncate max-w-[200px]">{order.description}</p>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-text-dark dark:text-white">{order.total}</td>
                            <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button 
                                className={`p-2 rounded-full transition-colors ${order.status === 'Cancelado' ? 'text-slate-300 hover:text-slate-400 cursor-not-allowed' : 'text-slate-400 hover:text-primary hover:bg-primary/5'}`}
                                disabled={order.status === 'Cancelado'}
                                title={order.status === 'Cancelado' ? 'No disponible' : 'Descargar Factura'}
                                >
                                <FileText className="size-5" />
                                </button>
                                <Button 
                                render={<Link to={`/user/order-detail/1`}/>}
                                variant="outline" size="sm" className="h-8 text-xs font-bold border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary text-slate-600 dark:text-slate-300 bg-white dark:bg-transparent">
                                Ver Detalles
                                </Button>
                            </div>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                </div>

                {/* Paginación */}
                <div className="bg-white dark:bg-surface-dark px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Mostrando <span className="font-bold text-text-dark dark:text-white">1</span> a <span className="font-bold text-text-dark dark:text-white">5</span> de <span className="font-bold text-text-dark dark:text-white">{MOCK_ORDERS.length}</span> resultados
                </p>
                <div className="flex items-center gap-2">
                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>
                    <ChevronLeft className="size-5" />
                    </button>
                    <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm hover:bg-primary-dark transition-colors">1</button>
                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition-colors">2</button>
                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition-colors">3</button>
                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <ChevronRight className="size-5" />
                    </button>
                </div>
                </div>
            </div>

            </div>
        </div>
        </>
  )
}