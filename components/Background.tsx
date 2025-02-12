"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

export default function Background() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1
    meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <Sphere ref={meshRef} args={[30, 64, 64]}>
      <meshStandardMaterial color="#2a9d8f" wireframe />
    </Sphere>
  )
}

