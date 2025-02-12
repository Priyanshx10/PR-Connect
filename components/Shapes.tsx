"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Torus } from "@react-three/drei"

export default function Shapes() {
  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.x += delta * 0.1
    group.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={group}>
      <Sphere args={[1, 16, 16]} position={[-4, 0, 0]}>
        <meshStandardMaterial color="#e63946" wireframe />
      </Sphere>
      <Box args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#457b9d" wireframe />
      </Box>
      <Torus args={[0.8, 0.2, 16, 100]} position={[4, 0, 0]}>
        <meshStandardMaterial color="#f1faee" wireframe />
      </Torus>
    </group>
  )
}

