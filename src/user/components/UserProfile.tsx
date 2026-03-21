import * as React from "react"
import { useState } from "react"
import { 
ArrowLeft, User, Save 
} from "lucide-react"

// Importaciones de shadcn/ui
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Link } from "react-router"

export const UserProfile = () => {

  const [formData, setFormData] = useState({
    firstName: "Carlos",
    lastName: "Rodriguez",
    email: "carlos.rodriguez@example.com",
    phone: "+34 612 345 678",
    address: "Calle Gran Vía 24, 3º Izq",
    city: "Madrid",
    country: "España"
  });

  // Manejador genérico de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí llamarías a tu API (ej. axios.put('/api/users/profile', formData))
    console.log("Datos a guardar:", formData);
  };

  return (
    <>
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Navegación y Título */}
            <div className="flex flex-col gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <Link to={'/user'} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors w-fit">
                <ArrowLeft className="size-4 mr-1.5" />
                Volver al Panel
              </Link>
              <div>
                <h2 className="text-2xl font-bold text-text-dark dark:text-white">Editar Perfil</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Actualiza tu información personal y de contacto.</p>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Sección de Foto de Perfil */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-6">
                  <Avatar className="size-24 border-4 border-white dark:border-surface-dark shadow-lg">
                    <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XZE_VtG9Us__Lauc1wU0lQUk-leI_VyjDxhtvFoFM20shkqZWDWFL9pSD2W7PTxLqkrQVeg2cYH1D7Ws6vmuyiOZLNFZGLDUbJ4wpJWu5lgU61JLyR2CFXhzyyBFcOjbuo4rMyinBDecoX-wt0ZteZlGmSUcZ6bTRQYcD3m8-xppC2TvDKwtRUde7J0_5mT4tezFtf3VmqjQbKSqquylns9ZCbbmWaZ6jHP9X3oMpFq7f-PQ31s5837yKWYWxj2IsiGVi40HnqQQ" alt="Foto de perfil" className="object-cover" />
                    <AvatarFallback className="bg-slate-200 dark:bg-slate-700 text-xl">CR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-text-dark dark:text-white">Tu Foto</h3>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="font-bold text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800">
                        Cambiar Foto
                      </Button>
                      <Button type="button" variant="ghost" className="font-bold text-alert hover:text-red-700 hover:bg-alert/10">
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de Información Personal */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-lg text-text-dark dark:text-white mb-6 flex items-center gap-2">
                  <User className="size-5 text-primary" />
                  Información Personal
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">Nombre</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">Apellido</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Correo electrónico</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">Teléfono</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address" className="text-slate-700 dark:text-slate-300">Dirección de envío predeterminada</Label>
                    <Input id="address" value={formData.address} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-700 dark:text-slate-300">Ciudad</Label>
                    <Input id="city" value={formData.city} onChange={handleChange} className="bg-white dark:bg-slate-800/50 py-5" />
                  </div>
                  <div className="space-y-2 flex flex-col justify-end">
                    <Label htmlFor="country" className="text-slate-700 dark:text-slate-300 mb-2">País</Label>
                    {/* Select nativo con estilos de Tailwind en lugar del Select complejo de shadcn para mantenerlo simple */}
                    <select 
                      id="country" 
                      value={formData.country} 
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 text-text-dark dark:text-white"
                    >
                      <option value="España">España</option>
                      <option value="México">México</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Argentina">Argentina</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <Button
                render={<Link to={'/user'} />}
                type="button" variant="outline" className="px-6 py-6 font-bold text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
                  Cancelar
                </Button>
                <Button type="submit" className="px-6 py-6 bg-primary hover:bg-primary-dark text-white font-bold shadow-lg shadow-primary/25 flex items-center gap-2">
                  <Save className="size-5" />
                  Guardar Cambios
                </Button>
              </div>

            </form>
          </div>
        </div>
      </>
  )
}