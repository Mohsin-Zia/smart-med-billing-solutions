import { useRef } from "react";
import { FileCheck, Shield, Clock, AlertCircle, TrendingUp } from "lucide-react";
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
    <section ref={sectionRef} className="py-40 bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/[0.02] -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green/[0.02] blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          
          {/* Content side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">Vertical Infrastructure</span>
              </div>

              <h2 className="text-5xl md:text-8xl font-black text-navy mb-12 leading-[0.85] tracking-tighter uppercase">
                Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-navy-light to-navy">DME Flow.</span>
              </h2>

              <p className="text-xl text-muted-foreground/60 leading-relaxed max-w-xl mb-20 font-medium border-l-2 border-green/20 pl-10">
                Clinical-grade billing architecture optimized for Durable Medical Equipment providers, engineered for maximum documentation integrity.
              </p>

              {/* Feature Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dmeFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-10 rounded-[3rem] bg-white border border-border/40 hover:border-green/20 hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-navy group-hover:text-green transition-all duration-500">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-sm font-black text-navy mb-4 leading-tight tracking-widest uppercase">{feature.title}</h4>
                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium">
                      {feature.description.replace("•\t", "")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual side - Dashboard Architecture */}
          <div className="flex-1 relative w-full max-w-2xl">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-[4rem] p-2 bg-gradient-to-br from-border/50 to-transparent shadow-3xl overflow-hidden"
             >
                <div className="bg-navy rounded-[3.8rem] p-16 text-white overflow-hidden relative">
                   {/* Interface Glow */}
                   <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-green/10 blur-[120px]" />

                   <div className="flex items-center justify-between mb-20 relative z-10">
                      <div className="flex gap-3">
                         <div className="w-3 h-3 rounded-full bg-red-400/20" />
                         <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                         <div className="w-3 h-3 rounded-full bg-green-400/20" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Module: DME_CORE_v5.0</span>
                   </div>
                   
                   <div className="space-y-12 relative z-10">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "94.8%" }}
                           transition={{ duration: 2, delay: 0.5 }}
                           className="h-full bg-gradient-to-r from-green/40 to-green shadow-glow-green" 
                         />
                      </div>
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] mb-4">System Accuracy</p>
                            <p className="text-7xl font-black tracking-tighter">94.8<span className="text-green text-3xl ml-2">%</span></p>
                         </div>
                         <div className="w-24 h-24 rounded-full border border-green/20 flex flex-col items-center justify-center p-2 bg-green/5">
                            <span className="text-[9px] font-black text-green/40 uppercase tracking-widest mb-1 leading-none">STATUS</span>
                            <span className="text-xs font-black text-green leading-none tracking-tighter">SYNCED</span>
                         </div>
                      </div>
                   </div>

                   <div className="mt-24 pt-16 border-t border-white/10 flex gap-12 overflow-hidden relative z-10">
                      <div className="flex-1 space-y-6">
                         <div className="h-2 bg-white/10 rounded-full w-3/4" />
                         <div className="h-2 bg-white/5 rounded-full w-1/2" />
                         <div className="h-2 bg-white/5 rounded-full w-2/3" />
                      </div>
                      <div className="flex-1 space-y-6 opacity-30">
                         <div className="h-2 bg-white/10 rounded-full w-full" />
                         <div className="h-2 bg-white/5 rounded-full w-3/4" />
                         <div className="h-2 bg-white/5 rounded-full w-1/2" />
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Floating Badge */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-16 -right-12 bg-white backdrop-blur-2xl p-10 rounded-[3rem] shadow-3xl border border-border/40 hidden xl:block"
             >
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-3xl bg-green flex items-center justify-center text-navy shadow-lg shadow-green/20">
                      <Shield className="w-8 h-8" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 mb-1">Architecture</p>
                      <p className="text-xl font-black tracking-tighter text-navy uppercase">SECURE_DME</p>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
