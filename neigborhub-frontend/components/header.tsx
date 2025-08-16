import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative z-50 w-full">
      <div className="flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center space-x-2">
          <Share2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-sans font-bold text-foreground">NeighborHub</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#community"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10"
            asChild
          >
            <Link href="/auth/register">Join for Free</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
