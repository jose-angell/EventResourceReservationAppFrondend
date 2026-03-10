import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";


export default function Checkout() {
  return (
    <main className="flex-1 bg-brand-surface-light py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Progress Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 hidden md:block"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-brand-primary -z-10 hidden md:block"></div>
          
          <div className="flex flex-col items-center gap-2 bg-brand-surface-light px-4">
            <div className="size-10 rounded-full bg-[#0a8284] text-white flex items-center justify-center font-bold shadow-md shadow-brand-primary/20">
              <span className="material-symbols-outlined text-[20px] text-white">check</span>
            </div>
            <span className="text-sm font-semibold text-brand-primary">Presupuesto</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 bg-brand-surface-light px-4">
            <div className="size-10 rounded-full bg-[#0a8284] text-white flex items-center justify-center font-bold shadow-md shadow-brand-primary/20">
              2
            </div>
            <span className="text-sm font-semibold text-brand-primary">Detalles del Evento</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 bg-brand-surface-light px-4">
            <div className="size-10 rounded-full bg-[#0a8284] border-2 border-slate-200 text-white flex items-center justify-center font-bold">
              3
            </div>
            <span className="text-sm font-medium text-slate-500">Confirmación</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-brand-text-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">event</span>
                Información del Evento
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="eventType">Tipo de Evento</label>
                    <div className="relative">
                      <select id="eventType" className="w-full pl-4 pr-10 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors appearance-none">
                        <option value="">Selecciona una opción</option>
                        <option value="wedding">Boda</option>
                        <option value="corporate">Evento Corporativo</option>
                        <option value="party">Fiesta Privada</option>
                        <option value="other">Otro</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="guests">Número de Invitados (Aprox.)</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">group</span>
                      <Input id="guests" type="number" placeholder="Ej. 150" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="startDate">Fecha de Inicio</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">calendar_today</span>
                      <Input id="startDate" type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="endDate">Fecha de Finalización</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">event_available</span>
                      <Input id="endDate" type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="address">Dirección del Evento</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">location_on</span>
                    <Input id="address" type="text" placeholder="Calle, número, ciudad, código postal" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="notes">Notas Adicionales (Opcional)</label>
                  <textarea id="notes" rows={4} placeholder="Instrucciones especiales para el montaje, horarios de acceso, etc." className="w-full p-4 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors resize-none border"></textarea>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-brand-text-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">local_shipping</span>
                Opciones de Entrega
              </h2>
              
              <div className="space-y-4">
                <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-brand-primary bg-brand-primary/5 cursor-pointer transition-colors">
                  <input type="radio" name="delivery" defaultChecked className="mt-1 size-5 text-brand-primary focus:ring-brand-primary border-slate-300" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-brand-text-dark">Entrega y Montaje</span>
                      <span className="font-bold text-brand-primary">+$150.00</span>
                    </div>
                    <p className="text-sm text-slate-500">Nuestro equipo entregará, montará y recogerá el material en el lugar del evento.</p>
                  </div>
                </label>
                
                <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-slate-200 hover:border-brand-primary/50 bg-white cursor-pointer transition-colors">
                  <input type="radio" name="delivery" className="mt-1 size-5 text-brand-primary focus:ring-brand-primary border-slate-300" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-brand-text-dark">Recogida en Almacén</span>
                      <span className="font-bold text-brand-secondary">Gratis</span>
                    </div>
                    <p className="text-sm text-slate-500">Recoge y devuelve el material tú mismo en nuestras instalaciones (Calle Principal 123).</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-brand-text-dark mb-6">Resumen de Reserva</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="size-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-brand-text-dark line-clamp-1">Silla Chiavari Dorada</h4>
                    <div className="text-xs text-slate-500 mb-1">Cant: 50 x 3 días</div>
                    <div className="font-bold text-brand-primary text-sm">$250.00</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15zF8p2C9I8Z6P3W0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-brand-text-dark line-clamp-1">Mesa Imperial</h4>
                    <div className="text-xs text-slate-500 mb-1">Cant: 5 x 3 días</div>
                    <div className="font-bold text-brand-primary text-sm">$375.00</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal (3 días)</span>
                  <span className="font-medium text-brand-text-dark">$625.00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Depósito de garantía (Reembolsable)</span>
                  <span className="font-medium text-brand-text-dark">$150.00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Entrega y Montaje</span>
                  <span className="font-medium text-brand-text-dark">$150.00</span>
                </div>
                <div className="flex justify-between text-sm text-brand-secondary font-medium">
                  <span>Descuento Promocional</span>
                  <span>-$50.00</span>
                </div>
                <div className="h-px bg-slate-200 my-2"></div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-sm text-slate-500 font-medium mb-1">Total a Pagar</span>
                    <span className="text-xs text-slate-400">Impuestos incluidos</span>
                  </div>
                  <span className="text-3xl font-bold text-brand-primary">$875.00</span>
                </div>
              </div>

              <Button className="w-full  bg-[#0a8284]  hover:text-slate-600 text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand-primary/20 mb-4">
                Confirmar y Pagar
                <span className="material-symbols-outlined ml-2">lock</span>
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>Transacción encriptada y segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}