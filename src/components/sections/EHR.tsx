import React from 'react'
import { motion } from "framer-motion"
import { ehrLogos } from '@/data/ehrLogos'

function EHR() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Global Interoperability</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
              Seamless <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">EHR Sync.</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 leading-relaxed font-medium max-w-2xl mx-auto">
              Our infrastructure interfaces directly with major clinical platforms, ensuring flawless data synchronicity across the healthcare enterprise.
            </p>
          </motion.div>
        </div>

        {/* Infinite marquee of EHR logos */}
        <div className="relative mx-auto">
          <div className="bg-white/50 backdrop-blur-3xl py-20 rounded-[4rem] border border-border/40 overflow-hidden relative shadow-2xl">
            
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white/50 to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white/50 to-transparent z-20" />

            {/* Marquee container */}
            <div className="flex gap-32 animate-marquee whitespace-nowrap">
              {[...ehrLogos, ...ehrLogos, ...ehrLogos].map((src, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-20 hover:opacity-100 group">
                  <img
                    src={src}
                    alt={`EHR logo`}
                    className="h-16 md:h-24 w-auto object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Telemetry Pills */}
          <div className="mt-20 flex flex-wrap justify-center gap-16">
             {["75+ PLATFORMS", "HL7 COMPLIANT", "REAL-TIME SYNC", "RESTful API"].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-green shadow-glow-green" />
                   <span className="text-[10px] font-black tracking-[0.4em] text-navy/30 uppercase">{stat}</span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EHR
