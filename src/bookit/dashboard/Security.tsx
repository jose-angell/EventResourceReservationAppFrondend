import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function DashboardSecurity() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Seguridad</h1>
        <p className="text-slate-500">Gestiona tu contraseña y la seguridad de tu cuenta.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100">
          <h2 className="text-xl font-bold text-brand-text-dark mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-primary">lock</span>
            Cambiar Contraseña
          </h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="currentPassword">Contraseña Actual</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">key</span>
                <Input id="currentPassword" type="password" placeholder="••••••••" className="w-full pl-11 pr-12 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="newPassword">Nueva Contraseña</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock_reset</span>
                  <Input id="newPassword" type="password" placeholder="••••••••" className="w-full pl-11 pr-12 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="confirmPassword">Confirmar Nueva Contraseña</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock_reset</span>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" className="w-full pl-11 pr-12 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto" />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <h4 className="text-sm font-semibold text-brand-text-dark mb-2">Requisitos de la contraseña:</h4>
              <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                <li>Mínimo 8 caracteres</li>
                <li>Al menos una letra mayúscula</li>
                <li>Al menos un número</li>
                <li>Al menos un carácter especial (!@#$%^&*)</li>
              </ul>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 px-8 text-base font-semibold shadow-lg shadow-brand-primary/20">
                Actualizar Contraseña
              </Button>
            </div>
          </form>
        </div>
        
        <div className="p-6 sm:p-8 bg-slate-50/50">
          <h2 className="text-xl font-bold text-brand-text-dark mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-secondary">devices</span>
            Sesiones Activas
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">computer</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text-dark">MacBook Pro - Chrome</h4>
                  <p className="text-sm text-slate-500">Madrid, España • Activa ahora</p>
                </div>
              </div>
              <span className="text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full">Sesión Actual</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text-dark">iPhone 13 - Safari</h4>
                  <p className="text-sm text-slate-500">Barcelona, España • Hace 2 horas</p>
                </div>
              </div>
              <Button variant="outline" className="text-brand-alert border-brand-alert/20 hover:bg-brand-alert/10 hover:text-brand-alert rounded-xl">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}