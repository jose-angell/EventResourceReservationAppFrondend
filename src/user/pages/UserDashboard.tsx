import { 
  Search, CircleUser, ShoppingBag, 
  LayoutDashboard, Shield, CreditCard, History, 
  LogOut, Camera, MapPin, Phone, Pencil, 
  FileText, Heart, ChevronLeft, ChevronRight, X 
} from "lucide-react"
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { CustomLogo } from "../../components/custom/CustomLogo";

// Importaciones de shadcn/ui


// --- Interfaces (Tipado Fuerte) ---
export interface Order {
  id: string;
  date: string;
  status: "Confirmado" | "Finalizado" | "En camino";
  total: string;
}

export interface WishlistItem {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

// --- Mock Data ---
const mockOrders: Order[] = [
  { id: "#BK-7829", date: "24 Oct 2023", status: "Confirmado", total: "$2,776.95" },
  { id: "#BK-7540", date: "12 Sep 2023", status: "Finalizado", total: "$850.00" },
  { id: "#BK-6921", date: "05 Nov 2023", status: "En camino", total: "$1,240.50" },
];

const mockWishlist: WishlistItem[] = [
  {
    id: "1",
    title: "Sistema PA Yamaha 1000W",
    description: "Sistema de sonido completo con 2 altavoces.",
    price: "$120.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjG7BgpLjxYhladbZImMDzSVEeHR7PI9tL8ujVbk-1Cb3GmU2I16tsn97an1_CfOgnxY3KPILCrh4f0vgGKlzsefMX9vbgrLutCQ8O4i-nX5zP2FvmnxlezYJCe5AmRLN6YrvOHO3egvpAT7gDsHhO7aFYaGz5woYwnf19DZrUXMl5lOf7LzJ735gTvDwCBcsI4GraErrcdq15fjgjeI8sNeHbta1ApW6UlQY2L4sLzpBgiPQiwu_KeH5StWvefL7133cC_buQDH0Q"
  },
  {
    id: "2",
    title: "Copa de Vino Crystal",
    description: "Copa de vino tinto de cristal fino.",
    price: "$15.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHROvRthQvMY38RPVctq61ZzRPrjRUX9CYkE_NTfDkQMQo0go0A8QbBRxsETp2_MyI_Shq6qYnYs1cUCoQf1wUlwqN0Qct6AaLK9ZF98eAnkIA7Aenf6wdyv-YbovRTS92rDV4BL7pOyJLP80kVF3E6e4bZHNEwix0CQCUKgOHd52VhoNObFE3lLRRtRCGGnWkpsuz6f4b87Z4IBJVVA0uLvxfOWa6gQPfApME2hTcYCyOcUJBUlCY-KFvmu8L4gJrJKGLs-sepH-"
  },
  {
    id: "3",
    title: "Carpa Blanca 10x10m",
    description: "Carpa modular impermeable para eventos.",
    price: "$350.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDiillT6yypZuC3e6bJ3qzYEPO1hf_UJkxt0JPh-xGIu9KW8ExTixN6E6HmN31CJ3dsNE0HQbKUoOPKIjgKaPgLijZT4CHTDTIfBr8f-Au7wc4Q-5RsmHNcfS1c35KwVGjvWvzC1MNT686r23GDxdE9lyoioKJAojwi57uE4T6kbAjt7s_jZ7gxnKfpDGk4ef14nd7DS4vpx8KUV57Mn8kgkfUWhPMFbJwC0R2qEJPJ2y-KJxqVXD1dHPxxw1dLbJPEP32jpl4fq2y"
  }
];

export default function UserDashboard() {
  // Función helper para el color de los badges según estado
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "Confirmado":
        return <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-none"><span className="size-1.5 rounded-full bg-green-500 mr-1.5"></span>Confirmado</Badge>;
      case "Finalizado":
        return <Badge variant="outline" className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border-none"><span className="size-1.5 rounded-full bg-slate-500 mr-1.5"></span>Finalizado</Badge>;
      case "En camino":
        return <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-none"><span className="size-1.5 rounded-full bg-blue-500 mr-1.5"></span>En camino</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 font-body antialiased min-h-screen flex flex-col overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 h-16 shrink-0">
        <div className="h-full px-6 flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo */}
          <CustomLogo subTitle="BookIt"/>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {["Iluminación", "Mobiliario", "Sonido", "Decoración"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Acciones Header */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full text-slate-600 dark:text-slate-300">
              <Search className="size-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full bg-slate-100 dark:bg-slate-700 text-primary">
              <CircleUser className="size-5" />
            </Button>
            {/* Botón Carrito Mobile */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <ShoppingBag className="size-5" />
                <span className="absolute top-1 right-1 size-2.5 bg-accent rounded-full border-2 border-white dark:border-surface-dark"></span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <main className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden max-w-[1920px] mx-auto w-full">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Mi Cuenta</h2>
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold transition-colors">
                <LayoutDashboard className="size-5" />
                <span>Mi Panel</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <ShoppingBag className="size-5 group-hover:text-primary transition-colors" />
                <span>Mis Pedidos</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <Shield className="size-5 group-hover:text-primary transition-colors" />
                <span>Seguridad</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <CreditCard className="size-5 group-hover:text-primary transition-colors" />
                <span>Métodos de Pago</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-colors group">
                <History className="size-5 group-hover:text-primary transition-colors" />
                <span>Historial</span>
              </a>
            </nav>
          </div>
          <div className="mt-auto p-6 border-t border-slate-100 dark:border-slate-800">
            <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-alert hover:bg-alert/5 transition-colors">
              <LogOut className="size-5" />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* TARJETA DE PERFIL */}
            <section className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative shrink-0">
                <Avatar className="size-24 border-4 border-white dark:border-surface-dark shadow-lg">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XZE_VtG9Us__Lauc1wU0lQUk-leI_VyjDxhtvFoFM20shkqZWDWFL9pSD2W7PTxLqkrQVeg2cYH1D7Ws6vmuyiOZLNFZGLDUbJ4wpJWu5lgU61JLyR2CFXhzyyBFcOjbuo4rMyinBDecoX-wt0ZteZlGmSUcZ6bTRQYcD3m8-xppC2TvDKwtRUde7J0_5mT4tezFtf3VmqjQbKSqquylns9ZCbbmWaZ6jHP9X3oMpFq7f-PQ31s5837yKWYWxj2IsiGVi40HnqQQ" alt="User profile" className="object-cover" />
                  <AvatarFallback className="bg-slate-200 dark:bg-slate-700 text-xl">CR</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 size-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-primary-dark transition-colors border-2 border-white dark:border-surface-dark">
                  <Camera className="size-4" />
                </button>
              </div>

              <div className="flex-1 text-center md:text-left z-10">
                <h2 className="text-2xl font-bold text-text-dark dark:text-white">Carlos Rodriguez</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-4">carlos.rodriguez@example.com</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                    <MapPin className="size-4" />
                    <span>Madrid, España</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                    <Phone className="size-4" />
                    <span>+34 612 345 678</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center z-10">
                <Button className="bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md shadow-primary/20">
                  <Pencil className="size-4 mr-2" />
                  Editar Datos
                </Button>
              </div>
            </section>

            {/* TABLA DE PEDIDOS */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-dark dark:text-white flex items-center gap-2">
                  <ShoppingBag className="size-6 text-primary" />
                  Mis Pedidos Recientes
                </h3>
                <a href="#" className="text-sm font-bold text-primary hover:text-primary-dark transition-colors">Ver todos</a>
              </div>
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
                    <TableRow className="border-b border-slate-200 dark:border-slate-800">
                      <TableHead className="font-bold uppercase tracking-wider text-xs">ID Pedido</TableHead>
                      <TableHead className="font-bold uppercase tracking-wider text-xs">Fecha del Evento</TableHead>
                      <TableHead className="font-bold uppercase tracking-wider text-xs">Estado</TableHead>
                      <TableHead className="font-bold uppercase tracking-wider text-xs">Total</TableHead>
                      <TableHead className="font-bold uppercase tracking-wider text-xs text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order) => (
                      <TableRow key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell className="text-slate-600 dark:text-slate-300">{order.date}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="font-bold">{order.total}</TableCell>
                        <TableCell className="text-right">
                          <button className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                            <FileText className="size-4" />
                            Descargar Factura
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* GRID DE LISTA DE DESEOS */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-dark dark:text-white flex items-center gap-2">
                  <Heart className="size-6 text-alert fill-alert" />
                  Lista de Deseos
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="size-8 rounded-full border-slate-200 text-slate-500">
                    <ChevronLeft className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="size-8 rounded-full border-slate-200 text-slate-500">
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockWishlist.map((item) => (
                  <article key={item.id} className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 flex flex-col group">
                    <div className="relative h-40 overflow-hidden bg-slate-100">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      <button className="absolute top-2 right-2 size-7 bg-white/90 dark:bg-text-dark/80 hover:bg-white rounded-full flex items-center justify-center text-alert transition-colors backdrop-blur-sm shadow-sm">
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h4 className="font-bold text-text-dark dark:text-white mb-1 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">{item.description}</p>
                      <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50">
                        <span className="font-bold text-lg text-text-dark dark:text-white">{item.price}</span>
                        <Button size="sm" className="bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold transition-colors">
                          Reservar
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}