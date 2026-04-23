import { motion } from "framer-motion";
import { ShieldCheck, Lock, Activity, Globe, Database, Cpu, Award, Shield } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "HIPAA COMPLIANT", sub: "Standard 164.306" },
  { icon: Award, label: "AAPC CERTIFIED", sub: "Expert Coders" },
  { icon: Database, label: "TIER-4 STORAGE", sub: "Redundant Backups" },
  { icon: Lock, label: "256-BIT SSL", sub: "Bank-Grade Security" },
];

export const TrustBadges = () => {
  return (
    <section className="py-10 bg-background border-y border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[10px] font-black text-green uppercase tracking-[0.5em] mb-4">Verification Layer</span>
            <h3 className="text-2xl font-black text-navy uppercase tracking-tighter">Certified Infrastructure.</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-navy/5 flex items-center justify-center group-hover:bg-navy transition-all duration-500 shadow-sm border border-transparent group-hover:border-green/20">
                  <item.icon className="w-8 h-8 text-navy/40 group-hover:text-green transition-colors" />
                </div>
                
                <div className="text-center">
                  <p className="text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs font-bold text-foreground/80">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 px-6 py-4 rounded-[2rem] bg-green/5 border border-green/10 shadow-sm"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-green relative" />
            </div>
            <div>
              <p className="text-[9px] font-black text-green/60 uppercase tracking-widest">Network Uptime</p>
              <p className="text-sm font-black text-navy uppercase">99.9% Operational</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

