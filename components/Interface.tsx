"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, MessageCircle, Video, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Adder from "./Adder"
import Footer from "./Footer"

export default function Interface() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`fixed inset-0 pointer-events-none ${isDarkMode ? "dark" : ""}`}>
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 pointer-events-auto bg-background/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">PR-Connect</h1>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </nav>
      <motion.div
        className="absolute bottom-20 left-0 right-0 flex justify-center items-center p-4 pointer-events-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex space-x-4">
          <Button variant="outline" size="icon">
            <MessageCircle className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="outline" size="icon">
            <Video className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </motion.div>
      <Adder />
      <Footer />
    </div>
  )
}

