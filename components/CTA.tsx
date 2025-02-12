import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="cta" className="py-16 px-4 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Experience?</h2>
        <p className="text-xl mb-8">
          Join PR-Connect today and start making meaningful connections in our 3D social space.
        </p>
        <Button size="lg" variant="secondary">
          Sign Up Now
        </Button>
      </div>
    </section>
  )
}

