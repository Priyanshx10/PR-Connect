import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PR-Connect
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#testimonials">Testimonials</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="#cta">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

