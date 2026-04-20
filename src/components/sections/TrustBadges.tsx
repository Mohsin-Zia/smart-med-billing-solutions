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
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-navy/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white dark:bg-navy/40 border border-border/50 shadow-sm hover:shadow-md hover:border-green/30 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-green/5 flex items-center justify-center border border-green/10 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-5 h-5 text-green" />
                </div>
                {/* Active Indicator */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green border-2 border-white dark:border-navy animate-pulse" />
              </div>
              
              <div>
                <p className="text-[10px] font-black tracking-tighter text-muted-foreground uppercase mb-0">
                  {item.label}
                </p>
                <p className="text-xs font-bold text-foreground/80">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Uptime Indicator Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-green/10 border border-green/20"
          >
            <div className="w-2 h-2 rounded-full bg-green animate-ping" />
            <span className="text-[10px] font-bold text-green uppercase tracking-widest">Systems: Operational</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

