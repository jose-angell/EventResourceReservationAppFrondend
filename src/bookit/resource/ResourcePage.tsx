import { Link, useParams } from "react-router";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";




export default function ProductDetail() {
  const { id } = useParams();

  return (
    <main className="flex-1 bg-brand-surface-light py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">home</span>
            Inicio
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link to="/" className="hover:text-brand-primary transition-colors">Mobiliario</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-brand-text-dark font-medium">Silla Chiavari Dorada</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50">
              <div className="aspect-square rounded-2xl bg-white border border-slate-200 overflow-hidden mb-4 relative group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2" 
                  alt="Silla Chiavari Dorada" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-brand-secondary text-white border-none px-3 py-1 font-medium">
                  Disponible
                </Badge>
                <button className="absolute top-4 right-4 size-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-brand-alert hover:bg-white shadow-sm transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <button key={i} className={`aspect-square rounded-xl border-2 overflow-hidden ${i === 1 ? 'border-brand-primary' : 'border-slate-200 hover:border-brand-primary/50'} transition-colors`}>
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2" 
                      alt={`Thumbnail ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 lg:p-10 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Mobiliario</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-brand-accent">star</span>
                    4.9 (128 reseñas)
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-brand-text-dark mb-4 leading-tight">Silla Chiavari Dorada con Cojín Blanco</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Silla clásica de estilo chiavari en acabado dorado brillante. Perfecta para bodas, banquetes y eventos de gala. Incluye cojín de alta densidad tapizado en tela blanca antimanchas para máxima comodidad de sus invitados.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                  <div className="size-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">straighten</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium mb-1">Dimensiones</span>
                    <span className="text-sm font-semibold text-brand-text-dark">40 x 40 x 92 cm</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                  <div className="size-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">weight</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium mb-1">Peso soportado</span>
                    <span className="text-sm font-semibold text-brand-text-dark">Hasta 150 kg</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                  <div className="size-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium mb-1">Stock disponible</span>
                    <span className="text-sm font-semibold text-brand-text-dark">+500 unidades</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                  <div className="size-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium mb-1">Transporte</span>
                    <span className="text-sm font-semibold text-brand-text-dark">Apilable (x10)</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-6">
                  <div>
                    <span className="block text-sm text-slate-500 font-medium mb-1">Precio de alquiler</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-brand-primary">$5.00</span>
                      <span className="text-slate-500 font-medium">/ día</span>
                    </div>
                    <span className="block text-xs text-slate-400 mt-1">Descuentos aplicables para +100 uds.</span>
                  </div>
                  
                  <div className="flex items-center bg-slate-50 rounded-xl border border-slate-200 p-1 w-full sm:w-auto">
                    <button className="size-10 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors rounded-lg hover:bg-white hover:shadow-sm">
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <input type="number" defaultValue="50" className="w-16 text-center text-lg font-bold text-brand-text-dark bg-transparent border-none focus:ring-0" />
                    <button className="size-10 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors rounded-lg hover:bg-white hover:shadow-sm">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 h-14 bg-secondary hover:bg-[#0a8284] text-slate-600 hover:text-white font-bold rounded-xl shadow-lg shadow-secondary/20 transition-all flex items-center justify-center gap-3 text-lg group">
                    <span className="material-symbols-outlined mr-2">shopping_cart</span>
                    Añadir al Presupuesto
                  </Button>
                  <Button variant="outline" className="size-14 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-primary shrink-0">
                    <span className="material-symbols-outlined">share</span>
                  </Button>
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-100 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                        <span>Garantía de calidad BookIt</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
                        <span>Entrega y montaje disponible</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}