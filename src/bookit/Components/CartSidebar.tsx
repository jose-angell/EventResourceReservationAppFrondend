import { Receipt, Calendar, ArrowRight, Lock } from "lucide-react"
import { Button } from "../../components/ui/button"
import { CartItemSidebar } from "./CarItemSidebar"
import { useState } from "react"

interface CartItem {
  id: number
  name: string
  category: string
  quantity: number
  pricePerDay: number
  image: string
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Silla Chiavari Dorada",
    category: "Mobiliario",
    quantity: 50,
    pricePerDay: 5.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKOB8LgFxbrzQEWNgvJHAFyAyJO4oxJ6S8spSsbb6qdGbhWytUMuoIhWUBuw7POmVpZalespo-0VKGF46rdTBU22xFoo6oO5Yl2DdjRqqcp4TnE4rFL3wcH7Vu44nCTPkU4k6_t2QtXIOOVV6Pu1hyIIq5tvbA0gMVv5f6U3BlE4o4oYX6um70O_IHjV3IYl32Fcxl_jXQoyKyvUuGaoidUc8IZoaJi5_39I9tdHnVgyi5amMm4sBhjMQ9hbsToQ7CAblTEHhl9Pt1",
  },
  {
    id: 2,
    name: "Mesa Imperial Rustica",
    category: "Mobiliario",
    quantity: 5,
    pricePerDay: 85.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYhoB8KMUZi6EuZ_BktpBXFGeogzlos9meNvGIipA3qOs2Wh-TAFDTT4LsZOV2aklLFRZKA_igNmF2TlB7xlH0kxPf9_vl8_ZY_AT7SzQOSa9NfJcnepDYSH0g3LRS2NtJ-ud44PwcPSmJyFYcRNSuq2U31IfKkdYI0ZqiP7HM0GeEjr7ijpxnz9wBw0OCtgRyfr9QsY79ZZ9U7tUKHUeA6jKO48QEg0SU2X7rDnw_4zHROx33F8-xrIo8GobcpIRzb3hsMKkmmqSt",
  },
  {
    id: 3,
    name: "Kit Luces LED",
    category: "Iluminación",
    quantity: 2,
    pricePerDay: 45.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmm27Bl--YAkVYk0lrYpzeMlHIzmNjO2H4OgU53rfsXUvK9zmgk-f1AJsIXi9ocd-Y-_Sa7KmYoNvSxkjlSKAO7DrYdSlYGqXg2SpP4MXQ3ElXhVRS2x0c5eqBFbJakwB51mUBkY8C02I-syKyW9rYOKZMzljfWgkhq-H3v1U4D_wxnSCtkEWGenwzkbv2-StHliw9SZTfk4ZwZ1MQYT0jFv4PGwk7ca-QtcyqSejyNjuHmjxLdu_qSUl7hwKwsMBUw_k0Mdl9a2Z",
  },
]

const rentalDays = 3

export function CartSidebar() {
  const [items, setItems] = useState<CartItem[]>(cartItems);
  const subtotalPerDay = items.reduce(
    (acc, item) => acc + item.pricePerDay * item.quantity,
    0
  )
  const subtotal = subtotalPerDay * rentalDays
  const tax = subtotal * 0.16
  const total = subtotal + tax

  const handleIncrement = (id: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  const handleDecrement = (id: number) => {
    setItems(prev => prev.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };
  const handleRemove = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  return (
    <aside className="w-95 shrink-0 bg-white dark:bg-surface-dark border-l border-slate-200 dark:border-slate-800 hidden lg:flex flex-col shadow-xl z-20">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-dark dark:text-white flex items-center gap-2">
            <Receipt className="size-5 text-primary" />
            Mi Presupuesto
          </h2>
          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold">
            {items.length} items
          </span>
        </div>
        <div className="mt-4 p-3 bg-surface-light dark:bg-background-dark rounded-lg flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Calendar className="size-4" />
            <span>{rentalDays} Días</span>
          </div>
          <span className="text-slate-400 dark:text-slate-500 text-xs">
            Oct 24 - Oct 27
          </span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {items.map((item, index) => (
          <div key={item.id}>
            <CartItemSidebar 
              item={item} 
              rentalDays={rentalDays}
              onIncrement={handleIncrement} 
              onDecrement={handleDecrement}
              onRemove={handleRemove}
            />
            {index < cartItems.length - 1 && (
              <hr className="border-dashed border-slate-200 dark:border-slate-700 mt-4" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 bg-surface-light dark:bg-surface-dark/50 border-t border-slate-200 dark:border-slate-800">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Subtotal (por día)</span>
            <span>${subtotalPerDay.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Días de alquiler</span>
            <span>x {rentalDays}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Seguro e IVA (21%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex justify-between items-end mb-5 pt-3 border-t border-slate-200 dark:border-slate-800">
          <span className="text-text-dark dark:text-white font-bold">
            Total Estimado
          </span>
          <span className="text-2xl font-bold text-accent">
            ${total.toFixed(2)}
          </span>
        </div>
        <Button className="w-full h-12 shadow-lg shadow-primary/20 group text-white">
          <span>Tramitar Reserva</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
          <Lock className="size-3" /> Pago 100% Seguro
        </p>
      </div>
    </aside>
  )
}
