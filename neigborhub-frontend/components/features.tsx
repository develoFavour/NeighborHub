import { Card, CardContent } from "@/components/ui/card"
import { Shield, MapPin, Clock, Star, Smartphone, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Verified users, secure transactions, and community-driven trust scores ensure safe sharing experiences.",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Focus",
    description: "Connect with neighbors within walking distance. Build your local community one share at a time.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book items when you need them with smart availability calendars and instant notifications.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "AI-powered condition assessment and community reviews help you find exactly what you need.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all devices with real-time messaging and push notifications.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Secure payment processing with automatic splits, deposits, and earnings tracking.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to share safely
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built with community trust and safety at its core, our platform makes sharing effortless and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
