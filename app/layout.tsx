import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Campus Eats - Fresh Meals for Students",
  description:
    "Order delicious, fresh meals online from Campus Eats. Student-friendly prices, fast service, and quality food delivered right to your dorm.",
  generator: "v0.app",
  keywords: "campus food, student meals, online ordering, university dining, fresh food delivery",
  authors: [{ name: "Campus Eats Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <CartProvider>{children}</CartProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
