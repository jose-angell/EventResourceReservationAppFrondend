import { PartyPopper, Search, User, ShoppingBag } from "lucide-react"
import { Button } from "../../components/ui/button"
import { CustomLogo } from "../../components/custom/CustomLogo"

const navLinks = [
  { label: "Iluminación", href: "#" },
  { label: "Mobiliario", href: "#" },
  { label: "Sonido", href: "#" },
  { label: "Decoración", href: "#" },
]

export function Header() {
  return (
    <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 h-16 shrink-0">
      <div className="h-full px-6 flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo */}
        <CustomLogo subTitle="BookIt"/>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-300">
            <Search className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-300">
            <User className="size-5" />
          </Button>
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="relative bg-primary/10 text-primary hover:bg-primary/20"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute top-1 right-1 size-2.5 bg-accent rounded-full border-2 border-white dark:border-surface-dark" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
