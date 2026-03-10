import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface-light p-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-brand-primary/5 border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-secondary/5 rounded-br-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-tl-full -z-10"></div>

        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center size-14 bg-brand-primary/10 text-brand-primary rounded-2xl mb-6">
            <span className="material-symbols-outlined text-4xl">celebration</span>
          </Link>
          <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Crea tu cuenta</h1>
          <p className="text-slate-500">Únete a BookIt y empieza a organizar eventos increíbles</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="firstName">Nombre</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">person</span>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="lastName">Apellidos</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">badge</span>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Tus apellidos" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="email">Correo electrónico</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="phone">Teléfono</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">phone</span>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+34 600 000 000" 
                className="w-full pl-11 pr-4 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-brand-text-dark mb-2" htmlFor="password">Contraseña</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
              <Input 
                id="password" 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                className="w-full pl-11 pr-12 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-brand-secondary">check_circle</span>
              Debe contener al menos una mayúscula, un número y un símbolo.
            </p>
          </div>

          <div className="flex items-start gap-3 mt-6">
            <input type="checkbox" id="terms" className="mt-1 rounded text-brand-primary focus:ring-brand-primary border-slate-300 size-4 shrink-0" />
            <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
              He leído y acepto los <a href="#" className="font-semibold text-brand-primary hover:underline">Términos de Servicio</a> y la <a href="#" className="font-semibold text-brand-primary hover:underline">Política de Privacidad</a> de BookIt.
            </label>
          </div>

          <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand-primary/20 mt-8">
            Crear Cuenta
            <span className="material-symbols-outlined ml-2">person_add</span>
          </Button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-bold text-brand-primary hover:text-brand-primary-dark transition-colors">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}