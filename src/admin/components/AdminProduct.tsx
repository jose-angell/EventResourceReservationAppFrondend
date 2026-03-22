import * as React from "react"
import { 
  Search, Edit, Trash2, ChevronLeft, ChevronRight,
  Armchair, Square, Speaker, Lightbulb, Mic
} from "lucide-react"
import { Button } from "@base-ui/react";
import { Link } from "react-router";

// --- TIPOS E INTERFACES ---
type StockStatus = "Disponible" | "Bajo Stock" | "Agotado";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  totalStock: number;
  availableStock: number;
  pricePerDay: string;
  status: StockStatus;
  icon: React.ElementType;
}

// --- DATOS MOCK ---
const INVENTORY_ITEMS: InventoryItem[] = [
  { id: "inv-1", name: "Silla Chiavari Dorada", category: "Mobiliario", totalStock: 200, availableStock: 5, pricePerDay: "$4.50", status: "Bajo Stock", icon: Armchair },
  { id: "inv-2", name: "Mesa Imperial 10pax", category: "Mobiliario", totalStock: 50, availableStock: 32, pricePerDay: "$25.00", status: "Disponible", icon: Square },
  { id: "inv-3", name: "Sistema Audio JBL Pro", category: "Sonido", totalStock: 12, availableStock: 0, pricePerDay: "$150.00", status: "Agotado", icon: Speaker },
  { id: "inv-4", name: "Set Focos LED RGB", category: "Iluminación", totalStock: 40, availableStock: 28, pricePerDay: "$35.00", status: "Disponible", icon: Lightbulb },
  { id: "inv-5", name: "Micrófono Shure SM58", category: "Sonido", totalStock: 15, availableStock: 2, pricePerDay: "$12.00", status: "Bajo Stock", icon: Mic },
];

// --- HELPERS ---
const getStatusStyles = (status: StockStatus) => {
  switch (status) {
    case "Disponible":
      return { badge: "bg-emerald-500/10 text-emerald-600", dot: "bg-emerald-600", text: "text-slate-700 dark:text-white" };
    case "Bajo Stock":
      return { badge: "bg-accent/10 text-accent", dot: "bg-accent", text: "text-accent" };
    case "Agotado":
      return { badge: "bg-alert/10 text-alert", dot: "bg-alert", text: "text-alert" };
    default:
      return { badge: "bg-slate-100 text-slate-500", dot: "bg-slate-500", text: "text-slate-500" };
  }
};

export const AdminProduct = () => {
  return (
    <>
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Filtros y Búsqueda */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-2.5 size-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Buscar producto..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-all outline-none" 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                render={<Link to={'/admin/product'}/>}
                className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium"> Agregar </Button>
                <select className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm py-2 pl-3 pr-8 focus:ring-primary focus:border-primary outline-none">
                  <option value="">Todas las Categorías</option>
                  <option value="mobiliario">Mobiliario</option>
                  <option value="sonido">Sonido</option>
                  <option value="iluminacion">Iluminación</option>
                </select>
                <select className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm py-2 pl-3 pr-8 focus:ring-primary focus:border-primary outline-none">
                  <option value="">Estado de Stock</option>
                  <option value="disponible">Disponible</option>
                  <option value="bajo">Bajo Stock</option>
                  <option value="agotado">Agotado</option>
                </select>
              </div>
            </div>

            {/* Tabla de Inventario */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Imagen</th>
                      <th className="px-6 py-4 font-semibold">Nombre del Producto</th>
                      <th className="px-6 py-4 font-semibold">Categoría</th>
                      <th className="px-6 py-4 font-semibold text-center">Stock Total</th>
                      <th className="px-6 py-4 font-semibold text-center">Stock Disponible</th>
                      <th className="px-6 py-4 font-semibold text-right">Precio/Día</th>
                      <th className="px-6 py-4 font-semibold text-center">Estado</th>
                      <th className="px-6 py-4 font-semibold text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {INVENTORY_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const statusStyle = getStatusStyles(item.status);
                      
                      return (
                        <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="h-12 w-16 bg-slate-200 dark:bg-slate-700 rounded-md flex items-center justify-center text-slate-400">
                              <Icon className="size-6" />
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium text-text-dark dark:text-white">{item.name}</td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{item.category}</td>
                          <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300">{item.totalStock}</td>
                          <td className={`px-6 py-4 text-center font-bold ${statusStyle.text}`}>{item.availableStock}</td>
                          <td className="px-6 py-4 text-right font-medium">{item.pricePerDay}</td>
                          <td className="px-6 py-4 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${statusStyle.badge}`}>
                              <span className={`size-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center gap-2">
                              <Button 
                              render={<Link to={'/admin/product/1'}/>}
                              className="p-1.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Editar">
                                <Edit className="size-4.5" />
                              </Button>
                              <button className="p-1.5 text-slate-500 hover:text-alert hover:bg-alert/10 rounded transition-colors" title="Eliminar">
                                <Trash2 className="size-4.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Paginación */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Mostrando <span className="font-medium text-text-dark dark:text-white">1</span> a <span className="font-medium text-text-dark dark:text-white">5</span> de <span className="font-medium text-text-dark dark:text-white">48</span> resultados
                </span>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled>
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">1</button>
                  <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">2</button>
                  <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">3</button>
                  <span className="text-slate-400">...</span>
                  <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">10</button>
                  <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
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