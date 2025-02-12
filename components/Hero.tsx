import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect Authentically in a 3D Social Space
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            PR-Connect redefines social media with immersive 3D environments, real-time interactions, and a focus on
            genuine human connections.
          </p>
          <div className="space-x-4">
            <Button size="lg">Join Now</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="PR-Connect 3D Social Space"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

