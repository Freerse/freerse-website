import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, MessageCircle, Users, Zap, Shield } from "lucide-react"

export default function HelpCenter() {
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
            <Link href="/help-center" className="text-green-400 hover:text-green-300 transition-colors">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Using Freerse
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about using Freerse - your decentralized social payment platform
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-green-400">Getting Started</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-400">Social Features</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-400">Lightning Payments</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold text-yellow-400">Privacy & Security</h3>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <Card className="max-w-4xl mx-auto bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="welcome" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-green-400 hover:text-green-300">
                    Welcome feedback
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>We welcome all feedback and suggestions to improve Freerse. You can reach out to us through:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        X:{" "}
                        <Link
                          href="https://x.com/freerseapp"
                          target="_blank"
                          className="text-green-400 hover:underline"
                        >
                          @freerseapp
                        </Link>
                      </li>
                      <li>In-app feedback feature</li>
                      <li>GitHub issues for technical feedback</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="follow-accounts" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-blue-400 hover:text-blue-300">
                    How do new users follow the accounts they are interested in?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>New users can discover and follow accounts in several ways:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Browse the global feed to discover interesting content</li>
                      <li>Search for specific users using their Nostr public key or username</li>
                      <li>Import your contact list from other platforms</li>
                      <li>Follow recommended accounts based on your interests</li>
                      <li>Join communities and follow active participants</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-to-post" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-purple-400 hover:text-purple-300">
                    How to post?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Creating posts on Freerse is simple:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Tap the compose button (+ icon) on the main screen</li>
                      <li>Write your message (up to 280 characters for short posts)</li>
                      <li>Add images, GIFs, or other media if desired</li>
                      <li>Set up Lightning payment requests if you want to monetize your content</li>
                      <li>Choose your audience (public, followers, or specific groups)</li>
                      <li>Tap "Post" to publish to the Nostr network</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gif-favorites" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-green-400 hover:text-green-300">
                    How to add your own GIF favorites?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Customize your GIF collection:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>When composing a post, tap the GIF button</li>
                      <li>Search for GIFs using keywords</li>
                      <li>Tap the heart icon on any GIF to add it to favorites</li>
                      <li>Access your favorites from the "Favorites" tab in the GIF picker</li>
                      <li>Remove favorites by tapping the heart icon again</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="long-articles" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-blue-400 hover:text-blue-300">
                    How to post long articles?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>For longer content, Freerse supports article format:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Tap the compose button and select "Article" mode</li>
                      <li>Add a compelling title for your article</li>
                      <li>Write your content with rich text formatting</li>
                      <li>Add images, links, and other media</li>
                      <li>Set up payment tiers for premium content access</li>
                      <li>Preview your article before publishing</li>
                      <li>Publish to make it available on the network</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="article-display" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-purple-400 hover:text-purple-300">
                    Where are long articles displayed after they are published?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Published articles appear in multiple locations:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Your profile page under the "Articles" tab</li>
                      <li>Followers' feeds as article previews</li>
                      <li>Global article discovery feed</li>
                      <li>Topic-based article collections</li>
                      <li>Search results when users look for relevant content</li>
                      <li>Shareable direct links for external promotion</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="what-is-zap" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-yellow-400 hover:text-yellow-300">
                    What is Zap?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Zap is Freerse's Bitcoin Lightning payment feature:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <strong>Instant Tips:</strong> Send Bitcoin instantly to reward great content
                      </li>
                      <li>
                        <strong>Micro-payments:</strong> Support creators with small amounts (satoshis)
                      </li>
                      <li>
                        <strong>Global:</strong> Works worldwide without traditional banking
                      </li>
                      <li>
                        <strong>Low Fees:</strong> Lightning Network enables near-zero transaction costs
                      </li>
                      <li>
                        <strong>Direct:</strong> Payments go directly to creators without intermediaries
                      </li>
                      <li>
                        <strong>Social:</strong> Zaps are visible and create social proof for quality content
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lightning-wallet" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-green-400 hover:text-green-300">
                    How to add lightning wallet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Set up your Lightning wallet to send and receive payments:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Go to Settings → Wallet</li>
                      <li>Choose from integrated wallet options or connect external wallet</li>
                      <li>For external wallets, scan the connection QR code or paste the connection string</li>
                      <li>Verify the connection by sending a small test payment</li>
                      <li>Set up your Lightning address for receiving payments</li>
                      <li>Configure automatic payment confirmations and limits</li>
                    </ol>
                    <p className="mt-3 text-yellow-400">
                      Supported wallets include: Wallet of Satoshi, Phoenix, Breez, and many others.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="translation" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-blue-400 hover:text-blue-300">
                    How to use the translation function?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Freerse includes built-in translation to break language barriers:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Enable translation in Settings → Language</li>
                      <li>When viewing posts in foreign languages, tap the translate icon</li>
                      <li>Choose your preferred target language</li>
                      <li>Set up automatic translation for specific languages</li>
                      <li>Toggle between original and translated text</li>
                      <li>Report translation errors to help improve accuracy</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="send-messages" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-purple-400 hover:text-purple-300">
                    How to send messages to friends?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Private messaging on Freerse is encrypted and decentralized:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Go to the Messages tab or tap the message icon on a user's profile</li>
                      <li>Start a new conversation by searching for a user</li>
                      <li>Type your message (text, emojis, and media supported)</li>
                      <li>Messages are automatically encrypted end-to-end</li>
                      <li>Send Lightning payments directly in chat</li>
                      <li>Create group chats with multiple participants</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="verify-messages" className="border-gray-700">
                  <AccordionTrigger className="text-left text-lg font-semibold text-yellow-400 hover:text-yellow-300">
                    How to verify chat messages from new friends?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>Verify the authenticity of messages and contacts:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <strong>Public Key Verification:</strong> Check the sender's Nostr public key
                      </li>
                      <li>
                        <strong>Profile Verification:</strong> Look for verification badges and social proof
                      </li>
                      <li>
                        <strong>Mutual Connections:</strong> See if you have mutual followers
                      </li>
                      <li>
                        <strong>Message History:</strong> Review the sender's public post history
                      </li>
                      <li>
                        <strong>Lightning Verification:</strong> Verified Lightning addresses add credibility
                      </li>
                      <li>
                        <strong>Report Suspicious Activity:</strong> Use the report function for spam or impersonation
                      </li>
                    </ul>
                    <p className="mt-3 text-red-400">
                      Always be cautious with new contacts and never share private keys or sensitive information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Need More Help?</h3>
                <p className="text-gray-400 mb-6">Can't find what you're looking for? Our community is here to help.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                  >
                    <Link href="https://x.com/freerseapp" target="_blank">
                      Contact Support
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
