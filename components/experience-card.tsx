"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Game Development Intern",
    company: "Zetpeak, Bengaluru",
    period: "Aug 2025 - Nov 2025",
    type: "Full-time Internship",
    description:
      "Led development of mobile-optimized 3D racing game sustaining 60 FPS performance on Android devices. Architected sophisticated WheelCollider physics system, implemented intelligent AI waypoint navigation for autonomous bots, and executed comprehensive optimization strategies achieving 35% APK size reduction.",
    highlights: [
      "60 FPS Optimization",
      "AI Navigation System",
      "35% APK Reduction",
      "Physics Engine",
      "Mobile Development",
    ],
  },
  {
    title: "AI/ML Green Energy Intern",
    company: "1M1B Foundation (AICTE & Salesforce)",
    period: "2025",
    type: "Internship Program",
    description:
      "Co-designed intelligent AI system for wind turbine site selection and optimization. Analyzed complex environmental datasets including wind patterns, topography, and climate data. Improved site placement accuracy by 30% and built comprehensive Tableau dashboards for real-time decision support and stakeholder visualization.",
    highlights: [
      "Wind Site Optimization",
      "30% Accuracy Gain",
      "Tableau Analytics",
      "Environmental Analysis",
      "Data Visualization",
    ],
  },
]

export function ExperienceCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-5 top-12 h-16 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="flex gap-4">
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-primary/20 p-3 h-fit flex-shrink-0 border border-primary/30"
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                </motion.div>

                <div className="flex-1 pb-2">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-primary/15 text-primary px-2.5 py-1.5 rounded-full border border-primary/30 hover:border-primary/60 transition-all cursor-default"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
