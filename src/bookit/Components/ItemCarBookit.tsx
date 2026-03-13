
interface Props {
    name: string,
    price: number,
    quantity: number,
    image: string
}

export const ItemCarBookit = ({name, price, quantity, image}:Props) => {
  return (
    <div className="flex gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:border-brand-primary/20 transition-colors group">
              <div className="size-20 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                <img src={image} alt="Item" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 py-0.5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm text-brand-text-dark line-clamp-1 pr-2">{name}</h4>
                  <button className="text-slate-300 hover:text-brand-alert transition-colors">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
                <div className="text-brand-primary font-bold text-sm mb-auto">${price} <span className="text-xs text-slate-400 font-normal">/día</span></div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center bg-slate-50 rounded-lg border border-slate-200">
                    <button className="size-7 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-brand-text-dark">{quantity}</span>
                    <button className="size-7 flex items-center justify-center text-slate-500 hover:text-brand-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                  <span className="font-bold text-brand-text-dark text-sm">${price * quantity}</span>
                </div>
              </div>
            </div>
  )
}
