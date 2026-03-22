import { Button } from "@base-ui/react";
import {  Search, Filter, Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router";

// --- TIPOS ---
type ReservationStatus = 'confirmado' | 'pendiente' | 'cancelado' | 'camino';

interface Reservation {
  id: string;
  customer: {
    name: string;
    email: string;
    avatarUrl?: string;
    initials?: string;
  };
  eventDate: string;
  eventTime: string;
  total: string;
  status: ReservationStatus;
}

// --- DATOS DE PRUEBA (Mock Data) ---
const mockReservations: Reservation[] = [
  {
    id: "#BK-8842",
    customer: { name: "Ana García", email: "ana.g@example.com", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpxzkOuQZ7VwlziKihMkmygv7OZqiJp5ZMdYBjUE4i9hqluhG-BlVNVFR3mKH2tPRkCmb0H47KfkxNBHTHLNxqPUCRgtOOnrXg09TbzCm6ugNBbGXrwgFkNLViUIyiZjMyX0do-YiD5SW0J6NCYWFsU-_bj62_e06iSaE6FNqqLlOwmdpkFYylLVynUNAYPZjA0_yahAaIzS0I5D-URjEVI7YgOKwBuR8IrE_SnieoWfkConpD9fIinKDp_aJHT0kYnm6ombzdRZQT" },
    eventDate: "24 Oct, 2023", eventTime: "14:00 - 20:00",
    total: "$1,250.00", status: "confirmado"
  },
  {
    id: "#BK-8841",
    customer: { name: "Carlos Ruiz", email: "carlos.ruiz@corp.com", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Bwa1aE6dv6a17PV2_slHU1FgS8u_UP3Y0q1H1MI2_Mosp0uTlkCrUA90QQ2Gu59z1YQs6faygdn5qVXwgk9B5NZtFxsUYgDSxz-VA9E1f3PMHEzWeNZ5IZGb5aKZyMsKCEbC1nvqewXeQML7QbhNRyOM9qR19SVQd_1asjk4Vp6iRV95Efa6DNLkemc3Ioloe2EidJ0C9zy9op6QlwotyiQafMfmbjlZpWG76t6JzSh_jVDcpfyESotJohT_lIfwme_DQ97rdRgL" },
    eventDate: "28 Oct, 2023", eventTime: "09:00 - 18:00",
    total: "$3,400.00", status: "pendiente"
  },
  {
    id: "#BK-8840",
    customer: { name: "Hotel Lux", email: "events@hotellux.com", initials: "HL" },
    eventDate: "22 Oct, 2023", eventTime: "18:00 - 23:00",
    total: "$850.00", status: "cancelado"
  },
  {
    id: "#BK-8839",
    customer: { name: "Sofía Martínez", email: "sofia.m@gmail.com", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_VVUoF3rHvNMI3IZmJ38RcCHZJg6zCHMba9edLoBhaJdjs-z0LQNNo8Je1XvHD0aIFYXLexYoSCafDa5hsBMEZFr4CAkjKmm_OwHHCPIww7iP1e7JBIMt8IU4wgRaPwiQfbczOSadcJsLu8y-IVOcyUFXX5708xqDBl5IMQTwAJGod-NiniGqXlmluqgH7KFrCpEPwvBJO3b40XRzZbfcjSPwC5FZXqLHKmSDyAOHZ1f-TZU9RDadS_drTMDTV9M5nBjWqJZQAspn" },
    eventDate: "25 Oct, 2023", eventTime: "12:00 - 16:00",
    total: "$2,100.00", status: "camino"
  },
  {
    id: "#BK-8838",
    customer: { name: "David Pérez", email: "david.p@studio.com", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVA80S4KkiADc02a5Iu6pIZZKrJgL4S5jjDRwSU38GRWBjscmANoet_6hj0wfuBgwayxl9tD9z1B3wKHowEx8TZCqCIl7Iz58nmAkse13H_cfKHd1H3mFJrzOy6oZPYeQ9ACXXAEyBgsnO_LVrMwqSDOfgfhoY0XkmLrb0vEPhEa8mWDc4mdVMMO3eY1-wxEr7enhYit3L6KYO5wC8-RhquXisMJzzhBSeOW_HZbr8fWtScSxJ3fcE8LTRKXkDm5uUOZLq3oBQADGU" },
    eventDate: "30 Oct, 2023", eventTime: "20:00 - 02:00",
    total: "$4,250.00", status: "confirmado"
  }
];

export const AdminReservations = () => {
  
  // Función auxiliar para renderizar el "badge" o etiqueta de estado
  const getStatusBadge = (status: ReservationStatus) => {
    const styles = {
      confirmado: "bg-secondary/10 text-secondary border-secondary/20",
      pendiente: "bg-accent/10 text-accent border-accent/20",
      cancelado: "bg-alert/10 text-alert border-alert/20",
      camino: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    };

    const dotStyles = {
      confirmado: "bg-secondary",
      pendiente: "bg-accent",
      cancelado: "bg-alert",
      camino: "bg-blue-500"
    };

    const labels = {
      confirmado: "Confirmado",
      pendiente: "Pendiente",
      cancelado: "Cancelado",
      camino: "En camino"
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotStyles[status]}`}></span>
        {labels[status]}
      </span>
    );
  };

  return (
    <>
        
 
        {/* MAIN AREA */}
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Título y Botón Nueva Reserva */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-text-dark dark:text-white">Todas las Reservas</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gestiona y supervisa los eventos programados.</p>
              </div>
              
            </div>

            {/* Barra de Filtros */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-2 bg-surface-light dark:bg-background-dark border-transparent outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-sm transition-colors dark:text-white placeholder-slate-400" 
                  placeholder="Buscar por cliente o ID..." 
                />
              </div>
              
              <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <select className="bg-surface-light dark:bg-background-dark border-transparent outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-sm py-2 pl-3 pr-8 dark:text-white cursor-pointer min-w-[140px]">
                  <option value="">Estado: Todos</option>
                  <option value="confirmado">Confirmado</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="cancelado">Cancelado</option>
                  <option value="camino">En camino</option>
                </select>
                <select className="bg-surface-light dark:bg-background-dark border-transparent outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-sm py-2 pl-3 pr-8 dark:text-white cursor-pointer min-w-[160px]">
                  <option value="">Rango de Fechas</option>
                  <option value="hoy">Hoy</option>
                  <option value="semana">Esta semana</option>
                  <option value="mes">Este mes</option>
                </select>
                <button className="p-2 text-slate-500 hover:text-primary hover:bg-surface-light dark:hover:bg-background-dark rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                  <Filter className="size-5" />
                </button>
              </div>
            </div>

            {/* Tabla de Reservas */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface-light dark:bg-background-dark text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-4">ID Pedido</th>
                      <th className="px-6 py-4">Cliente</th>
                      <th className="px-6 py-4">Fecha del Evento</th>
                      <th className="px-6 py-4">Total</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    
                    {/* Renderizado dinámico de filas */}
                    {mockReservations.map((res) => (
                      <tr key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="px-6 py-4 font-medium text-primary">{res.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {res.customer.avatarUrl ? (
                              <img src={res.customer.avatarUrl} alt="Avatar" className="size-8 rounded-full object-cover bg-slate-200" />
                            ) : (
                              <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-bold">
                                {res.customer.initials}
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-text-dark dark:text-white">{res.customer.name}</p>
                              <p className="text-xs text-slate-400">{res.customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                          {res.eventDate}
                          <span className="block text-xs text-slate-400">{res.eventTime}</span>
                        </td>
                        <td className="px-6 py-4 font-bold text-text-dark dark:text-white">{res.total}</td>
                        <td className="px-6 py-4">
                          {getStatusBadge(res.status)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <Button render={<Link to={'/admin/reservation-detail/1'}/>} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark hover:bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 transition-colors">
                              <Eye className="size-4" /> Ver Detalles
                            </Button>
                            <button className="p-1.5 text-slate-400 hover:text-text-dark dark:hover:text-white rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                              <MoreVertical className="size-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              
              {/* Paginación */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark flex items-center justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Mostrando <span className="font-medium text-text-dark dark:text-white">1</span> a <span className="font-medium text-text-dark dark:text-white">5</span> de <span className="font-medium text-text-dark dark:text-white">42</span> resultados
                </p>
                <div className="flex items-center gap-2">
                  <button disabled className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300 transition-colors">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </>
    
  )
}