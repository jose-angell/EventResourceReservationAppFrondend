import { Link } from "react-router";

export default function CustomHeader() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 h-16 shrink-0">
      <div className="h-full px-6 flex items-center justify-between max-w-full mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-8 text-brand-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">celebration</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-brand-text-dark">BookIt</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Iluminación</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Mobiliario</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Sonido</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Decoración</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link to="/profile" className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
          <div className="lg:hidden">
            <button className="relative flex items-center justify-center size-10 rounded-full bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 transition-colors">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-1 right-1 size-2.5 bg-brand-accent rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}