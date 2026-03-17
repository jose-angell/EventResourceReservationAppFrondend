import { CartSidebar } from './bookit/Components/CartSidebar'
import { Header } from './bookit/Components/Haeder'
import { ProductGrid } from './bookit/Components/ProductGrid'
import { SearchSection } from './bookit/Components/SearchSection'


function App() {
  return (
   <div className="bg-surface-light dark:bg-background-dark text-text-dark dark:text-slate-100 antialiased h-screen flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex flex-1 h-[calc(100vh-100px)] overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-surface-light dark:bg-background-dark">
          <SearchSection />
          <ProductGrid />
        </div>

        {/* Cart Sidebar */}
        <CartSidebar />
      </main>
    </div>
  )
}

export default App
