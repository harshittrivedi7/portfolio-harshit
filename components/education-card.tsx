"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Machine Learning",
    school: "Garden City University, Bengaluru",
    duration: "Expected Graduation: May 2026",
    cgpa: "CGPA: 8.3/10",
  },
  {
    degree: "Senior Secondary (CBSE)",
    field: "Physics, Chemistry, Mathematics (PCM)",
    school: "Sainik School Tilaiya, Jharkhand",
    percentage: "87.6%",
  },
]

export function EducationCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pb-6 last:pb-0"
            >
              {index < education.length - 1 && (
                <div className="absolute left-0 top-8 h-12 w-1 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="flex gap-3">
                <div className="rounded-full bg-primary/20 p-2 h-fit mt-1">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-primary mb-1">{edu.field}</p>
                  <p className="text-xs text-muted-foreground mb-1">{edu.school}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{edu.duration || edu.percentage}</span>
                    {edu.cgpa && <span className="text-primary font-semibold">{edu.cgpa}</span>}
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
