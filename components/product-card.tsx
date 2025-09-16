"use client"

import Image from "next/image"
import { Plus, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { MenuItem } from "@/data/menu-items"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface ProductCardProps {
  item: MenuItem
}

export function ProductCard({ item }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate brief loading
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    setIsAdding(false)
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow-sm hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {item.isVegan && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-sm">
              <Leaf className="h-3 w-3 mr-1" />
              Vegan
            </Badge>
          )}
          {item.isVegetarian && !item.isVegan && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground shadow-sm">
              <Leaf className="h-3 w-3 mr-1" />
              Vegetarian
            </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg text-balance leading-tight group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary flex-shrink-0">${item.price.toFixed(2)}</span>
        </div>

        <p className="text-muted-foreground text-sm text-pretty leading-relaxed line-clamp-2">{item.description}</p>

        {item.ingredients && (
          <div>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Ingredients:</span> {item.ingredients.slice(0, 3).join(", ")}
              {item.ingredients.length > 3 && "..."}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full transition-all duration-200 hover:scale-105"
          size="sm"
          disabled={isAdding}
        >
          {isAdding ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
              Adding...
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
