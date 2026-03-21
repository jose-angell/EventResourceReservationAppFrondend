
import { Link } from "react-router"
import { Heart, ArrowRight } from "lucide-react"

import { Card } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"

export interface Product {
  id: number
  name: string
  category: string
  description: string
  pricePerDay: number
  image: string
  status: "available" | "low-stock" | "unavailable"
}

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          src={product.image}
        />
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-text-dark/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-text-dark dark:text-white shadow-sm border border-slate-100 dark:border-slate-700">
          {product.category}
        </div>
        <button className="absolute top-3 right-3 size-8 bg-white/90 dark:bg-text-dark/80 hover:bg-white dark:hover:bg-surface-dark rounded-full flex items-center justify-center text-slate-400 hover:text-alert transition-colors backdrop-blur-sm">
          <Heart className="size-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant={product.status === "available" ? "secondary" : "accent"}>
            <span className={`size-1.5 rounded-full ${product.status === "available" ? "bg-secondary" : "bg-accent"}`} />
            {product.status === "available" ? "Disponible" : "Pocas unidades"}
          </Badge>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
              Precio / día
            </span>
            <span className="text-2xl font-bold text-text-dark dark:text-white">
              ${product.pricePerDay.toFixed(2)}
            </span>
          </div>
          <Button
          render={<Link to={`/product/${product.id}`}  />}
          className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-bold uppercase tracking-wide transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2">
            <span>Reservar ahora</span>
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
