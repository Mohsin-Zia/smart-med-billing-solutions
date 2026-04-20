import { useRef } from "react";
import { FileCheck, Shield, Clock, AlertCircle } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";
import { motion } from "framer-motion";

const dmeFeatures = [
  {
    icon: FileCheck,
    title: "Documentation Scrubbing",
    description:
      "•	Accurate, reliable billing solutions for practices of all sizes",
  },
  {
    icon: Shield,
    title: "Compliance Oversight",
    description:
      "•	Personalized support designed for small and mid-sized practices",
  },
  {
    icon: Clock,
    title: "Rental Cycle Logic",
    description:
      "•	Efficient billing and coding workflows that save time and reduce errors",
  },
  {
    icon: AlertCircle,
    title: "Prior Auth Strategy",
    description:
      "•	Strategic consulting to strengthen and optimize your revenue cycle",
  },
];

export const DMESection = () => {
  const sectionRef = useGsapFadeIn();

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Structural SVG Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute bottom-0 right-0 w-1/3 h-1/2 text-green/5" viewBox="0 0 200 200">
           <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
           <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content side */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
              <span className="w-10 h-0.5 bg-green"></span>
              Technical Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">DME Solutions.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-12 font-medium">
              We provide clinical-grade billing solutions for Durable Medical Equipment providers, optimizing documentation for maximum reimbursement.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dmeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-green/30 hover:bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center group-hover:bg-green group-hover:text-white transition-all">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-semibold">
                    {feature.description.replace("•\t", "")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual side - Multi-layered "Dashboard" visual */}
          <div className="flex-1 relative w-full max-w-xl">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative glass-panel rounded-[3rem] p-1 shadow-2xl overflow-hidden"
             >
                <div className="bg-navy rounded-[2.8rem] p-12 text-white">
                   <div className="flex items-center justify-between mb-12">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/30" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                         <div className="w-3 h-3 rounded-full bg-green-500/30" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Module: DME_v4.2</span>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "94%" }}
                           transition={{ duration: 1.5, delay: 0.5 }}
                           className="h-full bg-green" 
                         />
                      </div>
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] font-black uppercase text-white/40 mb-2">Claim Success</p>
                            <p className="text-5xl font-bold tracking-tighter">94.8%</p>
                         </div>
                         <div className="w-24 h-24 rounded-full border-4 border-green/20 flex items-center justify-center">
                            <span className="text-[10px] font-black text-green">LIVE</span>
                         </div>
                      </div>
                   </div>

                   <div className="mt-16 pt-12 border-t border-white/5 flex gap-6 overflow-hidden">
                      <div className="flex-1 space-y-3">
                         <div className="h-2 bg-white/5 rounded-full w-2/3" />
                         <div className="h-2 bg-white/5 rounded-full w-1/2" />
                      </div>
                      <div className="flex-1 space-y-3 opacity-30">
                         <div className="h-2 bg-white/5 rounded-full w-full" />
                         <div className="h-2 bg-white/5 rounded-full w-3/4" />
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Floating Mini Badge */}
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 bg-white dark:bg-navy p-6 rounded-3xl shadow-xl border border-border/50 hidden md:block"
             >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-green flex items-center justify-center text-white">
                      <Shield className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</p>
                      <p className="text-sm font-bold">SECURE_ALPHA</p>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
