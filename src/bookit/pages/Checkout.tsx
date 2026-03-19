import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import {  
  Clock, 
  Shield, 
  ArrowRight,  
  CalendarIcon} from "lucide-react"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { format } from "date-fns"
import { Calendar } from "../../components/ui/calendar"

const cartItems = [
  {
    id: 1,
    name: "Silla Chiavari Dorada",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKOB8LgFxbrzQEWNgvJHAFyAyJO4oxJ6S8spSsbb6qdGbhWytUMuoIhWUBuw7POmVpZalespo-0VKGF46rdTBU22xFoo6oO5Yl2DdjRqqcp4TnE4rFL3wcH7Vu44nCTPkU4k6_t2QtXIOOVV6Pu1hyIIq5tvbA0gMVv5f6U3BlE4o4oYX6um70O_IHjV3IYl32Fcxl_jXQoyKyvUuGaoidUc8IZoaJi5_39I9tdHnVgyi5amMm4sBhjMQ9hbsToQ7CAblTEHhl9Pt1",
    quantity: 50,
    pricePerDay: 5.00,
    days: 3,
    total: 750.00
  },
  {
    id: 2,
    name: "Mesa Imperial Rustica",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYhoB8KMUZi6EuZ_BktpBXFGeogzlos9meNvGIipA3qOs2Wh-TAFDTT4LsZOV2aklLFRZKA_igNmF2TlB7xlH0kxPf9_vl8_ZY_AT7SzQOSa9NfJcnepDYSH0g3LRS2NtJ-ud44PwcPSmJyFYcRNSuq2U31IfKkdYI0ZqiP7HM0GeEjr7ijpxnz9wBw0OCtgRyfr9QsY79ZZ9U7tUKHUeA6jKO48QEg0SU2X7rDnw_4zHROx33F8-xrIo8GobcpIRzb3hsMKkmmqSt",
    quantity: 5,
    pricePerDay: 85.00,
    days: 3,
    total: 1275.00
  },
  {
    id: 3,
    name: "Kit Luces LED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmm27Bl--YAkVYk0lrYpzeMlHIzmNjO2H4OgU53rfsXUvK9zmgk-f1AJsIXi9ocd-Y-_Sa7KmYoNvSxkjlSKAO7DrYdSlYGqXg2SpP4MXQ3ElXhVRS2x0c5eqBFbJakwB51mUBkY8C02I-syKyW9rYOKZMzljfWgkhq-H3v1U4D_wxnSCtkEWGenwzkbv2-StHliw9SZTfk4ZwZ1MQYT0jFv4PGwk7ca-QtcyqSejyNjuHmjxLdu_qSUl7hwKwsMBUw_k0Mdl9a2Z",
    quantity: 2,
    pricePerDay: 45.00,
    days: 3,
    total: 270.00
  }
]

const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0)
const tax = subtotal * 0.21
const total = subtotal + tax

export function Checkout() {
 const [date, setDate] = useState<Date | undefined>(new Date())
 

  return (
    <div className="min-h-screen bg-surface flex flex-col w-full">
      

      {/* Main Content */}
      <main className="max-w-300 mx-auto px-6 py-10 flex-1">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Form */}
          <div className="flex-1 space-y-10">
            {/* Shipping Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-primary text-white size-8 rounded-full flex items-center justify-center text-sm">1</span>
                Información de Envío
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">Dirección de Entrega</label>
                  <Input 
                    className="w-full px-4 py-3 bg-white" 
                    placeholder="Calle, número, departamento..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">Ciudad / Estado</label>
                  <Input 
                    className="w-full px-4 py-3 bg-white" 
                    placeholder="Ej. Ciudad de México" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">Código Postal</label>
                  <Input 
                    className="w-full px-4 py-3 bg-white" 
                    placeholder="00000" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">Fecha de Entrega</label>
                  <Popover>
                    <PopoverTrigger render={
                      <button className="relative w-full group outline-none cursor-pointer">
                        <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5 group-hover:text-primary transition-colors z-10" />
                        <Input 
                          className="w-full px-4 py-3 pr-12 cursor-pointer bg-background" 
                          value={date ? format(date, "MMM dd, yyyy") : "Seleccionar fecha"} 
                          readOnly // Evita que se abra el teclado en móviles
                        />
                      </button>
                    } />

                    <PopoverContent className="w-auto p-0 shadow-2xl border-border" align="end">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={{ before: new Date() }}
                        className="rounded-xl border-none"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">Hora de Entrega</label>
                  <div className="relative">
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                    <select className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>09:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 03:00 PM</option>
                      <option>03:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-6 border-t border-border">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-primary text-white size-8 rounded-full flex items-center justify-center text-sm">2</span>
                Método de Pago
              </h2>
              <div className="space-y-4">
                {/* Credit Card Option */}
                <label className="relative flex items-center p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors group">
                  <input 
                    defaultChecked 
                    className="text-primary focus:ring-primary h-4 w-4 border-border" 
                    name="payment" 
                    type="radio" 
                  />
                  <div className="ml-4 flex-1">
                    <span className="block text-sm font-bold text-foreground">Tarjeta de Crédito / Débito</span>
                    <div className="flex gap-2 mt-2">
                      <img alt="Visa" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRfTpLfFqIRlNh13kL1KXd8oWAUJ0usZHflJB2g8M2Ts2cI00yvxxPk5Rk3GTZ13SJGt8ttLnSn8SICWTHrYYRS7DoIUweETet0wiB9yYBCRt-aISNEs54VxIYm0Tb_Q5V_VPzRJm0q58WImGqe0EPOpEoz3E3AUCjwguFLjdEa-VzrZTG8vQZAYiZfTvNiM_M-k16LVxXRT3AtkHw4VUrTgM6MygDVzPIvJfI8F_-h_oRmBqQDt3sqBvxfdem2mJUaTd7lB_sw4S" />
                      <img alt="Mastercard" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBj4UtdNY453IzI5KDZF8nhn5gab_ExVM3sUXawcSFA3X-Sk66S3WvqYbw8YVUaxZ5Z4K70_VHo33v3xQrgNOV3Xwy0lt_FWzlNNqdNeON6CWqW6f1XuqIrFw26kc7g8a6wtcQ6aKj4moCriLHBgn6T6-JExfKxQ_SMkj4uZR_wExBE1GgrslebbxukCiI0RFEDs6ny71UZ2HOhusMOdzw0g6ctJucBOD9fsUZkzs46q-OkYYw7Dxl29VrJVmoT62SZ4JTUEdAh1Ot" />
                    </div>
                  </div>
                </label>

                {/* Card Details Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-background p-6 rounded-xl border border-border">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Número de Tarjeta</label>
                    <Input 
                      className="w-full px-4 py-3" 
                      placeholder="0000 0000 0000 0000" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Fecha Expiración</label>
                    <Input 
                      className="w-full px-4 py-3" 
                      placeholder="MM/YY" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">CVC</label>
                    <Input 
                      className="w-full px-4 py-3" 
                      placeholder="123" 
                    />
                  </div>
                </div>

                {/* PayPal Option */}
                <label className="relative flex items-center p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    className="text-primary focus:ring-primary h-4 w-4 border-border" 
                    name="payment" 
                    type="radio" 
                  />
                  <div className="ml-4 flex items-center gap-2">
                    <span className="block text-sm font-bold text-foreground">PayPal</span>
                    <img alt="PayPal" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB93tZfXCsgtjTKjuTLhGA_bqi92Ksh1boWnPc-crAEtwfc15FDNNW51OECn_DztpxRn1rto4m0ec9bl1yvMQNqt55oWtRaCWc6mWXHCf7YGN7UMRWp0LuvFGEvG3De9J565_P4tw_jjhn7XZD2q0zPsSKNjnMHkEvsB68DkP7Irmslehht-pyZ8mGC-MXXthjzE6ANs25JDd-8wvAHrB4mHQ25AtqlPjLx6VW_HAkTkUk03fS_VeMR4qzEAOQu3UIxVRNeIH88g2ng" />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-105 shrink-0">
            <div className="bg-background rounded-2xl border border-border shadow-xl overflow-hidden sticky top-24">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">Mi Presupuesto</h3>
                <p className="text-sm text-muted-foreground mt-1">Revisa los detalles de tu reserva</p>
              </div>

              {/* Cart Items */}
              <div className="p-6 space-y-6 max-h-100 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden shrink-0 border border-border">
                      <img 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                        src={item.image} 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Cant: {item.quantity} x ${item.pricePerDay.toFixed(2)}/día
                      </p>
                      <div className="flex justify-between items-end mt-2">
                        <span className="text-xs font-medium text-primary">{item.days} días</span>
                        <span className="text-sm font-bold text-foreground">${item.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="p-6 bg-muted/50 space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Seguro e IVA (21%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 mt-2 border-t border-border flex justify-between items-center">
                  <span className="text-base font-bold text-foreground">Total a Pagar</span>
                  <span className="text-2xl font-extrabold text-accent">${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-6 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-sm">
                  Confirmar y Pagar
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="mt-4 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium uppercase">
                    <Shield className="size-4" />
                    Garantía de satisfacción BookIt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">© 2023 BookIt Marketplace. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
