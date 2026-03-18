import { CartSidebar } from "../Components/CartSidebar";
import { ProductGrid } from "../Components/ProductGrid";
import { SearchSection } from "../Components/SearchSection";


export default function HomePage() {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-surface-light dark:bg-background-dark [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <SearchSection />
        <ProductGrid />
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </>
  );
}