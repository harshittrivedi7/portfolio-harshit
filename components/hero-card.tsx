"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeroCard() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/harshittrivedi7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harshit-trivedi-8a8219264", label: "LinkedIn" },
    { icon: Mail, href: "mailto:harshittrivedi72757c@gmail.com", label: "Email" },
  ]

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-0.5 inline-block">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Welcome</span>
          </div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-foreground">Harshit Trivedi</h1>
          <p className="mb-3 text-base font-semibold neon-text">Game Developer & AI/ML Engineer</p>
          <p className="mb-4 text-xs text-muted-foreground leading-relaxed max-w-md">
            Specializing in high-performance game development with Unity, advanced machine learning systems, and
            scalable backend architecture. Currently focused on mobile game optimization and AI-driven solutions.
          </p>
        </motion.div>

        <motion.div
          className="mb-3 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all text-sm h-9 px-3"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  View Resume
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/resume.pdf" download="Harshit_Trivedi_Resume.pdf" className="cursor-pointer">
                  Download Resume
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="gap-2 border-primary/30 hover:border-primary/50 bg-transparent text-sm h-9 px-3" onClick={() => {
            document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Work
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-2 pt-3 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon relative p-2 rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
