"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { MenuItem } from "@/data/menu-items"
import { ProductCard } from "./product-card"
import { LoadingSpinner } from "./loading-spinner"

interface ProductListProps {
  items: MenuItem[]
  selectedCategory: string
}

export function ProductList({ items, selectedCategory }: ProductListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const filteredItems = useMemo(() => {
    let filtered = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.ingredients?.some((ingredient) => ingredient.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [items, selectedCategory, searchQuery])

  const handleSearchChange = (value: string) => {
    setIsLoading(true)
    setSearchQuery(value)
    // Simulate search delay for better UX
    setTimeout(() => setIsLoading(false), 200)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-balance">
              {selectedCategory === "All" ? "All Menu Items" : selectedCategory}
            </h2>
            <p className="text-muted-foreground mt-1">
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2">
              {searchQuery ? "No items found" : "No items in this category"}
            </h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? `Try searching for something else or browse our full menu.`
                : "Check out our other delicious categories!"}
            </p>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="mt-4 text-primary hover:underline">
                Clear search
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
