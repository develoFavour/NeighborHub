import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Share2 } from "lucide-react" // Declare the Share2 variable

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 via-teal-600 to-slate-900">
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-8 text-5xl font-sans font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Unleash the Power
            <br />
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              of Community Sharing
            </span>
          </h1>

          <p className="mb-12 text-xl text-cyan-100 sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Transform your neighborhood into a thriving sharing economy. Borrow what you need, lend what you have, and
            build lasting connections.
          </p>

          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium"
            asChild
          >
            <Link href="/auth/register">Join for Free</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl">
        <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-t-2xl border border-slate-700 shadow-2xl">
          <div className="flex items-center space-x-2 px-6 py-4 border-b border-slate-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-slate-400 ml-4">NeighborHub Community Dashboard</div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary rounded-lg mb-3 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Power Drill</h3>
                <p className="text-slate-300 text-sm">Available • 0.2 miles away</p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Sarah M.</span>
                </div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-secondary rounded-lg mb-3 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Camping Tent</h3>
                <p className="text-slate-300 text-sm">Booked • Returns tomorrow</p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Mike R.</span>
                </div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="w-12 h-12 bg-accent rounded-lg mb-3 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Ladder</h3>
                <p className="text-slate-300 text-sm">Available • 0.1 miles away</p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Emma L.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
    </section>
  )
}
