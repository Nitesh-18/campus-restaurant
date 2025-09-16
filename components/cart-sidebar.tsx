"use client"

import { ShoppingBag, Trash2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { CartItemComponent } from "./cart-item"
import { useCart } from "@/contexts/cart-context"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart()
  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()
  const taxAmount = totalPrice * 0.085
  const finalTotal = totalPrice + taxAmount

  const handleCheckout = () => {
    // Placeholder for checkout functionality
    alert("Checkout functionality would be implemented here!")
  }

  const handleClearCart = () => {
    clearCart()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col py-2 px-8">
        <SheetHeader className="space-y-2.5 pr-6 flex-shrink-0">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({totalItems} item{totalItems !== 1 ? "s" : ""})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm text-pretty mb-6 max-w-sm">
              Add some delicious items from our menu to get started!
            </p>
            <Button onClick={onClose} variant="outline" className="w-full max-w-xs bg-transparent">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-0 py-4">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="animate-in fade-in slide-in-from-right-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CartItemComponent item={item} />
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Cart Summary */}
            <div className="space-y-4 pt-4 border-t border-border flex-shrink-0">
              {/* Clear Cart Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearCart}
                className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
                  </span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8.5%)</span>
                  <span className="font-medium">${taxAmount.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button onClick={handleCheckout} className="w-full transition-all duration-200 hover:scale-105" size="lg">
                <CreditCard className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
