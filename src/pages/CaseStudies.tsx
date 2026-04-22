import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import {
  TrendingUp,
  Users,
  DollarSign,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Cardiology Practice Increases Revenue by 35%",
    specialty: "Cardiology",
    practiceSize: "3 Providers",
    location: "California",
    before: {
      collections: "$450,000/month",
      denialRate: "12%",
      daysInAR: "52",
      staff: "2 in-house billers",
    },
    after: {
      collections: "$607,500/month",
      denialRate: "3%",
      daysInAR: "28",
      staff: "0 in-house billers",
    },
    timeline: "6 Months",
    challenge:
      "The practice was struggling with high denial rates, delayed payments, and overwhelmed staff trying to manage billing alongside patient care.",
    solution:
      "Implemented end-to-end revenue cycle management with dedicated cardiology coders, real-time claim tracking, and proactive denial prevention.",
    results: [
      "35% increase in monthly collections",
      "75% reduction in claim denials",
      "46% faster payment turnaround",
      "Eliminated billing overhead costs",
    ],
    testimonial:
      '"MedBill Pro transformed our revenue cycle. Our denial rate dropped from 12% to 3% within the first three months. The cardiology-specific coding expertise made all the difference."',
    author: "Dr. James Morrison",
    role: "Practice Administrator",
  },
  {
    id: 2,
    title: "Family Practice Reduces A/R Days by 60%",
    specialty: "Family Practice",
    practiceSize: "5 Providers",
    location: "Texas",
    before: {
      collections: "$680,000/month",
      denialRate: "8%",
      daysInAR: "65",
      staff: "3 in-house billers",
    },
    after: {
      collections: "$850,000/month",
      denialRate: "2%",
      daysInAR: "26",
      staff: "1 in-house biller",
    },
    timeline: "4 Months",
    challenge:
      "The practice had aging accounts receivable with significant revenue tied up in claims over 60 days old. Cash flow was inconsistent and unpredictable.",
    solution:
      "Implemented aggressive A/R follow-up, improved claim scrubbing, and dedicated denial management team with weekly reporting.",
    results: [
      "25% increase in collections",
      "60% reduction in days in A/R",
      "Recovered $325,000 in aged A/R",
      "67% reduction in billing staff costs",
    ],
    testimonial:
      '"The A/R recovery was remarkable. They recovered over $300K in claims we thought were uncollectible. Our cash flow has never been more predictable."',
    author: "Sarah Thompson",
    role: "Practice Manager",
  },
  {
    id: 3,
    title: "Orthopedic Surgery Group Achieves 99% Clean Claim Rate",
    specialty: "Orthopedic Surgery",
    practiceSize: "8 Providers",
    location: "Florida",
    before: {
      collections: "$1.2M/month",
      denialRate: "15%",
      daysInAR: "48",
      staff: "5 in-house billers",
    },
    after: {
      collections: "$1.56M/month",
      denialRate: "1%",
      daysInAR: "22",
      staff: "0 in-house billers",
    },
    timeline: "8 Months",
    challenge:
      "Complex surgical procedures, multiple payers, and frequent coding updates led to high denial rates and significant revenue leakage.",
    solution:
      "Deployed specialized orthopedic coding team, implemented AI-powered claim scrubbing, and established quality assurance processes with 99.5% accuracy.",
    results: [
      "30% increase in revenue",
      "99% clean claim rate",
      "54% faster payment processing",
      "$400K annual savings on staffing",
    ],
    testimonial:
      '"The orthopedic coding expertise is unmatched. They understand the nuances of spinal procedures, joint replacements, and sports medicine coding better than anyone we\'ve worked with."',
    author: "Dr. Rebecca Martinez",
    role: "Managing Partner",
  },
];

const stats = [
  { value: "$50M+", label: "Annual Client Recoveries" },
  { value: "95%", label: "Average Collection Increase" },
  { value: "30", label: "Days Reduction in A/R" },
  { value: "1500+", label: "Successful Implementations" },
];

const CaseStudies = () => {
  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Result Architecture
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-navy text-white text-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Deployment Success Log</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Proof of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Performance.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Institutional-grade revenue stabilization across 1,500+ clinical deployments and {caseStudies.length} primary case study reports.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 text-left group hover:bg-white/[0.08] transition-all"
              >
                <div className="text-[9px] font-black tracking-[0.3em] text-white/30 uppercase mb-4">METRIC_0{i + 1}</div>
                <div className="text-3xl md:text-4xl font-black text-green mb-1 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          DEPLOYMENT REPORTS — Case Studies
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="grid lg:grid-cols-3 gap-12 bg-white border border-border/40 rounded-[3.5rem] p-8 md:p-16 shadow-sm group-hover:shadow-2xl group-hover:border-green/20 transition-all duration-700">
                   {/* Col 1: Parameter Comparison */}
                   <div className="space-y-8">
                      <div className="text-[11px] font-black text-navy px-6 py-2 bg-navy/5 rounded-full inline-block uppercase tracking-widest border border-navy/10">
                        {study.specialty}
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xs font-black text-foreground/40 uppercase tracking-[0.3em]">Parameter Shift</h3>
                        <div className="bg-muted/30 rounded-[2rem] p-8 border border-border/40 overflow-hidden relative">
                           <div className="space-y-6">
                              {[
                                { label: "Collections", b: study.before.collections, a: study.after.collections },
                                { label: "Denial Rate", b: study.before.denialRate, a: study.after.denialRate },
                                { label: "Days in A/R", b: study.before.daysInAR, a: study.after.daysInAR }
                              ].map((row, i) => (
                                <div key={i} className="flex items-center justify-between gap-6">
                                   <div className="text-[10px] font-black text-foreground/30 uppercase tracking-tighter">{row.label}</div>
                                   <div className="flex items-center gap-4">
                                      <div className="text-[11px] font-bold text-red-500/60 line-through tracking-tighter">{row.b}</div>
                                      <ArrowRight className="w-3 h-3 text-border" />
                                      <div className="text-[12px] font-black text-green tracking-tighter">{row.a}</div>
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      </div>

                      <div className="pt-8 space-y-4">
                        <div className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Institutional Context</div>
                        <div className="flex items-center gap-4 text-xs font-bold text-foreground/60 uppercase tracking-tight">
                           <span>{study.practiceSize}</span>
                           <div className="w-1 h-1 rounded-full bg-border" />
                           <span>{study.location}</span>
                        </div>
                      </div>
                   </div>

                   {/* Col 2: Narrative Analysis */}
                   <div className="lg:col-span-2 space-y-12">
                      <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-[1.1] group-hover:text-navy transition-colors">
                        {study.title}
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-12">
                         <div>
                            <h4 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-4">Challenge_Log</h4>
                            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{study.challenge}</p>
                         </div>
                         <div>
                            <h4 className="text-[10px] font-black text-navy-light uppercase tracking-[0.3em] mb-4">Solution_Deployment</h4>
                            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{study.solution}</p>
                         </div>
                      </div>

                      <div className="bg-navy rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                            <TrendingUp className="w-48 h-48" />
                         </div>
                         <h4 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-10 relative z-10">Consolidated Yield Results — {study.timeline}</h4>
                         <ul className="grid md:grid-cols-2 gap-6 relative z-10">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group/item hover:border-green/50 transition-all">
                                 <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                                 <span className="text-xs font-black uppercase tracking-widest text-white/80 group-hover/item:text-white transition-colors">{result}</span>
                              </li>
                            ))}
                         </ul>
                      </div>

                      {/* Testimonial Glass Block */}
                      <div className="flex items-start gap-8 pt-10 border-t border-border/40">
                         <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center font-black text-sm text-foreground/30 shrink-0">
                           {study.author.split(' ').map(n => n[0]).join('')}
                         </div>
                         <div>
                            <p className="text-lg font-medium italic text-foreground mb-4 leading-relaxed">"{study.testimonial}"</p>
                            <div className="text-[10px] font-black text-navy uppercase tracking-widest">{study.author}</div>
                            <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter mt-1">{study.role}</div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PROJECTION ENGINE — ROI Calculator Block
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 relative overflow-hidden border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-navy p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
             {/* Visual Background Pattern */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
             </div>

             <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-4 mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                  <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Yield Projection Engine v3.1</span>
                </div>
                
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase whitespace-pre-line leading-[0.9]">Project Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Fiscal Shift.</span></h2>
                
                <p className="text-lg text-white/40 mb-16 max-w-xl mx-auto font-medium leading-relaxed">
                  Analyze potential efficiency gains based on your current institutional billing baseline.
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-left">
                   <div className="space-y-6">
                      {[
                        { label: "Revenue Increase", value: "20-35%" },
                        { label: "Denial Reduction", value: "50-75%" },
                        { label: "Cost Savings", value: "Up to 40%" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{item.label}</span>
                           <span className="text-xl font-black text-green tracking-tighter">{item.value}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="bg-white rounded-[2rem] p-10 text-navy text-center shadow-2xl">
                      <div className="text-[9px] font-black uppercase tracking-[0.3em] text-navy/30 mb-4">Calculated Average Recovery</div>
                      <div className="text-5xl font-black tracking-tighter mb-8 leading-none">$250K+</div>
                      <Button className="w-full h-16 rounded-xl bg-navy hover:bg-navy-light text-white font-black uppercase tracking-widest text-[10px] transition-all" asChild>
                        <Link to="/contact">Request Assessment Protocol</Link>
                      </Button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Be Our Next Success Story?"
        description="Join 1,500+ healthcare providers who have transformed their revenue cycle with MedBill Pro."
        primaryButtonText="Schedule a Consultation"
      />
    </PageWrapper>
  );
};

export default CaseStudies;
