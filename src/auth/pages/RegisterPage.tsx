import { 
  PartyPopper, 
  User, 
  SquareUser, 
  Mail, 
  Phone, 
  Lock, 
  LockKeyhole, 
  ArrowRight 
} from "lucide-react"

// Importaciones de shadcn/ui (Ajusta las rutas según tu estructura)
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { Link } from "react-router"

export interface SignUpProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
}

// export default function SignUp({ onSubmit, onGoogleLogin, onAppleLogin }: SignUpProps) {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (onSubmit) onSubmit(e);
//   };

export default function RegisterPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-slate-100 min-h-screen flex items-center justify-center p-4 font-body">
      <div className="w-full max-w-2xl">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {/* Header de la Tarjeta */}
          <div className="p-8 md:p-10">
            <div className="flex flex-col items-center mb-8">
              <div className="size-14 text-primary bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
                <PartyPopper className="size-8" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-text-dark dark:text-white">BookIt</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm text-center">
                Crea tu cuenta para empezar a organizar eventos increíbles
              </p>
            </div>

            {/* Formulario */}
            <form 
            // onSubmit={handleSubmit}
             className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Nombre */}
                <div className="space-y-1.5">
                  <Label htmlFor="firstname" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Nombre
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="firstname" 
                      placeholder="Juan" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>

                {/* Apellido */}
                <div className="space-y-1.5">
                  <Label htmlFor="lastname" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Apellido
                  </Label>
                  <div className="relative">
                    <SquareUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="lastname" 
                      placeholder="Pérez" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ejemplo@correo.com" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+34 600 000 000" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>

                {/* Contraseña */}
                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>

                {/* Confirmar Contraseña */}
                <div className="space-y-1.5">
                  <Label htmlFor="confirm-password" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                    Confirmar contraseña
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 z-10" />
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-11 pr-4 py-6 bg-slate-50 dark:bg-background-dark/50 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 focus-visible:border-primary" 
                    />
                  </div>
                </div>
              </div>

              {/* Checkbox de Términos */}
              <div className="flex items-start mt-4 space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400 cursor-pointer">
                  Acepto los <a className="text-secondary hover:underline dark:text-secondary" href="#">Términos de Servicio</a> y la <a className="text-secondary hover:underline dark:text-secondary" href="#">Política de Privacidad</a>.
                </Label>
              </div>

              {/* Botón Submit */}
              <Button type="submit" className="w-full py-6 mt-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group text-base">
                Crear Cuenta
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Separador */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white dark:bg-surface-dark text-slate-400 font-medium">O registrarse con</span>
              </div>
            </div>

            {/* Botones Sociales */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
              // onClick={onGoogleLogin}
               type="button" variant="outline" className="flex items-center justify-center gap-2 py-6 bg-background-dark dark:bg-slate-900 text-white hover:text-white rounded-lg hover:bg-black transition-colors border-transparent">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-bold">Google</span>
              </Button>
              <Button 
              // onClick={onAppleLogin}
               type="button" variant="outline" className="flex items-center justify-center gap-2 py-6 bg-background-dark dark:bg-slate-900 text-white hover:text-white rounded-lg hover:bg-black transition-colors border-transparent">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.13 2.31-.89 3.59-.81 1.57.12 2.72.75 3.42 1.93-3.21 1.91-2.7 6.13.51 7.42-.65 1.63-1.52 3.19-2.6 4.65zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
                </svg>
                <span className="text-sm font-bold">Apple</span>
              </Button>
            </div>
          </div>

          {/* Footer de la Tarjeta */}
          <div className="px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              ¿Ya tienes cuenta? 
              <Link to="/auth/login" className="text-accent font-bold hover:underline ml-1" >Inicia sesión</Link>
            </p>
          </div>
        </div>

        {/* Links Externos */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-slate-400 font-medium">
          <a className="hover:text-primary transition-colors" href="/privacy">Política de Privacidad</a>
          <a className="hover:text-primary transition-colors" href="/terms">Términos de Servicio</a>
          <a className="hover:text-primary transition-colors" href="/help">Centro de Ayuda</a>
        </div>
      </div>
    </div>
  )
}