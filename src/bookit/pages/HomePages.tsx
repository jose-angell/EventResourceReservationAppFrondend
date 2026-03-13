import { Button } from "../../components/ui/button";
import { products } from "../../mocks/products.mock";
import CategoryFilter from "../Components/CategoryFilter";
import { ResourceCard } from "../Components/ResourceCard";
import { CarBookit } from "../Components/CarBookit";

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

      <CarBookit />
    </main>
  );
}