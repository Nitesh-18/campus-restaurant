"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

interface NavbarProps {
  onCartClick: () => void
}

export function Navbar({ onCartClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/#menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Reviews", href: "/reviews" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                Campus Eats
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>

          {/* Cart Button */}
          <div className="flex items-center md:ml-1">
            <Button variant="outline" size="sm" onClick={onCartClick} className="relative bg-transparent">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="ml-2 hidden sm:inline">Cart</span>
            </Button>

            {/* Auth buttons */}
            <div className="ml-1 flex space-x-2">
              <Link href="/auth?mode=login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/auth?mode=register">
                <Button size="sm">Register</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile auth buttons */}
              <div className="mt-3 flex space-x-2">
                <Link href="/auth?mode=login" className="w-full">
                  <Button variant="ghost" className="w-full">Login</Button>
                </Link>
                <Link href="/auth?mode=register" className="w-full">
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
