import { Search, Calendar, ChevronDown } from "lucide-react"
import { Button } from "../../components/ui/button"

const categories = [
  "Todos",
  "Rango de precios",
  "Iluminación",
  "Mobiliario",
  "Sonido",
  "Audiovisual",
  "Carpas",
]

export function SearchSection() {
  return (
    <section className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 px-6 py-8">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-text-dark dark:text-white">
              Encuentra el equipo perfecto
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Más de 5,000 artículos disponibles para tu evento.
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white dark:bg-background-dark p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-2">
          {/* Search Input */}
          <div className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            <Search className="size-5 text-slate-400 mr-3" />
            <input
              className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-text-dark dark:text-white placeholder-slate-400"
              placeholder="¿Qué estás buscando? (ej. Silla Chiavari)"
              type="text"
            />
          </div>

          {/* Date Picker */}
          <div className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 gap-4">
            <div className="flex items-center gap-2 flex-1">
              <Calendar className="size-4 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-0.5">
                  Desde
                </span>
                <span className="text-sm font-medium text-text-dark dark:text-white leading-none">
                  Oct 24, 2023
                </span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 flex-1">
              <div className="flex flex-col items-end w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-0.5">
                  Hasta
                </span>
                <span className="text-sm font-medium text-text-dark dark:text-white leading-none">
                  Oct 27, 2023
                </span>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button className="h-12 px-8">Buscar</Button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                index === 0
                  ? "bg-text-dark text-white dark:bg-white dark:text-text-dark font-bold shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:bg-surface-dark dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {category}
              {category === "Rango de precios" && (
                <ChevronDown className="size-4" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
