import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { products } from "../../mocks/products.mock";
import CategoryFilter from "../Components/CategoryFilter";
import { ResourceCard } from "../Components/ResourceCard";

export default function HomePage() {
  return (
    <main className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto bg-brand-surface-light">
        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-brand-text-dark mb-2">Encuentra el equipo ideal</h2>
              <p className="text-slate-500">Explora nuestro catálogo para tu próximo evento</p>
            </div>
            <div className="w-full md:w-auto flex gap-3">
              <div className="relative flex-1 md:w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  type="text" 
                  placeholder="Buscar sillas, mesas, focos..." 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white transition-all shadow-sm"
                />
              </div>
              <Button variant="outline" className="rounded-xl px-4 h-auto border-slate-200 text-slate-600 hover:bg-slate-50">
                <span className="material-symbols-outlined mr-2">tune</span>
                Filtros
              </Button>
            </div>
          </div>

         
          <CategoryFilter/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(resource => (
              <ResourceCard
                key={resource.id}
                id={resource.id} name={resource.name} price={resource.price} image={resource.image} category={resource.category} description={resource.description} status={resource.status} statusColor={resource.statusColor}               
               />
            ))}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <aside className="hidden lg:flex w-95 bg-white border-l border-slate-200 flex-col shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-brand-text-dark">Mi Presupuesto</h2>
              <p className="text-xs text-slate-500 font-medium">3 artículos seleccionados</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-brand-alert transition-colors">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:border-brand-primary/20 transition-colors group">
              <div className="size-20 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2" alt="Item" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 py-0.5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm text-brand-text-dark line-clamp-1 pr-2">Silla Chiavari Dorada</h4>
                  <button className="text-slate-300 hover:text-brand-alert transition-colors">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
                <div className="text-brand-primary font-bold text-sm mb-auto">$5.00 <span className="text-xs text-slate-400 font-normal">/día</span></div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center bg-slate-50 rounded-lg border border-slate-200">
                    <button className="size-7 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-brand-text-dark">50</span>
                    <button className="size-7 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                  <span className="font-bold text-brand-text-dark text-sm">$250.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal (3 días)</span>
              <span className="font-medium text-brand-text-dark">$855.00</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>Depósito de garantía</span>
              <span className="font-medium text-brand-text-dark">$150.00</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>Transporte (Estimado)</span>
              <span className="font-medium text-brand-text-dark">$45.00</span>
            </div>
            <div className="h-px bg-slate-200 my-2"></div>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-sm text-slate-500 font-medium mb-1">Total estimado</span>
                <span className="text-xs text-slate-400">Impuestos incluidos</span>
              </div>
              <span className="text-2xl font-bold text-brand-primary">$1,050.00</span>
            </div>
          </div>
          <Link to="/checkout">
            <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand-primary/20">
              Solicitar Reserva
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Button>
          </Link>
          <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Pago seguro y garantizado
          </p>
        </div>
      </aside>
    </main>
  );
}