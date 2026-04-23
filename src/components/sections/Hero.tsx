import { useRef } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/common/ContactForm";
import { motion } from "framer-motion";
import {
  useGsapFadeIn,
  useGsapTextReveal,
} from "@/hooks/useGsapAnimations";

const heroFeatures = [
  { icon: Zap, text: "99% Clean Claim Rate" },
  { icon: Activity, text: "24-48 Hour Turnaround" },
  { icon: ShieldCheck, text: "HIPAA Compliant" },
];

export const Hero = () => {
  const titleRef = useGsapTextReveal();
  const subtitleRef = useGsapFadeIn(0.3);
  const formContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-16">
      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-new.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-background" />
        
        {/* Dynamic Light Rays */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-navy-light/30 blur-[100px] rounded-full animate-float" />
        
        {/* Technical Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green animate-ping" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/80">Next-Gen RCM Systems</span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
            >
              Optimized Medical Billing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-white to-green-light animate-gradient-x">
                Increase Your Revenue
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              SmartMed Billing Solutions provides expert medical billing and consulting services aimed at streamlining your practice operations and improving financial outcomes. Our all-inclusive offerings cover full-service billing, telehealth and RPM support, and provider credentialing each customized to support your practice’s growth and success.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-16">
              <Button
                size="lg"
                className="bg-green hover:bg-green-light text-navy group px-8 md:px-12 h-16 md:h-20 rounded-2xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] text-sm md:text-lg font-black transition-all duration-300 hover:scale-[1.02] active:scale-95"
                asChild
              >
                <Link to="/contact">
                  Maximize Reimbursements
                  <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Feature Cards - Unique Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-10">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-green" />
                  </div>
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-widest leading-tight">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Card Column */}
          <div className="flex-1 w-full max-w-xl lg:max-w-md xl:max-w-xl">
            <motion.div 
              ref={formContainerRef}
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-green/20 blur-3xl rounded-[3rem] -z-10 animate-pulse-slow" />
              
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-2 shadow-2xl shadow-black/40">
                <div className="bg-white rounded-[2.5rem] p-2">
                  <ContactForm variant="hero" />
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-navy-light rounded-3xl p-6 shadow-xl border border-white/10 hidden xl:flex items-center justify-center"
              >
                <Activity className="w-10 h-10 text-green" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-green rounded-2xl p-5 shadow-xl border border-white/10 hidden xl:flex items-center justify-center"
              >
                <ShieldCheck className="w-10 h-10 text-navy" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};