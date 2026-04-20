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
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-background"
    >
      {/* Decorative Security Grids */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-navy/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
            <span className="w-10 h-0.5 bg-green"></span>
            Compliance Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
            Enterprise-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">HIPAA Security.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            We implement multi-layered security protocols and rigorous compliance standards to safeguard sensitive healthcare data at every touchpoint.
          </p>
        </div>

        {/* Centralized Security Hub Card */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Left Column Features */}
          <div className="space-y-6">
            {securityFeatures.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-navy/40 border border-border/50 group hover:border-green/30 transition-all duration-300 technical-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{feature.title.replace("•\t", "")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description.replace("–", "")}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: High-Impact Shield */}
          <div className="flex flex-col">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex-1 bg-navy rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl"
             >
                {/* Shield Animation Background */}
                <div className="absolute inset-0 opacity-10">
                   <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                   </svg>
                </div>

                <div className="relative z-10">
                   <div className="w-24 h-24 rounded-full bg-green/20 border-4 border-green/30 flex items-center justify-center mb-8 mx-auto">
                      <Shield className="w-12 h-12 text-green" />
                   </div>
                   <h3 className="text-3xl font-bold mb-4 italic">HIPAA CERTIFIED</h3>
                   <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase">
                      Protocol v2.1 ACTIVE
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right Column Features */}
          <div className="space-y-6">
            {securityFeatures.slice(2, 5).map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-navy/40 border border-border/50 group hover:border-green/30 transition-all duration-300 technical-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{feature.title.replace("•\t", "")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Security Features Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-full py-6 px-12 flex flex-wrap justify-center gap-10 md:gap-16 border-border/50"
        >
          {["BAA PROTECTED", "ENCRYPTED TRANSFER", "REGULAR AUDITS", "STAFF TRAINING"].map((label, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-black tracking-[0.2em] text-foreground/60">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
