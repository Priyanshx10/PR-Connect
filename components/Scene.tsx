"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense } from "react"
import Background from "./Background"
import Interface from "./Interface"
import { Shapes } from "./Shapes"

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Background />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
          <Float
            speed={1.4} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.6} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Shapes />
          </Float>
        </Suspense>
      </Canvas>
      <Interface />
    </div>
  )
}

