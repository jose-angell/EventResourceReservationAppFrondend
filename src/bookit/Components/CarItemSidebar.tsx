import { Minus, Plus, Trash2 } from "lucide-react";

interface Props {
  item: {
    id: number;
    name: string;
    category: string;
    quantity: number;
    pricePerDay: number;
    image: string;
  };
  rentalDays: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

export const CartItemSidebar = ({ item, rentalDays, onIncrement, onDecrement, onRemove }:Props) => {
  const itemTotal = item.pricePerDay * item.quantity * rentalDays;

  return (
    <div className="flex gap-3 relative group">
      <div className="w-16 h-16 rounded-md bg-slate-100 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
        <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-bold text-text-dark dark:text-white line-clamp-1">{item.name}</h4>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-slate-400 hover:text-alert transition-colors"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{item.category}</p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-surface-dark">
            <button 
              onClick={() => onDecrement(item.id)}
              className="px-2 py-0.5 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500"
            >
              <Minus className="size-3" />
            </button>
            <span className="px-1 text-xs font-medium text-text-dark dark:text-white w-6 text-center">
              {item.quantity}
            </span>
            <button 
              onClick={() => onIncrement(item.id)}
              className="px-2 py-0.5 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500"
            >
              <Plus className="size-3" />
            </button>
          </div>
          <span className="text-sm font-bold text-text-dark dark:text-white">
            ${itemTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}