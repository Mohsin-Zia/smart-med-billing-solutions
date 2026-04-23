import { useRef, useEffect } from "react";
import { TrendingUp, Award, Shield, Zap } from "lucide-react";
import { StatCounter } from "@/components/common/StatCounter";
import { stats } from "@/data/stats";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal, useGsapStagger } from "@/hooks/useGsapAnimations";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useGsapScrollReveal();

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Precision Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-4xl mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Verified Performance Metric</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
              Proven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-navy-light to-navy">Operational Alpha.</span>
            </h2>
          </motion.div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:h-[700px]">
          
          {/* Main Large Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white border border-border/40 rounded-[3.5rem] p-16 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_50px_100px_rgba(30,58,138,0.1)] transition-all duration-700"
          >
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-navy/5 flex items-center justify-center mb-16 shadow-inner group-hover:bg-navy transition-all duration-700">
                <IconMap.Shield className="w-12 h-12 text-navy group-hover:text-green transition-colors" />
              </div>
              <StatCounter
                value={stats[1].value}
                suffix={stats[1].suffix}
                label={stats[1].label}
                description={stats[1].description}
                className="text-left"
              />
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/[0.03] to-transparent" />
          </motion.div>

          {/* Top Right Small Metric */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-navy text-white rounded-[3.5rem] p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 border border-white/10 backdrop-blur-md">
                 <IconMap.TrendingUp className="w-8 h-8 text-green" />
              </div>
              <StatCounter
                value={stats[3].value}
                suffix={stats[3].suffix}
                label={stats[3].label}
                description={stats[3].description}
                className="text-white"
              />
            </div>
          </motion.div>

          {/* Bottom Left Small Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-muted/30 rounded-[3.5rem] border border-border/40 p-12 flex flex-col justify-center items-center text-center group hover:bg-white transition-all duration-700"
          >
            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all duration-500">
               <IconMap.Award className="w-8 h-8 text-navy transition-colors" />
            </div>
            <StatCounter
              value={stats[0].value}
              suffix={stats[0].suffix}
              label={stats[0].label}
              description={stats[0].description}
            />
          </motion.div>

          {/* Bottom Right Wide Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 bg-green/5 rounded-[3.5rem] border border-green/10 p-16 flex items-center gap-16 group hover:bg-green/10 transition-all duration-700 relative overflow-hidden"
          >
             <div className="hidden lg:flex w-28 h-28 rounded-[2rem] bg-white flex-shrink-0 items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-all duration-1000">
                <IconMap.Zap className="w-14 h-14 text-navy" />
             </div>
             <StatCounter
                value={stats[2].value}
                suffix={stats[2].suffix}
                label={stats[2].label}
                description={stats[2].description}
                className="text-left"
              />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const IconMap = {
  TrendingUp,
  Award,
  Shield,
  Zap,
};
