import * as React from "react"
import { PartyPopper, Search, User, ShoppingBag, Lock, ArrowLeft } from "lucide-react"

// --- ASUMIENDO IMPORTACIONES DE SHADCN/UI ---
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { CustomLogo } from "./CustomLogo"

export const UnauthorizedAccess = () => {
  return (
    <div className="bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 font-display antialiased min-h-screen flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 h-16 shrink-0">
        <div className="h-full px-6 flex items-center justify-between max-w-[1920px] mx-auto">
          
          {/* Logo */}
          <CustomLogo subTitle="BookIt"/>
          
          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Iluminación</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Mobiliario</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Sonido</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Decoración</a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
              <Search className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
              <User className="size-5" />
            </Button>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                <ShoppingBag className="size-5" />
                <span className="absolute top-1 right-1 size-2.5 bg-accent rounded-full border-2 border-white dark:border-surface-dark"></span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-1 items-center justify-center p-6 overflow-hidden bg-surface-light dark:bg-background-dark relative">
        
        {/* Background Decorative Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Error Card */}
        <div className="relative w-full max-w-lg mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Badge 403 */}
          <div className="absolute top-6 right-6">
            <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-mono">
              Error 403
            </Badge>
          </div>

          {/* Icon Area with Pulse Effect */}
          <div className="mb-8 relative inline-block mt-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full"></div>
            <div className="relative z-10 size-20 flex items-center justify-center text-primary mx-auto">
              <Lock className="size-12" />
            </div>
          </div>
          
          {/* Text Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-4 tracking-tight">
            Acceso No Autorizado
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Lo sentimos, no tienes los permisos necesarios para ver esta página o el contenido que buscas está restringido.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Button className="w-full py-6 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group">
              <ArrowLeft className="size-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Button>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors py-2">
              Contactar soporte
            </a>
          </div>
          
        </div>
      </main>

    </div>
  )
}