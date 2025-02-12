import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Tech Enthusiast",
    content: "PR-Connect has revolutionized how I interact online. The 3D environment is incredibly immersive!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Samantha Lee",
    role: "Digital Creator",
    content: "I've made more genuine connections on PR-Connect in a month than I have in years on other platforms.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "The focus on real interactions over endless scrolling has significantly improved my online experience.",
    avatar: "/placeholder.svg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

