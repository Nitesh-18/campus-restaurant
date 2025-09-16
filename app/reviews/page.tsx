"use client"

import type React from "react"

import { useState } from "react"
import { Star, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Review {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2025-01-15",
    comment:
      "Amazing food and super fast service! The veggie wrap is my go-to lunch. The staff is always friendly and the ingredients taste so fresh.",
    verified: true,
  },
  {
    id: 2,
    name: "Mike R.",
    rating: 4,
    date: "2025-01-12",
    comment:
      "Great variety of options and reasonable prices for campus food. The pizza is surprisingly good! Only wish they had more vegan options.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily K.",
    rating: 5,
    date: "2025-01-10",
    comment:
      "Campus Eats has been a lifesaver during finals week. Their late hours and quick service mean I can grab a healthy meal between study sessions.",
    verified: true,
  },
  {
    id: 4,
    name: "Alex T.",
    rating: 4,
    date: "2025-01-08",
    comment:
      "Love the BBQ pulled pork sandwich! The portion sizes are generous and the quality is consistently good. Definitely recommend to other students.",
    verified: true,
  },
  {
    id: 5,
    name: "Jessica L.",
    rating: 5,
    date: "2025-01-05",
    comment:
      "The salads here are incredible - so fresh and flavorful. It's rare to find such quality ingredients on campus. The staff remembers my usual order!",
    verified: true,
  },
]

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const review: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0],
      comment: newReview.comment,
      verified: false,
    }

    setReviews([review, ...reviews])
    setNewReview({ name: "", rating: 5, comment: "" })
    setShowForm(false)
    setIsSubmitting(false)
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Customer Reviews</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto text-pretty">
            See what our campus community is saying about Campus Eats
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-emerald-600 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
            <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-12">
          <Button onClick={() => setShowForm(!showForm)} className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Write a Review
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3 className="text-2xl font-bold text-foreground">Share Your Experience</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label htmlFor="reviewName" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="reviewName"
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Rating *</label>
                  {renderStars(newReview.rating, true, (rating) => setNewReview((prev) => ({ ...prev, rating })))}
                </div>

                <div>
                  <label htmlFor="reviewComment" className="block text-sm font-medium text-foreground mb-2">
                    Your Review *
                  </label>
                  <Textarea
                    id="reviewComment"
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" disabled={isSubmitting} className="bg-emerald-600 hover:bg-emerald-700">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      "Submit Review"
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        {review.verified && (
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
