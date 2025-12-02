"use client"

import { motion } from "framer-motion"
import { Briefcase as Certificate, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Improve Communication with Genial.ly",
    issuer: "Coursera (2025)",
  },
  {
    title: "Business Writing",
    issuer: "University of Colorado Boulder (Coursera)",
  },
  {
    title: "Essentials for English Speeches and Presentations",
    issuer: "Peking University",
  },
  {
    title: "Cisco Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
  },
]

export function CertificationsCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Certifications</h2>

        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ x: 5 }}
              className="group/cert flex gap-3 p-3 rounded-lg border border-border/50 bg-secondary transition-all duration-300 hover:border-primary/50"
            >
              <Certificate className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 transition-all duration-300 group-hover/cert:opacity-100 flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
