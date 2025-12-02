"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Package } from "lucide-react"

export function FeaturedProjectCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 overflow-hidden">
        {/* Game Cover Visualization */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="racingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgba(112, 192, 99, 0.4)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgba(30, 58, 138, 0.4)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#racingGrad)" />
              {/* Track design */}
              <rect
                x="70"
                y="90"
                width="260"
                height="120"
                fill="none"
                stroke="rgba(112, 192, 99, 0.6)"
                strokeWidth="3"
                rx="20"
              />
              <circle cx="80" cy="150" r="15" fill="rgba(112, 192, 99, 0.5)" />
              <circle cx="320" cy="150" r="15" fill="rgba(112, 192, 99, 0.5)" />
              <text x="200" y="155" textAnchor="middle" fontSize="28" fill="rgba(112, 192, 99, 0.9)" fontWeight="bold">
                ZETPEAK
              </text>
              <text x="200" y="180" textAnchor="middle" fontSize="16" fill="rgba(112, 192, 99, 0.6)">
                3D RACING
              </text>
            </svg>
          </motion.div>
        </div>

        <div className="p-4 md:p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="bg-primary text-primary-foreground">Unity Engine</Badge>
              <Badge className="bg-primary text-primary-foreground">Android Mobile</Badge>
              <Badge className="bg-primary text-primary-foreground">AI Navigation</Badge>
            </div>

            <h3 className="mb-2 text-2xl md:text-3xl font-bold text-foreground">3D Mobile Racing Game</h3>
            <p className="mb-1 text-sm text-primary font-semibold">Featured Project at Zetpeak (Aug - Nov 2025)</p>

            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              High-performance mobile racing game engineered during internship at Zetpeak. Achieved 60 FPS on Android
              devices through advanced optimization techniques. Features sophisticated physics simulation with
              WheelColliders, intelligent AI-driven waypoint navigation for 5+ autonomous bots, and comprehensive
              free-roam gameplay. Successfully reduced APK size by 35% through model compression and asset optimization.
            </p>

            <div className="grid gap-4 text-sm grid-cols-1 sm:grid-cols-3 mb-6">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">Performance</p>
                  <p className="font-semibold text-primary text-base">60 FPS Stable</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Users className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">AI Entities</p>
                  <p className="font-semibold text-primary text-base">5+ Bots</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Package className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-xs font-medium">Optimization</p>
                  <p className="font-semibold text-primary text-base">35% Reduction</p>
                </div>
              </motion.div>
            </div>

            <p className="text-xs text-muted-foreground border-t border-border/30 pt-4">
              Technologies: Unity 2023 LTS • C# • Android SDK • Physics System • NavMesh AI
            </p>
          </motion.div>
        </div>
        </div>
    </div>
  )
}
