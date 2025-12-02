"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const otherProjects = [
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack scalable platform built with FastAPI backend and MongoDB database. Implemented JWT-based authentication, RESTful APIs, and served 200+ concurrent users with stable performance.",
    tech: ["FastAPI", "MongoDB", "JWT"],
    url: "https://github.com/harshittrivedi7/Web-design",
  },
  {
    title: "Facial Recognition System",
    description:
      "Real-time attendance tracking system achieving 92% accuracy using OpenCV and machine learning techniques. Implemented advanced face detection algorithms and neural network models for robust identification.",
    tech: ["OpenCV", "ML", "Python"],
    url: "https://github.com/harshittrivedi7/facial_recogn_attendance",
  },
  {
    title: "Snake Game",
    description:
      "Classic Python-based snake game featuring dynamic difficulty scaling, responsive keyboard controls, and algorithmic gameplay mechanics with progressive complexity.",
    tech: ["Python", "Pygame"],
    url: "https://github.com/harshittrivedi7/snake-game-pygame",
  },
]

export function ProjectsGridCard() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground md:mb-6 md:text-2xl">Additional Projects</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 md:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight flex-1">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-colors group-hover:text-primary" />
              </div>

              <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs rounded-full bg-primary/15 text-primary px-2 py-0.5 border border-primary/30 transition-all group-hover:bg-primary/25 group-hover:border-primary/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
