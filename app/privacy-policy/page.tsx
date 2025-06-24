import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

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
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/help-center" className="text-gray-300 hover:text-green-400 transition-colors">
              Help Center
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Button asChild variant="ghost" className="mb-8 text-green-400 hover:text-green-300 hover:bg-green-500/10">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Freerse Privacy Policy
            </h1>
          </div>

          {/* Privacy Policy Content */}
          <Card className="max-w-4xl mx-auto bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Freerse app will not store any information about you, the posts you publish will be published to
                  the relay you configured, We are committed to protecting your privacy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                <Link href="/help-center">Help Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 bg-black/50 backdrop-blur-md py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo.webp" alt="Freerse" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Freerse
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                Home
              </Link>
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
