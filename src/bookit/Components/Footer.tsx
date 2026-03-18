
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 text-primary flex items-center justify-center">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19.25 9.47L14.39 13.12L15.78 19.35L12 15.65L8.22 19.35L9.61 13.12L4.75 9.47L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-text-dark">BookIt</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">Transformamos tus ideas en eventos inolvidables con el mejor equipo y mobiliario del mercado.</p>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Mobiliario</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Iluminación</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sonido</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Decoración</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-350 mx-auto mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          <p>© 2024 BookIt. Todos los derechos reservados.</p>
        </div>
      </footer>
  )
}
