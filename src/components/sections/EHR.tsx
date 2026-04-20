import React from 'react'
import { ehrLogos } from '@/data/ehrLogos'

function EHR() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-green/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
            <span className="w-10 h-0.5 bg-green"></span>
            System Compatibility
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Seamless Integration with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Enterprise EHR Ecosystems.</span>
          </h2>
        </div>

        {/* Infinite marquee of EHR logos - Premium Glass version */}
        <div className="relative mx-auto max-w-7xl">
          <div className="glass-panel py-12 rounded-[3.5rem] overflow-hidden relative">
            
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent z-20" />

            {/* Marquee container */}
            <div className="flex gap-20 animate-marquee whitespace-nowrap">
              {[...ehrLogos, ...ehrLogos, ...ehrLogos].map((src, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 px-4">
                  <img
                    src={src}
                    alt={`EHR logo`}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Info Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-10">
             {["75+ PLATFORMS", "HL7 COMPLIANT", "REAL-TIME SYNC", "API READY"].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green" />
                   <span className="text-[10px] font-black tracking-widest text-foreground/40">{stat}</span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EHR
