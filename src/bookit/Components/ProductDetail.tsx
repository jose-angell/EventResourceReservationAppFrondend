import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { addDays, format } from 'date-fns';
import type { DateRange } from 'react-day-picker';

import {  ChevronRight, Heart, Plus, Shield, ShoppingCart, Truck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Calendar } from '../../components/ui/calendar';

const productData: Record<string, {
  id: number;
  title: string;
  ref: string;
  category: string;
  price: number;
  stock: string;
  available: boolean;
  description: string[];
  features: string[];
  images: string[];
}> = {
  "1": {
    id: 1,
    title: "Silla Chiavari Dorada",
    ref: "CHIA-GOLD-001",
    category: "Mobiliario",
    price: 5.00,
    stock: "+500 unidades",
    available: true,
    description: [
      "La Silla Chiavari Dorada es un icono de elegancia y sofisticación en el mundo de los eventos. Con su característico acabado metálico dorado brillante y su diseño clásico, es la opción preferida para bodas de etiqueta, cenas de gala y celebraciones exclusivas.",
      "Fabricada en resina de alta resistencia con alma de acero, garantiza no solo una estética impecable sino también una durabilidad y seguridad excepcionales para sus invitados."
    ],
    features: [
      "Acabado premium resistente a rayaduras.",
      "Incluye cojín de vinil blanco o tela (opcional).",
      "Diseño apilable para fácil logística.",
      "Apta para uso en interiores y exteriores techados."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKOB8LgFxbrzQEWNgvJHAFyAyJO4oxJ6S8spSsbb6qdGbhWytUMuoIhWUBuw7POmVpZalespo-0VKGF46rdTBU22xFoo6oO5Yl2DdjRqqcp4TnE4rFL3wcH7Vu44nCTPkU4k6_t2QtXIOOVV6Pu1hyIIq5tvbA0gMVv5f6U3BlE4o4oYX6um70O_IHjV3IYl32Fcxl_jXQoyKyvUuGaoidUc8IZoaJi5_39I9tdHnVgyi5amMm4sBhjMQ9hbsToQ7CAblTEHhl9Pt1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHROvRthQvMY38RPVctq61ZzRPrjRUX9CYkE_NTfDkQMQo0go0A8QbBRxsETp2_MyI_Shq6qYnYs1cUCoQf1wUlwqN0Qct6AaLK9ZF98eAnkIA7Aenf6wdyv-YbovRTS92rDV4BL7pOyJLP80kVF3E6e4bZHNEwix0CQCUKgOHd52VhoNObFE3lLRRtRCGGnWkpsuz6f4b87Z4IBJVVA0uLvxfOWa6gQPfApME2hTcYCyOcUJBUlCY-KFvmu8L4gJrJKGLs-sepH-",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfShmMPfxHZfAVoes4djomYTDPGF7oXn_0XeAydfasBHIpsqAn0xqEf63jq2nDKk5crIk_U41pNeNBcIgJnrYB6hwmgNufqaZd5DCxGQJQeMJyeNdAUC5rBCCZe-cYUWGRawvhwWgJnfhu4DFe9XwRjgY5T1r2Atq1XuJ4fRBdHMCCPThwxtkng_4V5ChnGf8cvcO7cbRLfUmaeACERvIQcqAFkapaRMaAc8bJl91a0dJiHwaO5SOYnSEQHxEB5WJM_EezwAMSdtG"
    ]
  },
  "2": {
    id: 2,
    title: "Mesa Imperial Rústica",
    ref: "MESA-IMP-001",
    category: "Mobiliario",
    price: 85.00,
    stock: "+50 unidades",
    available: true,
    description: [
      "La Mesa Imperial Rústica es perfecta para eventos al aire libre y celebraciones con estilo campestre o rústico. Fabricada en madera maciza de pino con acabado natural.",
      "Con capacidad para 12 personas, es ideal para bodas, bautizos y eventos familiares donde se busca un ambiente cálido y acogedor."
    ],
    features: [
      "Madera maciza de pino certificada.",
      "Acabado natural con barniz protector.",
      "Capacidad para 12 personas.",
      "Incluye patas desmontables para transporte."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfShmMPfxHZfAVoes4djomYTDPGF7oXn_0XeAydfasBHIpsqAn0xqEf63jq2nDKk5crIk_U41pNeNBcIgJnrYB6hwmgNufqaZd5DCxGQJQeMJyeNdAUC5rBCCZe-cYUWGRawvhwWgJnfhu4DFe9XwRjgY5T1r2Atq1XuJ4fRBdHMCCPThwxtkng_4V5ChnGf8cvcO7cbRLfUmaeACERvIQcqAFkapaRMaAc8bJl91a0dJiHwaO5SOYnSEQHxEB5WJM_EezwAMSdtG",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2"
    ]
  },
  "3": {
    id: 3,
    title: "Copa de Vino Crystal",
    ref: "COPA-CRY-001",
    category: "Vajilla",
    price: 15.00,
    stock: "+1000 unidades",
    available: true,
    description: [
      "Copa de vino de cristal fino premium, perfecta para eventos de alta gama. Su diseño elegante realza cualquier mesa de celebración.",
      "Fabricada en cristal sin plomo, ofrece una claridad excepcional y un brillo incomparable."
    ],
    features: [
      "Cristal fino sin plomo.",
      "Capacidad 350ml.",
      "Apta para lavavajillas.",
      "Set mínimo de 12 unidades."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHROvRthQvMY38RPVctq61ZzRPrjRUX9CYkE_NTfDkQMQo0go0A8QbBRxsETp2_MyI_Shq6qYnYs1cUCoQf1wUlwqN0Qct6AaLK9ZF98eAnkIA7Aenf6wdyv-YbovRTS92rDV4BL7pOyJLP80kVF3E6e4bZHNEwix0CQCUKgOHd52VhoNObFE3lLRRtRCGGnWkpsuz6f4b87Z4IBJVVA0uLvxfOWa6gQPfApME2hTcYCyOcUJBUlCY-KFvmu8L4gJrJKGLs-sepH-"
    ]
  },
  "4": {
    id: 4,
    title: "Silla Crossback Madera",
    ref: "CROSS-MAD-001",
    category: "Mobiliario",
    price: 4.50,
    stock: "+300 unidades",
    available: true,
    description: [
      "La Silla Crossback de madera es el elemento perfecto para eventos con estilo rústico provenzal. Su diseño con respaldo en X es un clásico que nunca pasa de moda.",
      "Fabricada en madera de haya maciza con acabado envejecido, aporta calidez y autenticidad a cualquier celebración."
    ],
    features: [
      "Madera de haya maciza.",
      "Acabado envejecido natural.",
      "Diseño apilable.",
      "Incluye cojín opcional."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKOB8LgFxbrzQEWNgvJHAFyAyJO4oxJ6S8spSsbb6qdGbhWytUMuoIhWUBuw7POmVpZalespo-0VKGF46rdTBU22xFoo6oO5Yl2DdjRqqcp4TnE4rFL3wcH7Vu44nCTPkU4k6_t2QtXIOOVV6Pu1hyIIq5tvbA0gMVv5f6U3BlE4o4oYX6um70O_IHjV3IYl32Fcxl_jXQoyKyvUuGaoidUc8IZoaJi5_39I9tdHnVgyi5amMm4sBhjMQ9hbsToQ7CAblTEHhl9Pt1"
    ]
  },
  "5": {
    id: 5,
    title: "Mantel Lino Crudo",
    ref: "MANT-LIN-001",
    category: "Mantelería",
    price: 12.00,
    stock: "+200 unidades",
    available: true,
    description: [
      "Mantel de lino natural de primera calidad con acabado crudo. Perfecto para mesas rectangulares de hasta 3.2 metros.",
      "El lino natural aporta elegancia y sofisticación a cualquier evento, siendo ideal para bodas y celebraciones exclusivas."
    ],
    features: [
      "Lino 100% natural.",
      "Medidas: 3.2m x 1.8m.",
      "Lavado profesional incluido.",
      "Colores disponibles: crudo, blanco, gris."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYhoB8KMUZi6EuZ_BktpBXFGeogzlos9meNvGIipA3qOs2Wh-TAFDTT4LsZOV2aklLFRZKA_igNmF2TlB7xlH0kxPf9_vl8_ZY_AT7SzQOSa9NfJcnepDYSH0g3LRS2NtJ-ud44PwcPSmJyFYcRNSuq2U31IfKkdYI0ZqiP7HM0GeEjr7ijpxnz9wBw0OCtgRyfr9QsY79ZZ9U7tUKHUeA6jKO48QEg0SU2X7rDnw_4zHROx33F8-xrIo8GobcpIRzb3hsMKkmmqSt"
    ]
  },
  "6": {
    id: 6,
    title: "Set de Iluminación LED",
    ref: "LED-SET-001",
    category: "Iluminación",
    price: 150.00,
    stock: "+25 unidades",
    available: true,
    description: [
      "Set completo de iluminación LED RGB con control DMX. Ideal para crear ambientes únicos en cualquier tipo de evento.",
      "Incluye 4 focos LED de 100W cada uno con soporte y cableado profesional."
    ],
    features: [
      "4 focos LED RGB 100W.",
      "Control DMX incluido.",
      "Soportes y trípodes.",
      "Técnico de instalación disponible."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuECGXSMUh1Ql5OygbDoXYci-Cg0PZRL1Dkdepdf-tCiibM0LjcTpP8wOvgJ9JWn0xP6hqSFEwyIyIlAxHt-oi1z4bUgS4gPXrGQUHi35TLnk6-re0WICU3F5ExzV4Ai388SHxHPujzAZuitXlcCX03SMi6RjI57aZe7tndULQzTgiMbiB99074TNWeIZlEqBDSiW45jE1r0vhhHpQR1TdGYgQVdMJhF1R2pb-Rh67uNOzsY-B8oRi-7r8DhGt0wpdvrFg1ujGCEB2"
    ]
  }
};

const relatedProducts = [
  { id: 2, title: "Mesa Imperial Rustica", description: "Madera maciza, 12 personas.", price: 85.00, category: "MOBILIARIO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfShmMPfxHZfAVoes4djomYTDPGF7oXn_0XeAydfasBHIpsqAn0xqEf63jq2nDKk5crIk_U41pNeNBcIgJnrYB6hwmgNufqaZd5DCxGQJQeMJyeNdAUC5rBCCZe-cYUWGRawvhwWgJnfhu4DFe9XwRjgY5T1r2Atq1XuJ4fRBdHMCCPThwxtkng_4V5ChnGf8cvcO7cbRLfUmaeACERvIQcqAFkapaRMaAc8bJl91a0dJiHwaO5SOYnSEQHxEB5WJM_EezwAMSdtG" },
  { id: 3, title: "Copa de Vino Crystal", description: "Cristal fino premium.", price: 15.00, category: "VAJILLA", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHROvRthQvMY38RPVctq61ZzRPrjRUX9CYkE_NTfDkQMQo0go0A8QbBRxsETp2_MyI_Shq6qYnYs1cUCoQf1wUlwqN0Qct6AaLK9ZF98eAnkIA7Aenf6wdyv-YbovRTS92rDV4BL7pOyJLP80kVF3E6e4bZHNEwix0CQCUKgOHd52VhoNObFE3lLRRtRCGGnWkpsuz6f4b87Z4IBJVVA0uLvxfOWa6gQPfApME2hTcYCyOcUJBUlCY-KFvmu8L4gJrJKGLs-sepH-" },
  { id: 4, title: "Silla Crossback", description: "Estilo rústico provenzal.", price: 4.50, category: "MOBILIARIO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKOB8LgFxbrzQEWNgvJHAFyAyJO4oxJ6S8spSsbb6qdGbhWytUMuoIhWUBuw7POmVpZalespo-0VKGF46rdTBU22xFoo6oO5Yl2DdjRqqcp4TnE4rFL3wcH7Vu44nCTPkU4k6_t2QtXIOOVV6Pu1hyIIq5tvbA0gMVv5f6U3BlE4o4oYX6um70O_IHjV3IYl32Fcxl_jXQoyKyvUuGaoidUc8IZoaJi5_39I9tdHnVgyi5amMm4sBhjMQ9hbsToQ7CAblTEHhl9Pt1" },
  { id: 5, title: "Mantel Lino Crudo", description: "Lino natural 3.2m.", price: 12.00, category: "MANTELERÍA", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYhoB8KMUZi6EuZ_BktpBXFGeogzlos9meNvGIipA3qOs2Wh-TAFDTT4LsZOV2aklLFRZKA_igNmF2TlB7xlH0kxPf9_vl8_ZY_AT7SzQOSa9NfJcnepDYSH0g3LRS2NtJ-ud44PwcPSmJyFYcRNSuq2U31IfKkdYI0ZqiP7HM0GeEjr7ijpxnz9wBw0OCtgRyfr9QsY79ZZ9U7tUKHUeA6jKO48QEg0SU2X7rDnw_4zHROx33F8-xrIo8GobcpIRzb3hsMKkmmqSt" }
];

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(50);
  const [activeTab, setActiveTab] = useState('descripcion');

  const product = productData[id || "1"] || productData["1"];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });
  return (
    <div className="min-h-screen bg-surface-light flex flex-col font-display">
     

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-350 mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-wider">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <a className="hover:text-primary" href="#">{product.category}</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-600">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Images */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Image */}
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover"
                  src={product.images[selectedImage]}
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-colors ${
                      selectedImage === index 
                        ? 'border-2 border-primary' 
                        : 'border border-slate-200 hover:border-primary'
                    }`}
                  >
                    <img
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-full h-full object-cover ${selectedImage !== index ? 'opacity-80 hover:opacity-100' : ''}`}
                      src={image}
                    />
                  </button>
                ))}
              </div>

              {/* Tabs */}
              <div className="mt-12">
                <div className="border-b border-slate-200 flex gap-8">
                  <button 
                    onClick={() => setActiveTab('descripcion')}
                    className={`pb-4 text-sm font-medium transition-colors ${
                      activeTab === 'descripcion' 
                        ? 'font-bold border-b-2 border-primary text-primary' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Descripción
                  </button>
                  <button 
                    onClick={() => setActiveTab('especificaciones')}
                    className={`pb-4 text-sm font-medium transition-colors ${
                      activeTab === 'especificaciones' 
                        ? 'font-bold border-b-2 border-primary text-primary' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Especificaciones
                  </button>
                  <button 
                    onClick={() => setActiveTab('politicas')}
                    className={`pb-4 text-sm font-medium transition-colors ${
                      activeTab === 'politicas' 
                        ? 'font-bold border-b-2 border-primary text-primary' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Políticas de Alquiler
                  </button>
                </div>
                <div className="py-8 text-slate-600 leading-relaxed">
                  {activeTab === 'descripcion' && (
                    <>
                      {product.description.map((paragraph, index) => (
                        <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                      ))}
                      <ul className="mt-6 space-y-2 list-disc list-inside">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {activeTab === 'especificaciones' && (
                    <div className="space-y-4">
                      <p>Referencia: {product.ref}</p>
                      <p>Categoría: {product.category}</p>
                      <p>Stock disponible: {product.stock}</p>
                    </div>
                  )}
                  {activeTab === 'politicas' && (
                    <div className="space-y-4">
                      <p>Alquiler mínimo: 1 día</p>
                      <p>Depósito requerido: 20% del valor total</p>
                      <p>Cancelación gratuita hasta 48 horas antes del evento</p>
                      <p>Entrega y recogida incluidas en radio de 30km</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Product Info & Booking */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                {/* Title & Favorite */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-text-dark leading-tight">{product.title}</h2>
                    <p className="text-slate-400 text-sm mt-1">Ref: {product.ref}</p>
                  </div>
                  <button className="size-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 mb-8">
                  {product.available && (
                    <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      <span className="size-2 rounded-full bg-secondary"></span>
                      Disponible
                    </span>
                  )}
                  <span className="text-slate-300">|</span>
                  <span className="text-sm text-slate-500">Stock: {product.stock}</span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-text-dark">${product.price.toFixed(2)}</span>
                    <span className="text-slate-400 font-medium">/ día</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">* Precios no incluyen IVA ni transporte.</p>
                </div>

                {/* Quantity & Dates */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-3 tracking-widest">Cantidad</label>
                    <div className="flex items-center w-36 h-12 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                      <button 
                        onClick={decrementQuantity}
                        className="flex-1 h-full hover:bg-slate-200 text-slate-600 transition-colors font-bold"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-14 h-full bg-transparent border-none text-center font-bold text-text-dark focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button 
                        onClick={incrementQuantity}
                        className="flex-1 h-full hover:bg-slate-200 text-slate-600 transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                 <Popover>
                <PopoverTrigger
                    render={
                    <button className="w-full group outline-none cursor-pointer">
                        <div className="grid grid-cols-2 gap-4">
                        {/* Cuadro: DESDE */}
                        <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 text-left transition-colors group-hover:border-slate-200 dark:group-hover:border-slate-700">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                            Desde
                            </span>
                            <span className="text-sm font-bold text-text-dark dark:text-white">
                            {date?.from ? format(date.from, "dd MMM, y") : "Seleccionar"}
                            </span>
                        </div>

                        {/* Cuadro: HASTA */}
                        <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 text-left transition-colors group-hover:border-slate-200 dark:group-hover:border-slate-700">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                            Hasta
                            </span>
                            <span className="text-sm font-bold text-text-dark dark:text-white">
                            {date?.to ? format(date.to, "dd MMM, y") : "Seleccionar"}
                            </span>
                        </div>
                        </div>
                    </button>
                    }
                />
                
                <PopoverContent className="w-auto p-0" align="start">
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
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Desde</span>
                      <span className="text-sm font-bold">24 Oct, 2023</span>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hasta</span>
                      <span className="text-sm font-bold">27 Oct, 2023</span>
                    </div>
                  </div> */}

                  <Button 
                  render={<Link to="/" />}
                  className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg shadow-secondary/20 transition-all flex items-center justify-center gap-3 text-lg">
                    <ShoppingCart className="w-5 h-5" />
                    Añadir al Presupuesto
                  </Button>

                  {/* Guarantees */}
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Garantía de calidad BookIt</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Entrega y montaje disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-24 mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-text-dark">Productos Relacionados</h3>
              <a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
                Ver Mobiliario
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={relatedProduct.image}
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-text-dark shadow-sm">
                      {relatedProduct.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="font-bold text-text-dark mb-1">{relatedProduct.title}</h4>
                    <p className="text-xs text-slate-500 mb-4 flex-1">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold text-text-dark">${relatedProduct.price.toFixed(2)}</span>
                      <button className="size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
