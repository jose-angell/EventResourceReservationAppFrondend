import { Search,  ChevronDown, CalendarIcon } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import { Slider } from "../../components/ui/slider";

const categories = [
  "Todos",
  "Rango de precios",
  "Iluminación",
  "Mobiliario",
  "Sonido",
  "Audiovisual",
  "Carpas",
]

export const SearchSection = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);
 const [activeCategory, setActiveCategory] = useState("Todos");
  return (
    <section className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 px-6 py-8">
      <div className="max-w-300 mx-auto w-full flex flex-col gap-6">
        {/* Header - Igual */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-text-dark dark:text-white">Encuentra el equipo perfecto</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Más de 5,000 artículos disponibles.</p>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white dark:bg-background-dark p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-3">
          {/* Input de Búsqueda */}
          <div className="flex-[1.5] flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            <Search className="size-5 text-slate-400 mr-3" />
            <input className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-text-dark dark:text-white" placeholder="¿Qué buscas?" type="text" />
          </div>

          {/* Selector de Fechas */}
          <Popover>
            <PopoverTrigger render={
              <button className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group outline-none">
                <div className="flex items-center gap-2 flex-1 min-w-max">
                   <CalendarIcon className="size-4 text-slate-400" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Desde</span>
                    <span className="text-sm font-medium text-text-dark dark:text-white whitespace-nowrap">
                      {date?.from ? format(date.from, "dd MMM, y") : "Seleccionar"}
                    </span>
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2" />
                <div className="flex items-center gap-2 flex-1 min-w-max">
                  <div className="flex flex-col items-end w-full text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Hasta</span>
                    <span className="text-sm font-medium text-text-dark dark:text-white whitespace-nowrap">
                      {date?.to ? format(date.to, "dd MMM, y") : "Seleccionar"}
                    </span>
                  </div>
                </div>
              </button>
            }>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                disabled={{ before: new Date() }}
              />
            </PopoverContent>
          </Popover>

          <Button className="h-12 px-8 text-white font-bold">Buscar</Button>
        </div>

        {/* Categorías y Filtro de Precio */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            if (category === "Rango de precios") {
              return (
                <Popover key={category}>
                  <PopoverTrigger render={
                    <button className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-2 outline-none transition-all dark:border-slate-700 dark:text-slate-300">
                      {category}
                      <ChevronDown className="size-4" />
                    </button>
                  }>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-6 text-slate-600 dark:bg-surface-dark shadow-xl border-slate-900 dark:border-slate-800">
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm text-text-dark dark:text-white">Presupuesto por día</h4>
                      <Slider 
                        defaultValue={[0, 1000]} 
                        max={5000} 
                        step={50} 
                        value={priceRange}
                        onValueChange={(value) => {
                        if (Array.isArray(value)) {
                          setPriceRange(value);
                        }
                      }}
                       className="mx-auto w-full max-w-xs text-slate-600"
                      />
                      <div className="flex justify-between text-xs font-bold text-primary">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }
            const isActive = activeCategory === category;
            return (
              <button
               key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 snap-start
                  ${isActive 
                    ? 'bg-slate-900 text-white shadow-md transform scale-105 dark:bg-white dark:text-slate-900' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
