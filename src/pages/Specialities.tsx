import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { staggerContainer, staggerItem } from "@/lib/animations";
import { specialities } from "@/data/specialties";

const Specialities = () => {
  const [hoveredSpecialty, setHoveredSpecialty] = useState<string | null>(null);

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Domain Architecture
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-56 lg:pb-40 relative overflow-hidden bg-navy text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 mb-12 shadow-inner"
          >
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/60">Cross-Domain Competency</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-9xl font-black mb-12 leading-[0.8] tracking-tighter uppercase">
            Specialized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-green">Intelligence.</span>
          </h1>
          
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium mb-24 border-l-2 border-green/20 pl-10 text-left md:text-center md:border-l-0 md:pl-0">
            Providing institutional-grade revenue management across {specialities.length}+ medical domains with precision-mapped workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { value: "98%", label: "ACCURACY_INDEX", sub: "Clean Claim Baseline" },
              { value: "30%", label: "LATENCY_REDUCTION", sub: "Accelerated Liquidity" },
              { value: "40+", label: "ACTIVE_DOMAINS", sub: "Verified Specialties" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 text-left group hover:bg-white/[0.06] transition-all duration-500 hover:shadow-3xl"
              >
                <div className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-6">{stat.label}</div>
                <div className="text-6xl font-black text-green mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-none">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          DOMAIN MATRIX — Specialties Grid
      ───────────────────────────────────────── */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Service Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                Clinical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-navy-light to-navy">Interface Matrix.</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {specialities.map((specialty, idx) => {
              const Icon = specialty.icon;
              return (
                <motion.div
                  key={specialty.id}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white border border-border/40 rounded-[3rem] p-10 flex flex-col items-center text-center hover:border-green/20 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="absolute top-8 right-10 text-[10px] font-black text-navy/5 uppercase tracking-widest">SPEC_0{idx + 1}</div>
                  
                  <div className="w-20 h-20 rounded-3xl bg-navy/5 group-hover:bg-navy group-hover:text-green flex items-center justify-center mb-10 transition-all duration-500 shadow-inner">
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-sm font-black text-navy uppercase tracking-widest leading-tight mb-6 group-hover:text-navy transition-colors">
                    {specialty.name}
                  </h3>
                  
                  <p className="text-[11px] text-muted-foreground/80 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {specialty.description}
                  </p>

                  <div className="mt-auto pt-8 w-full opacity-0 group-hover:opacity-100 transition-all">
                    <Button variant="ghost" size="sm" className="w-full text-[11px] font-black uppercase tracking-[0.2em] text-green hover:text-navy hover:bg-green/10 rounded-xl" asChild>
                      <Link to="/contact">Request Protocol <ArrowRight className="w-4 h-4 ml-3" /></Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          INFRASTRUCTURE VALUE
      ───────────────────────────────────────── */}
      <section className="py-40 bg-navy/[0.02] relative overflow-hidden border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Corporate Advantage</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                Operational <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Edge.</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Domain Expertise",
                desc: "Institutional expertise in medical coding and compliance across multi-payer landscapes.",
              },
              {
                title: "Tailored Architecture",
                desc: "Bespoke workflow tunnels integrated with your specific clinical interface.",
              },
              {
                title: "Tech-Forward Stack",
                desc: "Real-time analytics and predictive denial mapping via proprietary software layers.",
              },
              {
                title: "Dedicated Engineering",
                desc: "Direct access to senior billing engineers and regulatory specialists 24/7.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border/40 p-12 rounded-[3.5rem] group hover:border-green/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] font-medium text-muted-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          MISSION STATEMENT — Our Commitment
      ───────────────────────────────────────── */}
      <section className="py-48 bg-navy relative overflow-hidden">
        {/* Visual Accent */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">Our Core Commitment</span>
            </div>
            
            <h2 className="text-5xl md:text-9xl font-black text-white mb-16 leading-[0.8] tracking-tighter uppercase">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-green">Clinical Finance.</span>
            </h2>
            
            <p className="text-xl text-white/40 mb-24 leading-relaxed font-medium max-w-3xl mx-auto border-l-2 border-green/20 pl-10 text-left md:text-center md:border-l-0 md:pl-0">
              We engineer revenue cycles that empower healthcare providers to focus exclusively on clinical outcomes, while we manage the financial architecture.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-10">
              <Button size="lg" className="bg-green hover:bg-white text-navy px-16 h-20 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-3xl shadow-green/20 transition-all hover:scale-105 active:scale-95 group" asChild>
                <Link to="/contact">
                  Initiate Partnership
                  <ArrowRight className="w-6 h-6 ml-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-16 h-20 rounded-full text-sm font-black uppercase tracking-[0.2em] border-white/20 hover:bg-white/5 text-white transition-all hover:scale-105 active:scale-95" asChild>
                <Link to="/services">Explore Architecture</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FAQ INTERFACE — Technical Resolution
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase">
              Common <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light underline decoration-green/30 underline-offset-8">Inquiries.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "Institutional Differentiation",
                a: "SmartMed Billing Solutions integrates proprietary algorithmic auditing with senior human oversight to stabilize revenue streams across highly complex domains.",
              },
              {
                q: "Clinical Domain Range",
                a: "Our architecture is mapped to support over 40 distinct medical domains, including specialized surgery, internal medicine, and durable medical equipment.",
              },
              {
                q: "Revenue Stabilization",
                a: "We minimize claim latencies and denial coefficients via real-time data sync and predictive analytics layers integrated into our billing cores.",
              },
              {
                q: "Regulatory Compliance Integration",
                a: "All processes are encrypted and compliant with CMS, HIPAA, and emerging payer-specific data protocols, ensuring 0% compliance friction.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-border/40 p-10 rounded-[2.5rem] hover:border-green/20 transition-all shadow-sm group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-black text-foreground uppercase tracking-widest group-hover:text-navy transition-colors">
                    {item.q}
                  </h4>
                  <div className="w-2 h-2 rounded-full bg-border group-hover:bg-green transition-colors" />
                </div>
                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-muted/30 border border-border/40 p-12 rounded-[2.5rem] inline-block max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 mb-6">Additional Queries?</p>
              <h4 className="text-2xl font-black text-foreground mb-8 tracking-tighter uppercase whitespace-nowrap">Technical Support Infrastructure.</h4>
              <Button className="bg-navy hover:bg-navy-light text-white px-10 h-16 rounded-xl font-black uppercase tracking-widest text-xs" asChild>
                <Link to="/contact">Contact Support Protocol</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Specialty?"
        description="We work with all medical specialities. Contact us to learn how we can help your practice."
      />
    </PageWrapper>
  );
};

export default Specialities;
