import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageCircle, Handshake, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover Items",
    description: "Browse available items in your neighborhood or search for exactly what you need.",
    step: "01",
  },
  {
    icon: MessageCircle,
    title: "Connect & Request",
    description: "Message item owners directly and send booking requests with your preferred dates.",
    step: "02",
  },
  {
    icon: Handshake,
    title: "Share & Enjoy",
    description: "Meet your neighbor, pick up the item, and enjoy using what you need when you need it.",
    step: "03",
  },
  {
    icon: Star,
    title: "Review & Build Trust",
    description: "Rate your experience and build community trust for future sharing opportunities.",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-card-foreground sm:text-4xl">
            How NeighborHub Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting started is simple. Follow these four easy steps to begin sharing with your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-border bg-background relative overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-6xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
