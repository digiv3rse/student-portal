import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" width={92} height={32} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/ppfi-2025.png?height=2040&width=1800')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container text-center space-y-6">
              <p className="text-2xl md:text-3xl max-w-5xl mx-auto">
                Begin your journey in fashion design, styling, and innovation
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link href="/register">
                  <Button size="lg">Apply Now</Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Undergraduate</h3>
              <p className="text-gray-400 mb-6">
                Undergraduate programs at the Phnom Penh Fashion Institute immerse students in contemporary concepts and techniques relevant to their disciplines, fostering the development of individual identities and interests.
              </p>
              <Link href="https://ppfi.art/academic">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Intensive Diploma</h3>
              <p className="text-gray-400 mb-6">
                 Participants acquire the skills to critically assess design and style, enabling them to independently conduct creative research that is essential for crafting innovative proposals. This training also equips them to navigate market influences and address the requirements outlined in client briefs or brand identities effectively.
              </p>
              <Link href="https://ppfi.art/academic/diploma">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Short Courses</h3>
              <p className="text-gray-400 mb-6">
                Short Courses and foundation courses help you develop the skills, experience and portfolio needed for further study.
              </p>
              <Link href="https://ppfi.art/courses">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Phnom Penh Fashion Institute. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
