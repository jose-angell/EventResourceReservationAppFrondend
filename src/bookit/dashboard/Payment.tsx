import { Button } from "../../components/ui/button";

export default function DashboardPayment() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Métodos de Pago</h1>
          <p className="text-slate-500">Gestiona tus tarjetas y opciones de facturación.</p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl py-6 px-6 shadow-lg shadow-brand-primary/20">
          <span className="material-symbols-outlined mr-2">add</span>
          Añadir Tarjeta
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-primary/20 rounded-tr-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">credit_card</span>
              <span className="font-bold tracking-widest">VISA</span>
            </div>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Principal</span>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-slate-400 mb-1">Número de tarjeta</p>
            <p className="text-xl font-mono tracking-widest">•••• •••• •••• 4242</p>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-slate-400 mb-1">Titular</p>
              <p className="font-semibold tracking-wide uppercase">José Gallardo</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Expira</p>
              <p className="font-semibold tracking-wide">12/25</p>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="size-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
            <button className="size-8 rounded-full bg-brand-alert/80 hover:bg-brand-alert backdrop-blur-sm flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-2 text-brand-text-dark">
              <span className="material-symbols-outlined text-3xl">credit_card</span>
              <span className="font-bold tracking-widest">MASTERCARD</span>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-1">Número de tarjeta</p>
            <p className="text-xl font-mono tracking-widest text-brand-text-dark">•••• •••• •••• 8899</p>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-slate-500 mb-1">Titular</p>
              <p className="font-semibold tracking-wide uppercase text-brand-text-dark">José Gallardo</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Expira</p>
              <p className="font-semibold tracking-wide text-brand-text-dark">08/24</p>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-xs font-bold text-brand-primary hover:text-brand-primary-dark bg-brand-primary/10 px-3 py-1.5 rounded-full transition-colors">
              Hacer Principal
            </button>
            <button className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
            <button className="size-8 rounded-full bg-brand-alert/10 hover:bg-brand-alert/20 text-brand-alert flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-lg font-bold text-brand-text-dark flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-primary">receipt</span>
            Datos de Facturación
          </h2>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <span className="block text-sm text-slate-500 font-medium mb-1">Nombre / Razón Social</span>
              <span className="font-semibold text-brand-text-dark">José Gallardo</span>
            </div>
            <div>
              <span className="block text-sm text-slate-500 font-medium mb-1">NIF / CIF</span>
              <span className="font-semibold text-brand-text-dark">12345678Z</span>
            </div>
            <div className="sm:col-span-2">
              <span className="block text-sm text-slate-500 font-medium mb-1">Dirección Fiscal</span>
              <span className="font-semibold text-brand-text-dark">Calle Principal 123, 4ºB, 28000 Madrid, España</span>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5">
            <span className="material-symbols-outlined mr-2">edit</span>
            Editar Datos
          </Button>
        </div>
      </div>
    </div>
  );
}