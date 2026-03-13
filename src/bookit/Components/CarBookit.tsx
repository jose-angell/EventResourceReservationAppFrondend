import { Link } from 'react-router'
import { Button } from '../../components/ui/button'
import { products } from '../../mocks/products.mock'
import { ItemCarBookit } from './ItemCarBookit'

export const CarBookit = () => {
  return (
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
          {products.map((item) => (
            <ItemCarBookit key={item.id} name={item.name} price={item.price} quantity={250} image={item.image} />
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
            <Button className="w-full bg-[#0a8284]  hover:bg-brand-primary-dark text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-brand-primary/20">
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
  )
}
