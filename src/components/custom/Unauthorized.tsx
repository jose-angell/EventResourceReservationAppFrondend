import { Link } from "lucide-react";
import { Button } from "../ui/button";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface-light p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-brand-alert/5 border border-slate-100 p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-brand-alert"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-alert/5 rounded-full -z-10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-alert/5 rounded-full -z-10 blur-2xl"></div>

        <div className="size-24 bg-brand-alert/10 text-brand-alert rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-5xl">gpp_bad</span>
        </div>
        
        <h1 className="text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">Acceso Denegado</h1>
        <h2 className="text-xl font-semibold text-brand-alert mb-4">Error 403 - No Autorizado</h2>
        
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          Lo sentimos, no tienes los permisos necesarios para acceder a esta página. 
          Si crees que esto es un error, por favor contacta con el administrador del sistema.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 px-8 text-base font-semibold shadow-lg shadow-brand-primary/20">
              <span className="material-symbols-outlined mr-2">home</span>
              Volver al Inicio
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="w-full sm:w-auto rounded-xl py-6 px-8 text-base font-semibold border-slate-200 text-slate-600 hover:bg-slate-50">
              <span className="material-symbols-outlined mr-2">login</span>
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}