"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap, Gamepad2, Rocket } from "lucide-react"

export function UnrealEngineProjectCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 overflow-hidden">
        {/* Game Cover Visualization */}
        <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-red-950 via-gray-900 to-black">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="ueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgba(239, 68, 68, 0.4)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgba(17, 24, 39, 0.4)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#ueGrad)" />
              
              {/* Racing track with perspective */}
              <polygon points="200,50 350,200 280,260 120,260 50,200" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="3" />
              
              {/* Road markings */}
              <line x1="200" y1="50" x2="200" y2="260" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2" strokeDasharray="10,10" />
              
              {/* Speed lines */}
              <line x1="80" y1="120" x2="140" y2="120" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="2" />
              <line x1="260" y1="120" x2="320" y2="120" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="2" />
              
              {/* Title */}
              <text x="200" y="155" textAnchor="middle" fontSize="28" fill="rgba(239, 68, 68, 0.9)" fontWeight="bold">
                UE5 RACING
              </text>
              <text x="200" y="180" textAnchor="middle" fontSize="14" fill="rgba(239, 68, 68, 0.6)">
                SELF-GUIDED PROJECT
              </text>
            </svg>
          </motion.div>
        </div>

        <div className="p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="bg-primary text-primary-foreground">Unreal Engine 5</Badge>
              <Badge className="bg-primary text-primary-foreground">PC Platform</Badge>
              <Badge className="bg-primary text-primary-foreground">3D Graphics</Badge>
              <Badge className="bg-primary text-primary-foreground">Self-Guided</Badge>
            </div>

            <h3 className="mb-2 text-3xl font-bold text-foreground">3D Racing Game - Unreal Engine 5</h3>
            <p className="mb-1 text-sm text-primary font-semibold">Self-Guided Learning Project</p>

            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Independently developed a comprehensive 3D racing game for PC using Unreal Engine 5, demonstrating proficiency
              in game engine architecture and advanced gameplay systems. Implemented dynamic racing mechanics with
              realistic vehicle physics, sophisticated blueprint-based AI systems for autonomous racers, and immersive
              environmental design. Project showcases expertise in performance optimization, real-time graphics rendering,
              and complex systems integration in a professional game engine environment.
            </p>

            <div className="grid gap-4 text-sm sm:grid-cols-3 mb-6">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">Engine</p>
                  <p className="font-semibold text-primary text-base">UE5</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Gamepad2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">Features</p>
                  <p className="font-semibold text-primary text-base">AI Racers</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Rocket className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">Scope</p>
                  <p className="font-semibold text-primary text-base">Full Game</p>
                </div>
              </motion.div>
            </div>

            <p className="text-xs text-muted-foreground border-t border-border/30 pt-4">
              Technologies: Unreal Engine 5 • C++ • Blueprints • Physics Engine • AI Systems • Advanced Graphics
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
