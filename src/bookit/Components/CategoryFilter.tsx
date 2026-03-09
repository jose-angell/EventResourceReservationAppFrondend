import { useState } from "react";

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ['Todos', 'Mobiliario', 'Iluminación', 'Sonido', 'Decoración', 'Carpas'];

  return (
    <div className="w-full">
      {/* Contenedor con scroll horizontal suave */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide snap-x cursor-grab active:cursor-grabbing">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 snap-start
                ${isActive 
                    ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                    : 'bg-slate-900 text-white shadow-md transform scale-105 dark:bg-white dark:text-slate-900' 
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}