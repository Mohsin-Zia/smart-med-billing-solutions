import { useRef, useEffect, useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import {
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import { ContactForm } from "@/components/common/ContactForm";
import GoogleMap from "@/components/common/GoogleMap";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────
// Carousel Component - Premium Technical
// ─────────────────────────────────────────
interface CarouselItem {
  title: string;
  description: string;
}

const VISIBLE = 3;

const ServiceCarousel = ({ items }: { items: CarouselItem[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const totalPages = Math.ceil(items.length / VISIBLE);
  const currentPage = Math.floor(startIndex / VISIBLE);

  const prev = useCallback(() => {
    setDirection("left");
    setStartIndex((i) =>
      i === 0
        ? Math.floor((items.length - 1) / VISIBLE) * VISIBLE
        : i - VISIBLE,
    );
  }, [items.length]);

  const next = useCallback(() => {
    setDirection("right");
    setStartIndex((i) => {
      const n = i + VISIBLE;
      return n >= items.length ? 0 : n;
    });
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setStartIndex((i) => {
        const n = i + VISIBLE;
        return n >= items.length ? 0 : n;
      });
    }, 8000);
    return () => clearInterval(timer);
  }, [items.length]);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  const visibleItems = items.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Integrated Modules</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-[1.1] tracking-tighter uppercase">
              What's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light underline decoration-green/30 underline-offset-8">Included.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
             <Button 
               variant="outline" 
               size="icon" 
               onClick={prev}
               className="w-14 h-14 rounded-2xl border-border/40 hover:bg-navy hover:text-white transition-all shadow-sm"
             >
               <ChevronLeft className="w-6 h-6" />
             </Button>
             <Button 
               variant="outline" 
               size="icon" 
               onClick={next}
               className="w-14 h-14 rounded-2xl border-border/40 hover:bg-navy hover:text-white transition-all shadow-sm"
             >
               <ChevronRight className="w-6 h-6" />
             </Button>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleItems.map((item, i) => (
                <div
                  key={startIndex + i}
                  className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-border/40 p-12 flex flex-col group hover:border-green/30 transition-all duration-500 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[10px] font-black font-mono tracking-tighter text-foreground/20 group-hover:text-green transition-colors">
                      MOD_0{startIndex + i + 1}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-border group-hover:bg-green transition-colors" />
                  </div>
                  <h3 className="text-sm font-black text-foreground uppercase tracking-widest leading-tight mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress System */}
        <div className="mt-16 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? "right" : "left");
                setStartIndex(i * VISIBLE);
              }}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === currentPage ? "w-12 bg-green shadow-[0_0_12px_rgba(34,197,94,0.4)]" : "w-4 bg-border hover:bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────
const Services = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const heroContentRef = useGsapScrollReveal();

  const service = services.find((s) => s.id === serviceId);

  if (!service) return <Navigate to="/" replace />;

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Industrial Architecture
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-navy text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <service.icon className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Service Protocol: {service.id}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            {service.title.split(" ").slice(0, -1).join(" ")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">{service.title.split(" ").slice(-1)}</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            {service.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-green hover:bg-green/90 text-navy px-12 h-20 rounded-2xl text-lg font-black shadow-2xl transition-all" asChild>
              <Link to="/contact">
                Deploy Solution
                <ArrowRight className="w-5 h-5 ml-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-12 h-20 rounded-2xl text-lg font-black border-white/20 hover:bg-white/10 text-white transition-all"
              asChild
            >
              <Link to="/pricing">Pricing Model</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CORE INFRASTRUCTURE — Bento Analysis
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Operational Benefits</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-10 leading-[1.1] tracking-tighter uppercase">
                Systematic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light">Optimization.</span>
              </h2>
              
              <div className="grid gap-6 mt-auto">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 rounded-[2rem] bg-muted/20 border border-border/40 group hover:border-green/30 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-green transition-all shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-2">{benefit.split(":")[0]}</h4>
                      <p className="text-[11px] text-muted-foreground font-medium">{benefit.split(":")[1] || "Automated refinement for clinical and financial data streams."}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-navy rounded-[3rem] p-16 text-white relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                <service.icon className="w-64 h-64" />
              </div>
              
              <h3 className="text-xs font-black text-green uppercase tracking-[0.3em] mb-12 relative z-10">Feature Matrix v4.2</h3>
              
              <ul className="space-y-6 relative z-10 mb-16">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-green/40 group-hover:bg-green transition-colors" />
                    <span className="text-sm font-medium tracking-tight text-white/70 group-hover:text-white transition-colors uppercase">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10 border-t border-white/10 relative z-10">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-black text-green tracking-tighter">95%+</div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-2">Efficiency Rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white tracking-tighter">24hr</div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-2">Latency Target</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {service.carouselItems && service.carouselItems.length > 0 && (
        <ServiceCarousel items={service.carouselItems} />
      )}

      <section className="py-24 bg-muted/20 relative overflow-hidden border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Strategic Integration</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 tracking-tighter uppercase">
                Why Interface with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light text-6xl">Smart Medical Billing Solutions.</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Eliminate manual processing latencies",
                  "Architect higher reimbursement yields",
                  "Enhance patient financial interfaces",
                  "Automate regulatory compliance sync",
                  "Dedicated senior engineering support"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-border/40 group hover:shadow-xl transition-all">
                    <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl">
                <GoogleMap
                  initialLocation={{
                    lat: 40.740769,
                    lng: -74.004258,
                    address: "2780 Picacho Ave, Las Cruces, NM 88007"
                  }}
                  height="400px"
                  className="grayscale brightness-90 contrast-125"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-12 w-px h-24 bg-gradient-to-b from-green to-transparent opacity-40" />
                
                <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Initiate Audit</h3>
                <p className="text-white/50 text-sm mb-10 font-medium">System evaluation protocol v2.48 — Average response: 180min</p>
                
                <div className="technical-form dark">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Implementation Pipeline</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
              System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green/50">Deployment.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto relative">
            <div className="absolute top-1/4 left-0 w-full h-px bg-white/5 hidden md:block" />
            
            {[
              { step: "01", label: "INTAKE", sub: "Analyze clinical data streams" },
              { step: "02", label: "SETUP", sub: "Architect workflow tunnels" },
              { step: "03", label: "EXECUTE", sub: "Activate real-time processing" },
              { step: "04", label: "OPTIMIZE", sub: "Maximum yield stabilization" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="text-7xl font-black text-white/5 mb-8 tracking-tighter">{item.step}</div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4">{item.label}</h3>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.sub}</p>
                <div className="mt-8 w-8 h-1 bg-green/20 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Billing?"
        description="Let our experts handle your revenue cycle while you focus on patient care."
      />
    </PageWrapper>
  );
};

export default Services;
