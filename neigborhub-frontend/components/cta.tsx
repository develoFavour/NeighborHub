import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
            Ready to transform your neighborhood?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of neighbors who are already sharing, saving money, and building stronger communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/auth/register">
                Join Your Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/browse">Browse Items</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Mobile app coming soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>Open source community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
