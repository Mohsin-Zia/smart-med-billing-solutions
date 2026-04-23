import { useRef } from "react";
import { Shield, Lock, FileCheck, Eye, AlertTriangle } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Lock,
    title: "•	Encrypted Data Storage & Transmission ",
    description: "– Keeps all information safe",
  },
  {
    icon: Shield,
    title: "•	Controlled Access Permissions ",
    description: "Only authorized personnel can view sensitive data.",
  },
  {
    icon: FileCheck,
    title: "•	Secure Communication Channels ",
    description: "For safe messaging and file sharing.",
  },
  {
    icon: Eye,
    title: "•	Transparent Activity Tracking ",
    description: "Detailed audit logs for full oversight.",
  },
  {
    icon: AlertTriangle,
    title: "•	Proactive Security Updates ",
    description: "Staying current with HIPAA and best practices.",
  },
];

export const HIPAASecuritySection = () => {
  const sectionRef = useGsapFadeIn();

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-background">
      {/* Precision Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Global Compliance Protocol</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
              Fortified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">HIPAA Core.</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 leading-relaxed font-medium max-w-2xl mx-auto">
              We implement multi-layered security protocols and rigorous compliance standards to safeguard sensitive healthcare data at every touchpoint.
            </p>
          </motion.div>
        </div>

        {/* Security Matrix */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-32">
          
          {/* Left Column */}
          <div className="space-y-8">
            {securityFeatures.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 rounded-[3.5rem] bg-white border border-border/40 group hover:border-green/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-inner">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-black text-navy mb-4 uppercase tracking-widest">{feature.title.replace("•\t", "")}</h4>
                <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium">{feature.description.replace("–", "")}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: High-Impact Shield */}
          <div className="flex flex-col">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="flex-1 bg-navy rounded-[4rem] p-20 text-white relative overflow-hidden flex flex-col items-center justify-center text-center shadow-3xl"
             >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)]" />

                <div className="relative z-10">
                   <div className="w-40 h-40 rounded-full bg-green/10 border border-green/20 flex items-center justify-center mb-12 mx-auto relative group">
                      <div className="absolute inset-0 rounded-full bg-green/20 animate-ping opacity-20" />
                      <Shield className="w-20 h-20 text-green" />
                   </div>
                   <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">HIPAA CERTIFIED</h3>
                   <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-green shadow-glow-green" />
                      <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Secure Node Active</span>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {securityFeatures.slice(2, 5).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-12 rounded-[3.5rem] bg-white border border-border/40 group hover:border-green/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-inner">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-black text-navy mb-4 uppercase tracking-widest">{feature.title.replace("•\t", "")}</h4>
                <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Status Tray */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy/5 border border-border/40 rounded-[3rem] py-12 px-20 flex flex-wrap justify-between items-center gap-12"
        >
          {["BAA PROTECTED", "ENCRYPTED TRANSFER", "REGULAR AUDITS", "STAFF TRAINING"].map((label, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green shadow-glow-green" />
              <span className="text-[10px] font-black tracking-[0.4em] text-navy/40 uppercase">{label}</span>
            </div>
          ))}
          <div className="lg:ml-auto">
            <span className="text-[10px] font-black text-green/60 border border-green/20 px-6 py-2.5 rounded-full uppercase tracking-[0.2em] bg-green/5">
              Verified Compliance
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
