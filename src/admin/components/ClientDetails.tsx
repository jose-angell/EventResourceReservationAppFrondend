import {
  User,  ArrowLeft, Ban, Mail, Phone, MapPin, Calendar,
  CircleDollarSign, ShoppingCart, ClipboardList, Eye, Trash2
} from "lucide-react"

// --- ASUMIENDO IMPORTACIONES DE SHADCN/UI ---
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Textarea } from "../../components/ui/textarea"
import { Link } from "react-router"

// --- DATOS DE PRUEBA (Mock Data) ---
const mockReservations = [
  { id: "#RES-2938", date: "22 Nov, 2023", event: "Gala Benéfica Anual", status: "Completado", statusClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300", total: "$3,200" },
  { id: "#RES-2950", date: "05 Dic, 2023", event: "Cena Corporativa", status: "Pendiente", statusClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300", total: "$1,850" },
  { id: "#RES-3001", date: "15 Ene, 2024", event: "Boda Privada", status: "Confirmado", statusClass: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", total: "$5,400" },
  { id: "#RES-3045", date: "02 Feb, 2024", event: "Lanzamiento Producto", status: "Borrador", statusClass: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300", total: "$2,100" },
];

export default function ClientDetails() {
  return (
    <>
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Top Actions Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                  <ArrowLeft className="size-5" />
                </Button>
                <h1 className="text-2xl font-bold text-text-dark dark:text-white">Hotel Lux Events</h1>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                  Enviar Email
                </Button>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* --- COLUMNA IZQUIERDA (Info del Cliente) --- */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center pb-6 border-b border-slate-200 dark:border-slate-800">
                      <div className="size-24 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-3xl mb-4">
                        HL
                      </div>
                      <h3 className="text-xl font-bold text-text-dark dark:text-white">Hotel Lux Events</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Empresa</p>
                      <div className="mt-4 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-none">
                          Activo
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-none">
                          VIP
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="py-6 space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Nombre de Contacto</label>
                        <div className="flex items-center gap-2 text-text-dark dark:text-white">
                          <User className="size-4 text-slate-400" /> María González
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Email</label>
                        <div className="flex items-center gap-2 text-text-dark dark:text-white break-all">
                          <Mail className="size-4 text-slate-400" /> reservas@hotellux.com
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Teléfono</label>
                        <div className="flex items-center gap-2 text-text-dark dark:text-white">
                          <Phone className="size-4 text-slate-400" /> +34 912 345 678
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Dirección</label>
                        <div className="flex items-start gap-2 text-text-dark dark:text-white">
                          <MapPin className="size-4 text-slate-400 mt-0.5 shrink-0" />
                          <span>Av. de la Castellana 120, Madrid, 28046, España</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Fecha de Registro</label>
                        <div className="flex items-center gap-2 text-text-dark dark:text-white">
                          <Calendar className="size-4 text-slate-400" /> 15 Oct, 2022
                        </div>
                      </div>
                    </div>
                    
                    {/* BOTONES REEMPLAZADOS: Bloquear y Eliminar */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                      <Button variant="outline" className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:border-slate-700 dark:hover:bg-slate-800 gap-2">
                        <Ban className="size-4" />
                        Bloquear Cliente
                      </Button>
                      <Button variant="destructive" className="w-full bg-alert hover:bg-red-800 gap-2 text-white">
                        <Trash2 className="size-4" />
                        Eliminar Cliente
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* --- COLUMNA DERECHA (KPIs, Historial y Notas) --- */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-5 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Gastado</p>
                        <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">$28,900</h3>
                      </div>
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <CircleDollarSign className="size-5" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-5 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Reservas Totales</p>
                        <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">45</h3>
                      </div>
                      <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                        <ShoppingCart className="size-5" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-5 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Reservas Activas</p>
                        <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">2</h3>
                      </div>
                      <div className="p-2 bg-accent/10 text-accent rounded-lg">
                        <ClipboardList className="size-5" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tabla de Historial */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="font-bold text-lg text-text-dark dark:text-white">Historial de Reservas</h3>
                    <a className="text-sm text-primary hover:text-primary-dark font-medium" href="#">Ver todas</a>
                  </div>
                  <Table>
                    <TableHeader className="bg-surface-light dark:bg-background-dark/50">
                      <TableRow className="border-slate-200 dark:border-slate-800 hover:bg-transparent">
                        <TableHead className="font-semibold text-slate-500">ID Reserva</TableHead>
                        <TableHead className="font-semibold text-slate-500">Fecha</TableHead>
                        <TableHead className="font-semibold text-slate-500">Evento</TableHead>
                        <TableHead className="font-semibold text-slate-500 text-center">Estado</TableHead>
                        <TableHead className="font-semibold text-slate-500 text-right">Total</TableHead>
                        <TableHead className="font-semibold text-slate-500 text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-slate-100 dark:divide-slate-800">
                      {mockReservations.map((res) => (
                        <TableRow key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 border-slate-100 dark:border-slate-800">
                          <TableCell className="font-medium text-text-dark dark:text-white">{res.id}</TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">{res.date}</TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">{res.event}</TableCell>
                          <TableCell className="text-center">
                            <Badge variant="secondary" className={`${res.statusClass} hover:bg-opacity-80 border-none`}>
                              {res.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-medium text-text-dark dark:text-white">{res.total}</TableCell>
                          <TableCell className="text-right">
                            <Button 
                            render={<Link to={'/admin/reservation-detail/1'}/>}
                            variant="ghost" size="icon" className="text-slate-400 hover:text-primary">
                              <Eye className="size-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>

                {/* Notas Internas */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-text-dark dark:text-white">Notas Internas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Textarea 
                        placeholder="Escribe notas sobre este cliente aquí..." 
                        className="min-h-[120px] bg-surface-light dark:bg-background-dark border-slate-200 dark:border-slate-700 resize-y"
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-slate-400 pointer-events-none">
                        Solo visible para administradores
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        Guardar Nota
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </main>
      </>
  )
}