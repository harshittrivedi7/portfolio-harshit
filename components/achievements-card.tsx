"use client"

import { motion } from "framer-motion"
import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    title: "NCC 'A' Certificate",
    description: "Leadership and discipline excellence",
    icon: Trophy,
  },
  {
    title: "NCC 'B' Certificate",
    description: "Academic performance recognition",
    icon: Award,
  },
  {
    title: "Consistent CGPA",
    description: "Maintained 7.5+ throughout academics",
    icon: Award,
  },
  {
    title: "5+ Projects on GitHub",
    description: "Published software and game projects",
    icon: Trophy,
  },
]

export function AchievementsCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground md:mb-6 md:text-2xl">Achievements</h2>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary p-2 md:p-3 transition-all duration-300 hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex gap-3">
                  <div className="rounded-lg bg-primary/20 p-2 h-fit">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground md:text-sm">{achievement.title}</p>
                    <p className="text-[10px] text-muted-foreground md:text-xs">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
