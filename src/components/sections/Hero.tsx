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
    <section className="relative min-h-screen pt-36 lg:pt-36 pb-24 flex items-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay scale-105"
          style={{
            backgroundImage: `url('/hero-bg-v2.png')`,
          }}
        />
        
        {/* Animated Mesh-style Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-green/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-navy/20 blur-[100px] rounded-full" />
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-green/10 text-primary text-xs font-bold tracking-widest uppercase border border-green/20 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
               Unity Billing Solutions
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-green to-green/80">
                Revenue Cycle
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Transform your practice with expert medical billing and 
              consulting solutions. We streamline your operations so you can focus on 
              what matters most—your patients.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-12">
              <Button
                size="lg"
                className="bg-green hover:bg-green/90 text-white group px-8 h-14 rounded-2xl shadow-lg shadow-green/20 text-base font-semibold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Optimize Revenue
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-14 rounded-2xl border-border/50 text-foreground hover:bg-muted font-semibold text-base backdrop-blur-md"
                asChild
              >
                <Link to="services/medical-billing">Explore Solutions</Link>
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center bg-card/50 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-border/40 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center mr-3">
                    <feature.icon className="w-4 h-4 text-green" />
                  </div>
                  <span className="text-xs font-bold text-foreground/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Unique Visualization / Form Card */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green to-navy rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <motion.div 
                ref={formContainerRef}
                initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-card border border-border pb-2 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm"
              >
                  <ContactForm variant="hero" />

              </motion.div>

             
            </div>
          </div>

        </div>
      </div>
</section>
  );
};
