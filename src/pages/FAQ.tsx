import { FAQSection } from "@/components/sections/FAQSection";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Knowledge Repository
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-navy text-white text-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <HelpCircle className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Knowledge Repository v2.5</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Clarifications.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12 italic">
            Comprehensive technical documentation addressing the operational logic, security protocols, and revenue architecture of our billing system.
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/30">
             <div className="w-1 h-1 rounded-full bg-green" />
             <span>Active Intelligence Feed</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FAQ CONTENT MODULE
      ───────────────────────────────────────── */}
      <div className="bg-background">
        <FAQSection showTitle={false} />
      </div>

      <CTASection 
        title="Unresolved Query?"
        description="Our clinical technical support team is available 24/7 for deeper protocol investigations."
        primaryButtonText="Contact Support"
      />
    </PageWrapper>
  );
};

export default FAQ;
