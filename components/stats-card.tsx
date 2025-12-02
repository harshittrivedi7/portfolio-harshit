"use client"

import { motion } from "framer-motion"
import { BookOpen, Github, Code, Zap } from "lucide-react"

const stats = [
  { label: "Current CGPA", value: "8.3", icon: BookOpen, detail: "Garden City University" },
  { label: "GitHub Projects", value: "5+", icon: Github, detail: "Open source contributions" },
  { label: "Languages", value: "6+", icon: Code, detail: "Programming proficiency" },
  { label: "Tech Skills", value: "25+", icon: Zap, detail: "Tools & frameworks" },
]

export function StatsCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">Quick Stats</h2>

        <div className="grid grid-cols-4 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group/stat relative overflow-hidden rounded-lg border border-border/50 bg-secondary/40 p-3 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-2 inline-block rounded-lg bg-primary/20 p-2 border border-primary/30">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary mt-1 mb-0.5">{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{stat.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-4 text-xs text-muted-foreground border-t border-border/30 pt-3">
          Expected graduation: May 2026 • B.Tech in AI/ML
        </p>
      </div>
    </div>
  )
}
