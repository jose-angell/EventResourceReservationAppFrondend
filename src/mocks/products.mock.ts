


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  status: string;
  statusColor: string;
}




export const products: Product[] = [
  {
    id: 1,
    name: "Silla Chiavari Dorada",
    category: "Mobiliario",
    price: 5.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2",
    description: "Silla clásica de estilo chiavari en acabado dorado, perfecta para bodas y eventos de gala.",
    status: "Disponible",
    statusColor: "bg-brand-secondary text-white"
  },
  {
    id: 2,
    name: "Mesa Imperial Rectangular",
    category: "Mobiliario",
    price: 25.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA15zF8p2C9I8Z6P3W0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0",
    description: "Mesa de madera maciza para 10-12 personas. Ideal para banquetes principales.",
    status: "Pocas unidades",
    statusColor: "bg-brand-accent text-white"
  },
  {
    id: 3,
    name: "Foco LED RGB Inalámbrico",
    category: "Iluminación",
    price: 15.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA15zF8p2C9I8Z6P3W0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0",
    description: "Iluminación perimetral controlable por app. Batería de 12 horas de duración.",
    status: "Disponible",
    statusColor: "bg-brand-secondary text-white"
  },
  {
    id: 4,
    name: "Sistema de Sonido PA 1000W",
    category: "Sonido",
    price: 120.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA15zF8p2C9I8Z6P3W0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0",
    description: "Incluye 2 altavoces, mesa de mezclas de 4 canales y 2 micrófonos inalámbricos.",
    status: "Agotado",
    statusColor: "bg-brand-alert text-white"
  },
  {
    id: 5,
    name: "Sistema de Sonido PA 1000m",
    category: "Sonido",
    price: 120.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA15zF8p2C9I8Z6P3W0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0M1J6Y9T4V7E5R2O8L9K3N0",
    description: "Incluye 2 altavoces, mesa de mezclas de 4 canales y 2 micrófonos inalámbricos.",
    status: "Agotado",
    statusColor: "bg-brand-alert text-white"
  }
]