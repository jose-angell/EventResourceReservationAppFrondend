import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";



export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface-light p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-brand-primary/5 border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-secondary/5 rounded-tr-full -z-10"></div>

        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center size-14 bg-brand-primary/10 text-brand-primary rounded-2xl mb-6">
            <span className="material-symbols-outlined text-4xl">celebration</span>
          </Link>
          <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-slate-500">Inicia sesión para gestionar tus reservas</p>
        </div>

        <form className="space-y-5">
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
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-brand-text-dark" htmlFor="password">Contraseña</label>
              <a href="#" className="text-sm font-medium text-brand-primary hover:text-brand-primary-dark transition-colors">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-11 pr-12 py-3 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 bg-slate-50/50 hover:bg-white transition-colors h-auto"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="remember" className="rounded text-brand-primary focus:ring-brand-primary border-slate-300 size-4" />
            <label htmlFor="remember" className="text-sm text-slate-600">Mantener sesión iniciada</label>
          </div>

          <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand-primary/20 mt-8">
            Iniciar Sesión
            <span className="material-symbols-outlined ml-2">login</span>
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="font-bold text-brand-primary hover:text-brand-primary-dark transition-colors">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
