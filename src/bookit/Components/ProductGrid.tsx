import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard, type Product } from "./ProductCard"

const products: Product[] = [
  {
    id: 1,
    name: "Silla Chiavari Dorada",
    category: "Mobiliario",
    description: "Silla clásica de estilo chiavari en acabado dorado, perfecta para bodas y eventos de gala. Incluye cojín blanco.",
    pricePerDay: 5.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2",
    status: "available",
  },
  {
    id: 2,
    name: "Kit Luces LED Par 64",
    category: "Iluminación",
    description: "Set de 4 focos LED RGBW potentes para iluminación ambiental o de escenario. Control DMX incluido.",
    pricePerDay: 45.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBHspjCPWdjHO_3Frp9MnEeibuyDfu-6KB44IKiRAkcevSa3SkkFNZlyT2RM6tRg8beM3OSPxLoF9PMVYJ5yBoHDBD4au0CbIySjGKfwwDL1A6qZE77vmRjmWAndLoiQK-oPajDe5KOiiYmcsivrZBbVOOb8QdmsIGdHMjl-cmS_Zjh5MefgedLBzSssL3ZuHpPlbfSvFUlvcR052BU52Bx5rWPiZStE9uSLBNtfdhd3_uRGtLloVRnVbVb1khoWnATn0BMMsxunMP",
    status: "available",
  },
  {
    id: 3,
    name: "Mesa Imperial Rustica",
    category: "Mobiliario",
    description: "Mesa de madera maciza estilo rústico para 10-12 personas. Ideal para eventos al aire libre o bodas vintage.",
    pricePerDay: 85.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfShmMPfxHZfAVoes4djomYTDPGF7oXn_0XeAydfasBHIpsqAn0xqEf63jq2nDKk5crIk_U41pNeNBcIgJnrYB6hwmgNufqaZd5DCxGQJQeMJyeNdAUC5rBCCZe-cYUWGRawvhwWgJnfhu4DFe9XwRjgY5T1r2Atq1XuJ4fRBdHMCCPThwxtkng_4V5ChnGf8cvcO7cbRLfUmaeACERvIQcqAFkapaRMaAc8bJl91a0dJiHwaO5SOYnSEQHxEB5WJM_EezwAMSdtG",
    status: "available",
  },
  {
    id: 4,
    name: "Sistema PA Yamaha 1000W",
    category: "Sonido",
    description: "Sistema de sonido completo con 2 altavoces activos, mesa de mezclas y micrófonos. Perfecto para conferencias y fiestas.",
    pricePerDay: 120.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjG7BgpLjxYhladbZImMDzSVEeHR7PI9tL8ujVbk-1Cb3GmU2I16tsn97an1_CfOgnxY3KPILCrh4f0vgGKlzsefMX9vbgrLutCQ8O4i-nX5zP2FvmnxlezYJCe5AmRLN6YrvOHO3egvpAT7gDsHhO7aFYaGz5woYwnf19DZrUXMl5lOf7LzJ735gTvDwCBcsI4GraErrcdq15fjgjeI8sNeHbta1ApW6UlQY2L4sLzpBgiPQiwu_KeH5StWvefL7133cC_buQDH0Q",
    status: "low-stock",
  },
  {
    id: 5,
    name: "Copa de Vino Crystal",
    category: "Vajilla",
    description: "Copa de vino tinto de cristal fino, diseño moderno. Alquiler por caja de 25 unidades.",
    pricePerDay: 15.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHROvRthQvMY38RPVctq61ZzRPrjRUX9CYkE_NTfDkQMQo0go0A8QbBRxsETp2_MyI_Shq6qYnYs1cUCoQf1wUlwqN0Qct6AaLK9ZF98eAnkIA7Aenf6wdyv-YbovRTS92rDV4BL7pOyJLP80kVF3E6e4bZHNEwix0CQCUKgOHd52VhoNObFE3lLRRtRCGGnWkpsuz6f4b87Z4IBJVVA0uLvxfOWa6gQPfApME2hTcYCyOcUJBUlCY-KFvmu8L4gJrJKGLs-sepH-",
    status: "available",
  },
  {
    id: 6,
    name: "Carpa Blanca 10x10m",
    category: "Carpas",
    description: "Carpa modular impermeable ideal para bodas al aire libre. Incluye instalación y desmontaje básico.",
    pricePerDay: 350.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDiillT6yypZuC3e6bJ3qzYEPO1hf_UJkxt0JPh-xGIu9KW8ExTixN6E6HmN31CJ3dsNE0HQbKUoOPKIjgKaPgLijZT4CHTDTIfBr8f-Au7wc4Q-5RsmHNcfS1c35KwVGjvWvzC1MNT686r23GDxdE9lyoioKJAojwi57uE4T6kbAjt7s_jZ7gxnKfpDGk4ef14nd7DS4vpx8KUV57Mn8kgkfUWhPMFbJwC0R2qEJPJ2y-KJxqVXD1dHPxxw1dLbJPEP32jpl4fq2y",
    status: "available",
  },
]

export function ProductGrid() {
  return (
    <section className="p-6 md:p-8 max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-dark dark:text-white">
          Resultados de búsqueda{" "}
          <span className="text-slate-400 font-normal text-sm ml-2">
            (124 items)
          </span>
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary">
          <span>Ordenar por: Relevancia</span>
          <ChevronDown className="size-4" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 mb-8">
        <nav className="flex items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
            <ChevronLeft className="size-5" />
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
            1
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">
            2
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">
            3
          </button>
          <span className="px-2 text-slate-400">...</span>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
            <ChevronRight className="size-5" />
          </button>
        </nav>
      </div>
    </section>
  )
}
