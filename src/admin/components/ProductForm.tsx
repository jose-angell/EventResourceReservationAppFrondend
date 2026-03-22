import * as React from "react"
import { 
  ArrowLeft, FileText, DollarSign, Image as ImageIcon, 
  CloudUpload, Save
} from "lucide-react"
import { Link, useParams } from "react-router";

// --- TIPOS ---
interface ProductFormData {
  name: string;
  category: string;
  status: string;
  description: string;
  price: string;
  stock: string;
}


export const ProductForm = () => {
//  const {id} = useParams();

//  const title = id === 'new' ? 'Nuevo Recurso' : 'Editar Recurso';
//  const subTitle = id === 'new' ? 'Aqui puedes crear un nuevo recurso' : 'Aqui puedes editar el recurso';

  // Estado inicial del formulario
  const [formData, setFormData] = React.useState<ProductFormData>({
    name: "",
    category: "",
    status: "disponible",
    description: "",
    price: "",
    stock: ""
  });

  // Manejador genérico para inputs y selects
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí es donde harías el fetch/axios POST a tu endpoint
    console.log("Datos listos para enviar al backend:", formData);
  };

  return (
 
      <>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto bg-surface-light dark:bg-background-dark p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between">
              <Link to={'/admin/products'} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="size-5" /> Volver al Inventario
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Información General */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <FileText className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Información General</h3>
                    <p className="text-sm text-slate-500">Detalles básicos para identificar el producto.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Nombre del Producto</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Silla Chiavari Dorada" 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none px-3 py-2 border"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium text-slate-700 dark:text-slate-300">Categoría</label>
                    <select 
                      id="category" 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none px-3 py-2 border"
                      required
                    >
                      <option value="">Seleccionar Categoría</option>
                      <option value="mobiliario">Mobiliario</option>
                      <option value="sonido">Sonido</option>
                      <option value="iluminacion">Iluminación</option>
                      <option value="decoracion">Decoración</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="status" className="text-sm font-medium text-slate-700 dark:text-slate-300">Estado Inicial</label>
                    <select 
                      id="status" 
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none px-3 py-2 border"
                    >
                      <option value="disponible">Disponible</option>
                      <option value="mantenimiento">En Mantenimiento</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="description" className="text-sm font-medium text-slate-700 dark:text-slate-300">Descripción</label>
                    <textarea 
                      id="description" 
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Describe las características principales del producto..." 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none px-3 py-2 border"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Detalles de Alquiler */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <DollarSign className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Detalles de Alquiler</h3>
                    <p className="text-sm text-slate-500">Configuración de precios y disponibilidad.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium text-slate-700 dark:text-slate-300">Precio por Día ($)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-slate-500">$</span>
                      </div>
                      <input 
                        type="number" 
                        id="price" 
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01" 
                        placeholder="0.00" 
                        className="w-full pl-7 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none pr-3 py-2 border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="stock" className="text-sm font-medium text-slate-700 dark:text-slate-300">Stock Total</label>
                    <input 
                      type="number" 
                      id="stock" 
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      placeholder="0" 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none px-3 py-2 border"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Imagen del Producto */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <ImageIcon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">Imagen del Producto</h3>
                    <p className="text-sm text-slate-500">Sube una imagen representativa (JPG, PNG).</p>
                  </div>
                </div>

                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    <div className="mx-auto size-12 text-slate-400 group-hover:text-primary transition-colors flex items-center justify-center">
                      <CloudUpload className="size-10" />
                    </div>
                    <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                        <span>Sube un archivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">o arrastra y suelta</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG, GIF hasta 10MB</p>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <button type="button" className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
                  Cancelar
                </button>
                <button type="submit" className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold shadow-sm hover:shadow transition-all flex items-center gap-2">
                  <Save className="size-4.5" />
                  Guardar Producto
                </button>
              </div>

            </form>
          </div>
        </main>
      </>
  )
}