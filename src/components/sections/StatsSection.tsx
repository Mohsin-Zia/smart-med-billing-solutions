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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full text-navy/5" viewBox="0 0 100 100">
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
            <span className="w-10 h-0.5 bg-green"></span>
            Performance Metrics
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
            Quantifiable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Technical Excellence.</span>
          </h2>
        </div>

        {/* Bento-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* Main Large Metric */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white dark:bg-navy/40 rounded-[3rem] border border-border p-12 flex flex-col justify-between technical-shadow relative overflow-hidden group hover:border-green/30 transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mb-8">
                <IconMap.Shield className="w-8 h-8 text-green" />
              </div>
              <StatCounter
                value={stats[1].value}
                suffix={stats[1].suffix}
                label={stats[1].label}
                description={stats[1].description}
                className="text-left"
              />
            </div>
            
            {/* Visual Decoration: Simplified UI Graph */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
               <svg viewBox="0 0 200 100" className="w-full h-full">
                  <path d="M0,80 Q50,70 100,20 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M0,90 Q50,85 100,40 T200,30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
               </svg>
            </div>
          </motion.div>

          {/* Right Top Metric */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-muted/30 rounded-[3rem] border border-border p-10 flex flex-col justify-center items-center text-center hover:bg-white transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
               <IconMap.TrendingUp className="w-6 h-6 text-navy" />
            </div>
            <StatCounter
              value={stats[3].value}
              suffix={stats[3].suffix}
              label={stats[3].label}
              description={stats[3].description}

            />
          </motion.div>

          {/* Bottom Left Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-navy text-white rounded-[3rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl"
          >
            <StatCounter
              value={stats[0].value}
              suffix={stats[0].suffix}
              label={stats[0].label}
              description={stats[0].description}
              className="text-white"
            />
          </motion.div>

          {/* Bottom Right Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-green/10 dark:bg-green/5 rounded-[3rem] border border-green/20 p-10 flex items-center gap-12 group hover:bg-green/20 transition-all duration-500"
          >
             <div className="hidden lg:flex w-24 h-24 rounded-3xl bg-green/20 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconMap.Zap className="w-12 h-12 text-green" />
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
