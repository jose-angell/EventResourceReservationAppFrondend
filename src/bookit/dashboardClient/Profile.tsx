import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function DashboardProfile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Editar Perfil</h1>
        <p className="text-slate-500">Actualiza tu información personal y preferencias de contacto.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center gap-6 bg-slate-50/50">
          <div className="relative group">
            <div className="size-24 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-3xl shadow-md shadow-brand-primary/20 overflow-hidden">
              JG
            </div>
            <button className="absolute bottom-0 right-0 size-8 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:text-brand-primary hover:border-brand-primary/30 transition-colors">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </button>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-brand-text-dark mb-1">José Gallardo</h2>
            <p className="text-sm text-slate-500 mb-3">joseGallardo.cor@gmail.com</p>
            <div className="flex gap-2 justify-center sm:justify-start">
              <span className="text-xs font-bold bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full">Usuario Verificado</span>
              <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Miembro desde 2023</span>
            </div>
          </div>
        </div>

        <form className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-brand-text-dark mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              <span className="material-symbols-outlined text-brand-primary">person</span>
              Información Personal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="firstName">Nombre</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">person</span>
                  <Input id="firstName" type="text" defaultValue="José" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="lastName">Apellidos</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">badge</span>
                  <Input id="lastName" type="text" defaultValue="Gallardo" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="email">Correo electrónico</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
                  <Input id="email" type="email" defaultValue="joseGallardo.cor@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="phone">Teléfono</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">phone</span>
                  <Input id="phone" type="tel" defaultValue="+34 600 000 000" className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-text-dark mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              <span className="material-symbols-outlined text-brand-primary">notifications</span>
              Preferencias de Notificación
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-brand-primary/30 bg-white transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-text-dark">Correos Promocionales</span>
                    <span className="text-sm text-slate-500">Recibe ofertas y descuentos exclusivos.</span>
                  </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-brand-primary transition-colors">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                </div>
              </label>
              
              <label className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-brand-primary/30 bg-white transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">sms</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-text-dark">Alertas SMS</span>
                    <span className="text-sm text-slate-500">Notificaciones sobre el estado de tus pedidos.</span>
                  </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm"></span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-slate-100 gap-4">
            <Button variant="outline" type="button" className="rounded-xl py-6 px-8 text-base font-semibold border-slate-200 text-slate-600 hover:bg-slate-50">
              Cancelar
            </Button>
            <Button type="submit" className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 px-8 text-base font-semibold shadow-lg shadow-brand-primary/20">
              Guardar Cambios
              <span className="material-symbols-outlined ml-2">save</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}