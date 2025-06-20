import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Zap, Shield, Users, Globe, Bitcoin, ExternalLink, Github, Apple } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-green-500/20 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.webp" alt="Freerse" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Freerse
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/help-center" className="text-gray-300 hover:text-green-400 transition-colors">
              Help Center
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Bitcoin Lightning
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent leading-tight">
              The Future of
              <br />
              Social Payments
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Freerse is a simple and easy to use Nostr app.
              <br />
              <span className="text-green-400 font-semibold">Value Rewards Creativity</span>
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              A decentralized communication and social app built on the Nostr protocol, enabling instant Bitcoin
              Lightning payments and censorship-resistant social networking.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-black font-semibold"
              >
                <Link href="https://apps.apple.com/au/app/freerse/id6450604093" target="_blank">
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
              >
                <Link href="https://play.google.com/store/apps/details?id=com.apps.freerse" target="_blank">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Google Play
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
              >
                <Link href="https://testflight.apple.com/join/IbJTYBAa" target="_blank">
                  <Download className="w-5 h-5 mr-2" />
                  TestFlight
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                <Link href="https://github.com/Freerse/Freerse/releases/tag/v1.5.11" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  APK Download
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400">Experience the next generation of social networking</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">Lightning Fast</h3>
                <p className="text-gray-400">Instant Bitcoin payments with Lightning Network integration</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Decentralized</h3>
                <p className="text-gray-400">Built on Nostr protocol for censorship resistance</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Social First</h3>
                <p className="text-gray-400">Connect, share, and reward creativity directly</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Global Access</h3>
                <p className="text-gray-400">Available worldwide with no restrictions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Experience Freerse
            </h2>
            <p className="text-xl text-gray-400">See the app in action across different features</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-green-900/10 via-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-3xl border border-green-500/20 p-8 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <Image
                  src="/app-display.webp"
                  alt="Freerse App Screenshots showing main feed, discussions, articles, and notifications"
                  width={1200}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              What Users Are Saying
            </h2>
            <p className="text-xl text-gray-400">Real feedback from our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Review 1 */}
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    GB
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-green-400">גיא בוכנא</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Freerse is working perfectly on my iPhone 7, better than Damus and other apps I tried! I really like
                  the interface, colors, fast connection. It's a really great job! 💪"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    JT
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-blue-400">Justin_Tokyo</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "I saw someone in Japan using it and adopted it. I personally like it a lot, it's simple yet
                  effective. #Freerse"
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    IG
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-purple-400">Intuitive Guy</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Freerse is still like a rough diamond... but I see big potential 💪"
                </p>
              </CardContent>
            </Card>

            {/* Review 4 */}
            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    IA
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-yellow-400">isolabell.art</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Freerse is one of the few Nostr clients that works on older versions of Android. Applause to them!
                  👏"
                </p>
              </CardContent>
            </Card>

            {/* Review 5 */}
            <Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-green-400">node</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "One of the things I really like in Freerse is that you can easily choose between regular notes and
                  long forms. Also the menu in the note editing screen"
                </p>
              </CardContent>
            </Card>

            {/* Review 6 */}
            <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    L
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-orange-400">Laeserin</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Loving #Freerse, since the new npub influx. Great improvements!"
                </p>
              </CardContent>
            </Card>

            {/* Review 7 */}
            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    PG
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-cyan-400">PastaGringo</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">"Nice job 👍 from Freerse 🙌"</p>
              </CardContent>
            </Card>

            {/* Review 8 */}
            <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    CM
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-indigo-400">Cláudio Mello</h4>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Testing Freerse client - running smoothly. Needs some adjustments, but runs smooth. 😊😎"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Join thousands of users already using Freerse</p>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-black font-semibold"
            >
              <Link href="https://x.com/freerseapp" target="_blank">
                Share Your Experience
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border-orange-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Bitcoin className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Support Development</h3>
              <p className="text-gray-400 mb-6">
                Help us build the future of decentralized social payments. Your donations support ongoing development
                and innovation.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold"
              >
                <Link href="https://coinos.io/moss" target="_blank">
                  <Bitcoin className="w-5 h-5 mr-2" />
                  Donate Bitcoin
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 bg-black/50 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo.webp" alt="Freerse" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Freerse
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/help-center" className="text-gray-400 hover:text-green-400 transition-colors">
                Help Center
              </Link>
              <Link
                href="https://x.com/freerseapp"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                X
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 Freerse. Built on Nostr. Powered by Bitcoin Lightning.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
