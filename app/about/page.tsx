"use client"

import { Users, Award, Clock, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About Campus Eats</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto text-pretty">
            Serving fresh, delicious meals to the campus community since 2015
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Campus Eats was born from a simple idea: students deserve fresh, affordable, and delicious food that
                fuels their academic journey. What started as a small food cart outside the library has grown into the
                campus's favorite dining destination.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe that great food brings people together. Our kitchen team works tirelessly to create meals
                that not only satisfy hunger but also create moments of joy and connection among students, faculty, and
                staff.
              </p>
              <p className="text-lg leading-relaxed">
                Every ingredient is carefully sourced, every recipe is crafted with love, and every meal is prepared
                fresh to order. We're not just feeding the campus – we're nourishing the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Community</h3>
              <p className="text-muted-foreground">Building connections through shared meals and experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quality</h3>
              <p className="text-muted-foreground">Fresh ingredients and exceptional preparation in every dish</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Convenience</h3>
              <p className="text-muted-foreground">Quick service that fits into your busy academic schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Local</h3>
              <p className="text-muted-foreground">Supporting local farmers and suppliers in our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">MJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Maria Johnson</h3>
              <p className="text-emerald-600 font-medium mb-2">Head Chef</p>
              <p className="text-muted-foreground text-sm">
                15 years of culinary experience bringing flavors from around the world to campus
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">DS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">David Smith</h3>
              <p className="text-emerald-600 font-medium mb-2">Operations Manager</p>
              <p className="text-muted-foreground text-sm">
                Ensuring smooth operations and exceptional customer service every day
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">AL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Anna Lee</h3>
              <p className="text-emerald-600 font-medium mb-2">Nutrition Specialist</p>
              <p className="text-muted-foreground text-sm">
                Crafting healthy, balanced meals that fuel academic success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
