"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { CategoryFilter } from "@/components/category-filter"
import { ProductList } from "@/components/product-list"
import { CartSidebar } from "@/components/cart-sidebar"
import { Footer } from "@/components/footer"
import { menuItems } from "@/data/menu-items"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onCartClick={handleCartClick} />

      <section className="bg-gradient-to-br from-muted via-muted to-muted/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Campus Eats
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Delicious, fresh meals made for students. Order online and enjoy your favorite campus dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
          <ProductList items={menuItems} selectedCategory={selectedCategory} />
        </div>
      </main>

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={handleCartClose} />
    </div>
  )
}
