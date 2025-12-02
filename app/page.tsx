"use client"

import { motion } from "framer-motion"
import { HeroCard } from "@/components/hero-card"
import { TechStackCard } from "@/components/tech-stack-card"
import { FeaturedProjectCard } from "@/components/featured-project-card"
import { UnrealEngineProjectCard } from "@/components/unreal-engine-project-card"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectsGridCard } from "@/components/projects-grid-card"
import { StatsCard } from "@/components/stats-card"
import { SkillsCard } from "@/components/skills-card"
import { AchievementsCard } from "@/components/achievements-card"
import { CertificationsCard } from "@/components/certifications-card"
import { EducationCard } from "@/components/education-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Animated background grid */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-15">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(112, 192, 99, 0.12) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        <motion.div
          className="grid auto-rows-max gap-4 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Card - Large, span 2 cols */}
          <motion.div
            className="md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <HeroCard />
          </motion.div>

          {/* Stats Card - Horizontal, span 2 cols */}
          <motion.div
            className="md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <StatsCard />
          </motion.div>

          {/* Tech Stack Card - Full width below */}
          <motion.div
            className="md:col-span-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <TechStackCard />
          </motion.div>

          {/* Featured Project - Large, full width */}
          <motion.div
            id="featured-project"
            className="md:col-span-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FeaturedProjectCard />
          </motion.div>

          {/* Unreal Engine 5 Racing Game - Self-Guided Project */}
          <motion.div
            className="md:col-span-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <UnrealEngineProjectCard />
          </motion.div>

          {/* Experience Card - Left, full height */}
          <motion.div
            id="experience"
            className="md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <ExperienceCard />
          </motion.div>

          {/* Skills + Education stack - Right */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <EducationCard />
          </motion.div>

          {/* Skills Card - Full width */}
          <motion.div
            className="md:col-span-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <SkillsCard />
          </motion.div>

          {/* Achievements and Certifications - Side by side */}
          <motion.div
            className="md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <AchievementsCard />
          </motion.div>

          <motion.div
            className="md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <CertificationsCard />
          </motion.div>

          {/* Projects Grid - Full width */}
          <motion.div
            id="projects"
            className="md:col-span-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <ProjectsGridCard />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
