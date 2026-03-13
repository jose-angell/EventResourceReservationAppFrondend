import { Link } from 'react-router'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import type { Resource } from '../../interfaces/Resource'

export const ResourceCard = (resource: Resource) => {
  return (
    <Link to={`/resource/${resource.id}`} key={resource.id} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-primary/20 transition-all duration-300">
        <div className="aspect-4/3 bg-slate-100 relative overflow-hidden">
            <img src={resource.image} alt={resource.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 left-3">
            <Badge className={`${resource.statusColor} border-none font-medium px-2.5 py-0.5`}>
                {resource.status}
            </Badge>
            </div>
            <button className="absolute top-3 right-3 size-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-brand-alert hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
        </div>
        <div className="p-5 flex flex-col flex-1">
            <div className="text-xs font-semibold text-brand-secondary mb-1 uppercase tracking-wider">{resource.category}</div>
            <h3 className="font-bold text-brand-text-dark text-lg mb-2 line-clamp-1 group-hover:text-brand-primary transition-colors">{resource.name}</h3>
            <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">{resource.description}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
            <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Precio / día</span>
                <span className="font-bold text-xl text-brand-primary">${resource.price.toFixed(2)}</span>
            </div>
            <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl size-10 p-0 shadow-md shadow-brand-primary/20">
                <span className="material-symbols-outlined text-black">add</span>
            </Button>
            </div>
        </div>
    </Link>
  )
}
