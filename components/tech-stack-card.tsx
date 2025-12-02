"use client"

import { motion } from "framer-motion"

const techStack = [
  { name: "Unity", color: "from-blue-500 to-blue-600", category: "Game Engines" },
  { name: "Unreal Engine 5", color: "from-cyan-500 to-blue-600", category: "Game Engines" },
  { name: "C#", color: "from-purple-500 to-purple-600", category: "Programming" },
  { name: "Python", color: "from-yellow-500 to-yellow-600", category: "Programming" },
  { name: "JavaScript", color: "from-amber-500 to-yellow-600", category: "Web" },
  { name: "TensorFlow", color: "from-orange-500 to-orange-600", category: "AI/ML" },
  { name: "PyTorch", color: "from-red-500 to-red-600", category: "AI/ML" },
  { name: "OpenCV", color: "from-green-500 to-teal-600", category: "AI/ML" },
  { name: "FastAPI", color: "from-indigo-500 to-blue-600", category: "Web" },
  { name: "MongoDB", color: "from-green-600 to-emerald-600", category: "Backend" },
]

export function TechStackCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-foreground">Tech Stack</h2>
        <p className="mb-4 md:mb-6 text-xs text-muted-foreground">
          Core technologies across game development, AI/ML, and backend systems
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group/tech relative"
              title={tech.category}
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br p-3 md:p-4 text-center transition-all duration-300 h-full flex items-center justify-center">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-25 group-hover/tech:opacity-45 transition-opacity duration-300`}
                />

                {/* Neon border on hover */}
                <div className="absolute inset-0 rounded-lg border border-primary opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100 shadow-lg group-hover/tech:shadow-primary/50" />

                <p className="relative font-semibold text-xs md:text-sm text-foreground group-hover/tech:text-primary transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
