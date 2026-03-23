import { Users, Plus, TrendingUp, UserCheck, UserPlus, Search, Filter, Eye } from "lucide-react"

// --- ASUMIENDO IMPORTACIONES DE SHADCN/UI ---
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Badge } from "../../components/ui/badge"
import { Switch } from "../../components/ui/switch"
import { Card, CardContent } from "../../components/ui/card"
import { Link } from "react-router"

// --- TIPOS ---
interface Client {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  email: string;
  phone: string;
  type: 'Individual' | 'Empresa';
  totalOrders: number;
  totalSpent: number;
  isActive: boolean;
}

// --- DATOS DE PRUEBA (Mock Data) ---
const mockClients: Client[] = [
  { id: "1", name: "Ana García", initials: "AG", avatarColor: "bg-indigo-100 text-indigo-600", email: "ana.garcia@example.com", phone: "+34 612 345 678", type: "Individual", totalOrders: 12, totalSpent: 4250, isActive: true },
  { id: "2", name: "Hotel Lux Events", initials: "HL", avatarColor: "bg-purple-100 text-purple-600", email: "reservas@hotellux.com", phone: "+34 912 345 678", type: "Empresa", totalOrders: 45, totalSpent: 28900, isActive: true },
  { id: "3", name: "Carlos Rodriguez", initials: "CR", avatarColor: "bg-emerald-100 text-emerald-600", email: "carlos.r@example.com", phone: "+34 666 777 888", type: "Individual", totalOrders: 3, totalSpent: 850, isActive: false },
  { id: "4", name: "Sofia Martinez", initials: "SM", avatarColor: "bg-pink-100 text-pink-600", email: "sofia.m@example.com", phone: "+34 611 222 333", type: "Individual", totalOrders: 8, totalSpent: 1200, isActive: true },
  { id: "5", name: "Weddings & Events Co.", initials: "WE", avatarColor: "bg-orange-100 text-orange-600", email: "contacto@weco.com", phone: "+34 933 444 555", type: "Empresa", totalOrders: 21, totalSpent: 15400, isActive: true },
];

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

export const ClientManagement = () => {
  return (
    <>
        
        {/* MAIN AREA */}
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Título y Botón Principal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold text-text-dark dark:text-white">Lista de Clientes</h1>
              <Button className="bg-primary hover:bg-primary-dark text-white gap-2">
                <Plus className="size-5" />
                Añadir Cliente
              </Button>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-5 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Clientes</p>
                    <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">1,248</h3>
                    <span className="text-xs font-medium text-emerald-600 flex items-center mt-1 gap-1">
                      <TrendingUp className="size-3" /> +5.2%
                    </span>
                  </div>
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Users className="size-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-5 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Clientes Activos</p>
                    <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">982</h3>
                    <span className="text-xs font-medium text-slate-500 flex items-center mt-1">
                      Últimos 30 días
                    </span>
                  </div>
                  <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                    <UserCheck className="size-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-5 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nuevos este mes</p>
                    <h3 className="text-2xl font-bold text-text-dark dark:text-white mt-1">45</h3>
                    <span className="text-xs font-medium text-emerald-600 flex items-center mt-1 gap-1">
                      <TrendingUp className="size-3" /> +12%
                    </span>
                  </div>
                  <div className="p-2 bg-accent/10 text-accent rounded-lg">
                    <UserPlus className="size-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Barra de Búsqueda y Filtros */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input 
                  placeholder="Buscar por nombre o email..." 
                  className="pl-10 bg-surface-light dark:bg-background-dark border-slate-200 dark:border-slate-700 focus-visible:ring-primary"
                />
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select>
                  <SelectTrigger className="w-full md:w-48 bg-surface-light dark:bg-background-dark border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Tipo de Cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="empresa">Empresa</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon" className="border-slate-200 dark:border-slate-700 text-slate-600">
                  <Filter className="size-4" />
                </Button>
              </div>
            </div>

            {/* Tabla de Clientes con shadcn */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-surface-light dark:bg-background-dark/50">
                  <TableRow className="border-slate-200 dark:border-slate-800 hover:bg-transparent">
                    <TableHead className="font-semibold text-slate-500">Cliente</TableHead>
                    <TableHead className="font-semibold text-slate-500">Email</TableHead>
                    <TableHead className="font-semibold text-slate-500">Teléfono</TableHead>
                    <TableHead className="font-semibold text-slate-500 text-center">Tipo</TableHead>
                    <TableHead className="font-semibold text-slate-500 text-center">Total Pedidos</TableHead>
                    <TableHead className="font-semibold text-slate-500 text-right">Gasto Total</TableHead>
                    <TableHead className="font-semibold text-slate-500 text-center">Estado</TableHead>
                    <TableHead className="font-semibold text-slate-500 text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-slate-100 dark:divide-slate-800">
                  {mockClients.map((client) => (
                    <TableRow key={client.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 border-slate-100 dark:border-slate-800">
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${client.avatarColor}`}>
                            {client.initials}
                          </div>
                          <div className="font-medium text-text-dark dark:text-white">{client.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600 dark:text-slate-400">{client.email}</TableCell>
                      <TableCell className="text-slate-600 dark:text-slate-400">{client.phone}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary" className={`${client.type === 'Empresa' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'} hover:bg-opacity-80 border-none`}>
                          {client.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center font-medium text-text-dark dark:text-white">
                        {client.totalOrders}
                      </TableCell>
                      <TableCell className="text-right font-medium text-text-dark dark:text-white">
                        {formatCurrency(client.totalSpent)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Switch checked={client.isActive} className="data-[state=checked]:bg-secondary" />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                          render={<Link  to={'/admin/client-detail/1'}/>}
                          variant="ghost" size="icon" className="text-slate-400 hover:text-secondary hover:bg-secondary/10">
                            <Eye className="size-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Paginación */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Mostrando <span className="font-medium text-text-dark dark:text-white">1</span> a <span className="font-medium text-text-dark dark:text-white">5</span> de <span className="font-medium text-text-dark dark:text-white">1,248</span> resultados
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled className="text-slate-500 border-slate-200 dark:border-slate-700">Anterior</Button>
                  <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">1</Button>
                  <Button variant="outline" size="sm" className="text-slate-500 border-slate-200 dark:border-slate-700">2</Button>
                  <Button variant="outline" size="sm" className="text-slate-500 border-slate-200 dark:border-slate-700">3</Button>
                  <span className="px-2 text-slate-400 flex items-center">...</span>
                  <Button variant="outline" size="sm" className="text-slate-500 border-slate-200 dark:border-slate-700">Siguiente</Button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </>
  )
}