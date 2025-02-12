import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube, Users, Video, Shield } from "lucide-react"

const features = [
  {
    title: "Immersive 3D Environment",
    description: "Explore and interact in a stunning 3D social space.",
    icon: Cube,
  },
  {
    title: "Genuine Connections",
    description: "Foster real relationships without endless scrolling.",
    icon: Users,
  },
  {
    title: "Live Video Chats",
    description: "Connect face-to-face with crystal-clear video calls.",
    icon: Video,
  },
  {
    title: "Privacy First",
    description: "Your data is protected with state-of-the-art security.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PR-Connect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

