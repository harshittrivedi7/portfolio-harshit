"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "HTML", "CSS", "C#"],
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    category: "Web Development",
    skills: ["FastAPI", "MongoDB", "REST APIs", "Bootstrap", "JSON"],
  },
  {
    category: "Game Development",
    skills: ["Unity Engine", "Unreal Engine 5", "Blender", "Blueprints"],
  },
  {
    category: "Data & Tools",
    skills: ["Tableau", "Git", "GitHub", "VS Code", "Jupyter", "Linux"],
  },
]

export function SkillsCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold tracking-tight text-foreground">Core Skills</h2>

        <div className="space-y-4">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: catIndex * 0.05 }}
            >
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{cat.category}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs bg-secondary border border-border/50 text-foreground px-3 py-1 rounded-full hover:border-primary/50 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
