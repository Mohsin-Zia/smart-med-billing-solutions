import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpecialtyCard } from "@/components/common/SpecialtyCard";

import { staggerContainer, staggerItem } from "@/lib/animations";
import { featuredSpecialities } from "@/data/specialties";

export const SpecialitiesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-light to-transparent" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-navy-light/20 to-transparent" />
        <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-navy-light/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-16 pb-12 border-b border-border/40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Domain Specialization</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-navy mb-4 leading-[0.85] tracking-tighter uppercase">
                Multi-Sector <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Expertise.</span>
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-sm"
          >
            <p className="text-xl text-muted-foreground/60 leading-relaxed font-medium border-l-2 border-green/20 pl-8">
              We engineer specialized revenue pathways for 75+ unique medical domains, ensuring compliance across the spectrum.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredSpecialities.slice(0, 4).map((specialty, idx) => (
            <motion.div key={specialty.id} variants={staggerItem}>
              <SpecialtyCard name={specialty.name} icon={specialty.icon} index={idx} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-px h-20 bg-gradient-to-b from-green/40 to-transparent mb-10" />
          <Button size="lg" className="bg-navy hover:bg-navy-light text-white px-8 md:px-16 h-16 md:h-20 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.2em] shadow-3xl shadow-navy/20 transition-all hover:scale-105 active:scale-95 group" asChild>
            <Link to="/specialities">
              Explore All Specialties
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-4 md:ml-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
