import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X, Calculator, DollarSign, ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    name: "Starter",
    description: "For small practices just getting started",
    rate: "7%",
    minMonthly: "$500",
    features: [
      "Claims submission",
      "Payment posting",
      "Basic reporting",
      "Email support",
      "HIPAA compliant"
    ],
    notIncluded: ["Denial management", "Credentialing", "A/R recovery"]
  },
  {
    name: "Professional",
    description: "For growing practices needing full support",
    rate: "5.5%",
    minMonthly: "$1,000",
    popular: true,
    features: [
      "Everything in Starter",
      "Denial management",
      "Prior authorization",
      "Detailed analytics",
      "Phone & email support",
      "Dedicated account manager"
    ],
    notIncluded: ["Credentialing", "Custom integrations"]
  },
  {
    name: "Enterprise",
    description: "For large practices and multi-location groups",
    rate: "Custom",
    minMonthly: "Contact us",
    features: [
      "Everything in Professional",
      "Provider credentialing",
      "Custom integrations",
      "A/R recovery",
      "24/7 priority support",
      "On-site training",
      "Custom reporting"
    ],
    notIncluded: []
  }
];

const Pricing = () => {
  const [monthlyCollections, setMonthlyCollections] = useState([50000]);
  const currentCollection = monthlyCollections[0];
  const inHouseCost = currentCollection * 0.12; // 12% typical in-house cost
  const ourCost = currentCollection * 0.055; // 5.5% our rate
  const savings = inHouseCost - ourCost;

  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useGsapScrollReveal();
  const savingsValuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero background
    if (heroBgRef.current) {
      gsap.to(heroBgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroBgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Animate savings values when they change
    if (savingsValuesRef.current) {
      const values = savingsValuesRef.current.querySelectorAll('.savings-value');
      values.forEach((value) => {
        gsap.fromTo(value,
          { scale: 1.2, color: '#10b981' },
          { scale: 1, color: '', duration: 0.3, ease: 'power2.out' }
        );
      });
    }
  }, [currentCollection]);

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Fiscal Architecture
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
            <DollarSign className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Fiscal Architecture v2.5</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Revenue <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Realization.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Performance-based resource allocation logic designed to maximize throughput and minimize operational friction.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="h-20 px-12 rounded-2xl bg-green hover:bg-white text-navy font-black uppercase tracking-widest text-xs transition-all shadow-2xl" asChild>
                <Link to="/contact">
                  Initialize Quote <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 px-8 h-20 rounded-2xl border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                 <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                 Zero Upfront Terminal Fees
              </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          REVENUE SIMULATOR — ROI Projection
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-border/40 rounded-[4rem] overflow-hidden shadow-2xl group hover:border-green/20 transition-all duration-700"
            >
              <div className="bg-navy p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 blur-3xl -z-0" />
                <div className="relative z-10 text-center md:text-left">
                  <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Simulator_Logic</div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Revenue Optimization</h2>
                </div>
                <div className="relative z-10 shrink-0">
                  <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl text-center">
                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Efficiency Delta</div>
                    <div className="text-2xl font-black text-green tabular-nums">+24.8%</div>
                  </div>
                </div>
              </div>

              <div ref={savingsValuesRef} className="p-10 md:p-20 space-y-20">
                <div className="space-y-12">
                  <div className="flex items-end justify-between border-b border-border/40 pb-6">
                    <label className="text-[10px] font-black text-navy tracking-[0.3em] uppercase">
                      Monthly_Collections_Terminal
                    </label>
                    <span className="text-4xl font-black text-navy italic tracking-tighter tabular-nums underline decoration-green decoration-4 underline-offset-8">
                      ${currentCollection.toLocaleString()}
                    </span>
                  </div>
                  
                  <Slider
                    value={monthlyCollections}
                    onValueChange={setMonthlyCollections}
                    min={10000}
                    max={500000}
                    step={5000}
                    className="w-full text-navy"
                  />
                  <div className="flex justify-between text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">
                    <span>Min : $10k</span>
                    <span>Load Factor [Peak]</span>
                    <span>Max : $500k</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-10 bg-muted/20 border border-border/40 rounded-[2.5rem] text-center hover:bg-white hover:border-destructive/20 transition-all duration-500">
                    <p className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest mb-6">Legacy In-House Cost [12%]</p>
                    <p className="text-4xl font-black text-navy savings-value tabular-nums mb-4">${inHouseCost.toLocaleString()}</p>
                    <div className="text-[10px] font-black text-destructive uppercase tracking-tight italic">Operational Friction</div>
                  </div>
                  
                  <div className="p-10 bg-muted/20 border border-border/40 rounded-[2.5rem] text-center hover:bg-white hover:border-green/20 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    <p className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest mb-6 text-navy">Smart Protocol Cost [5.5%]</p>
                    <p className="text-4xl font-black text-green savings-value tabular-nums mb-4">${ourCost.toLocaleString()}</p>
                    <div className="text-[10px] font-black text-navy uppercase tracking-tight italic">Resource Allocation</div>
                  </div>
                  
                  <div className="p-10 bg-navy text-white rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
                    </div>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-6">Realized Savings Node</p>
                    <p className="text-4xl font-black text-green savings-value tabular-nums mb-4">${savings.toLocaleString()}</p>
                    <div className="text-[10px] font-black text-white/60 uppercase tracking-tight italic">Net Profit Growth</div>
                  </div>
                </div>

                <div className="text-center p-12 bg-muted/20 border border-border/40 rounded-[3rem] group-hover:bg-white transition-colors duration-700">
                  <div className="inline-flex items-center gap-4 mb-4">
                     <Calculator className="w-4 h-4 text-navy" />
                     <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.4em]">Integrated Yield Analysis</span>
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter italic">
                    Annual Profit Injection: <span className="text-green">${(savings * 12).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PRICING TIERS — Deployment Modules
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Module_Matrix</div>
             <h2 className="text-3xl md:text-7xl font-black text-navy uppercase tracking-tighter">Deployment Modules</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div className={`h-full bg-white border border-border/40 rounded-[3rem] p-12 flex flex-col hover:border-green/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${tier.popular ? 'ring-2 ring-green/20 shadow-xl' : ''}`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 px-8 py-3 bg-navy text-green text-[9px] font-black uppercase tracking-[0.3em] italic rounded-bl-[2rem] border-l border-b border-white/10">
                      Primary_Protocol
                    </div>
                  )}
                  
                  <div className="mb-12">
                     <h3 className="text-3xl font-black text-navy uppercase tracking-tighter mb-4">{tier.name}</h3>
                     <p className="text-xs text-muted-foreground font-medium italic mb-10 leading-relaxed uppercase tracking-tight">{tier.description}</p>
                     
                     <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-6xl font-black text-navy tracking-tighter italic tabular-nums">{tier.rate}</span>
                        {tier.rate !== "Custom" && <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">Load Factor</span>}
                     </div>
                     <div className="text-[10px] font-black text-green uppercase tracking-widest">Min Reserve: {tier.minMonthly}/mo</div>
                  </div>

                  <div className="space-y-6 flex-1 mb-12">
                    <div className="text-[9px] font-black text-navy/20 uppercase tracking-[0.4em] border-b border-border/40 pb-4">Logic_Features</div>
                    <ul className="space-y-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-5 h-5 rounded-lg bg-green/10 text-green flex items-center justify-center shrink-0 mt-0.5">
                             <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-relaxed italic">{feature}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4 opacity-30 grayscale saturate-0">
                          <div className="w-5 h-5 rounded-lg bg-muted text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                             <X className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-relaxed italic">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`h-20 w-full rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                      tier.popular ? 'bg-navy text-green hover:bg-green hover:text-navy' : 'bg-muted/30 text-navy/40 border border-border/40 hover:bg-navy hover:text-white'
                    }`}
                    asChild
                  >
                    <Link to="/contact">Select Protocol</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <FAQSection />
      </div>

      <CTASection
        title="Need a Custom Logic Audit?"
        description="Every practice deployment is unique. Contact us for a high-density fiscal documentation request."
        primaryButtonText="Request Logic Audit"
      />
    </PageWrapper>
  );
};

export default Pricing;
