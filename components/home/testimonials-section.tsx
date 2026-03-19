"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah O'Brien",
    location: "Drumcondra, Dublin 9",
    propertyType: "3-bed Semi-Detached",
    rating: 5,
    text: "CompareAgents saved us over EUR12,000 in fees. We received four proposals and negotiated from a position of strength. The agent we chose sold our house in 3 weeks, EUR15,000 above asking.",
    savings: "EUR12,000+ saved",
  },
  {
    id: 2,
    name: "Michael Fitzpatrick",
    location: "Blackrock, Co. Dublin",
    propertyType: "4-bed Detached",
    rating: 5,
    text: "As a first-time seller, I had no idea agent fees varied so much. CompareAgents made the whole process transparent. I could see performance metrics, not just promises.",
    savings: "1.8% fee vs 2.5% average",
  },
  {
    id: 3,
    name: "Emma & David Walsh",
    location: "Ranelagh, Dublin 6",
    propertyType: "2-bed Apartment",
    rating: 5,
    text: "We were dreading dealing with estate agents. CompareAgents filtered out the cowboys and connected us with professionals. Sale completed in 6 weeks with no chain issues.",
    savings: "Sale in 6 weeks",
  },
  {
    id: 4,
    name: "Patrick Dolan",
    location: "Clontarf, Dublin 3",
    propertyType: "Investment Portfolio",
    rating: 5,
    text: "Managing three rental properties, I needed a letting agent who understood landlord priorities. The comparison data was invaluable. Void periods down 40% since switching.",
    savings: "40% less void periods",
  },
  {
    id: 5,
    name: "Catherine Murphy",
    location: "Malahide, Co. Dublin",
    propertyType: "5-bed Family Home",
    rating: 5,
    text: "Our home was on the market for 4 months with another agent. We used CompareAgents to find someone with better results in our area. Sold within 5 weeks of relisting.",
    savings: "Sold after 5 weeks",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Client Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Dublin Property Owners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Real results from property owners who found the right agent through our platform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`}
                className={`border border-border ${index === 1 ? 'md:scale-105 shadow-lg' : ''}`}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Savings Badge */}
                  <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
                    {testimonial.savings}
                  </div>
                  
                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.propertyType}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 rounded-2xl bg-primary p-8 text-center">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-bold text-primary-foreground">4.9/5</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Average Rating</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-primary-foreground">2,400+</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Successful Matches</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-primary-foreground">97%</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
