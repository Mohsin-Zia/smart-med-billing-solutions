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
      {/* Precision Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full text-navy/5" viewBox="0 0 100 100">
           <defs>
              <pattern id="crossGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 10 20 M 0 10 L 20 10" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#crossGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
                <span className="w-10 h-0.5 bg-green"></span>
                Sector Expertise
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
                Specialized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Domain Knowledge.</span>
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:mb-4"
          >
            <p className="text-lg text-muted-foreground max-w-sm font-medium">
              We provide tailored billing solutions for 75+ medical specialities, ensuring domain-specific compliance.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredSpecialities.map((specialty, idx) => (
            <motion.div key={specialty.id} variants={staggerItem}>
              <SpecialtyCard name={specialty.name} icon={specialty.icon} index={idx} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-navy hover:bg-navy-light text-white px-12 h-16 rounded-2xl text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
            <Link to="/specialities">
              View Complete Domain Map
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
