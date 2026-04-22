import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Users, Heart, Award, Target, Zap, Briefcase, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision insurance for you and your family"
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Annual training budget, certification reimbursement, and career growth opportunities"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible remote work options, generous PTO, and paid parental leave"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Salary above market rates, performance bonuses, and 401(k) matching"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with regular team events and employee recognition"
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description: "Clear career paths with internal promotion and leadership development"
  }
];

const openPositions = [
  {
    id: 1,
    title: "Medical Coder - Cardiology",
    department: "Coding",
    type: "Full-Time Remote",
    experience: "3+ years",
    salary: "$65,000 - $85,000",
    description: "We're seeking an experienced medical coder with cardiology specialty expertise to join our growing team.",
    requirements: [
      "CPC or CCS certification required",
      "Minimum 3 years cardiology coding experience",
      "Expert knowledge of ICD-10-CM, CPT, and HCPCS coding",
      "Understanding of cardiology procedures and terminology",
      "Strong attention to detail and quality focus"
    ],
    responsibilities: [
      "Review and code cardiology medical records accurately",
      "Ensure compliance with coding guidelines and regulations",
      "Work closely with billing team to resolve coding issues",
      "Stay current with annual coding updates and changes",
      "Maintain 99.5% coding accuracy rate"
    ]
  },
  {
    id: 2,
    title: "Revenue Cycle Manager",
    department: "Operations",
    type: "Full-Time Remote",
    experience: "5+ years",
    salary: "$85,000 - $110,000",
    description: "Lead a team of billing specialists and manage revenue cycle operations for multiple client practices.",
    requirements: [
      "Bachelor's degree in Healthcare Administration or related field",
      "5+ years of medical billing and revenue cycle experience",
      "2+ years of team leadership experience",
      "CPAM or similar certification preferred",
      "Strong analytical and problem-solving skills"
    ],
    responsibilities: [
      "Oversee daily billing operations for assigned client accounts",
      "Monitor and improve key performance metrics (KPIs)",
      "Lead and mentor a team of billing specialists",
      "Develop and implement process improvements",
      "Serve as primary point of contact for client relationships"
    ]
  },
  {
    id: 3,
    title: "Denial Management Specialist",
    department: "Billing",
    type: "Full-Time Remote",
    experience: "2+ years",
    salary: "$55,000 - $70,000",
    description: "Focus on preventing, analyzing, and appealing denied claims to maximize client revenue.",
    requirements: [
      "2+ years of medical billing experience",
      "Strong understanding of denial causes and prevention strategies",
      "Experience with appeals process and documentation",
      "Excellent written and verbal communication",
      "Detail-oriented with strong follow-up skills"
    ],
    responsibilities: [
      "Analyze denied claims to identify root causes",
      "Develop and implement prevention strategies",
      "Prepare and submit appeal documentation",
      "Track and report on denial trends and metrics",
      "Collaborate with coding team to prevent future denials"
    ]
  },
  {
    id: 4,
    title: "Client Success Manager",
    department: "Account Management",
    type: "Full-Time Remote",
    experience: "3+ years",
    salary: "$70,000 - $90,000",
    description: "Build strong relationships with healthcare clients and ensure their success with our services.",
    requirements: [
      "3+ years account management or client success experience",
      "Healthcare industry experience strongly preferred",
      "Strong relationship-building and communication skills",
      "Proactive problem-solving abilities",
      "Experience managing multiple client accounts"
    ],
    responsibilities: [
      "Serve as primary point of contact for assigned clients",
      "Conduct regular check-ins and business reviews",
      "Identify opportunities to expand service offerings",
      "Address client concerns and coordinate resolution",
      "Maintain high client satisfaction and retention rates"
    ]
  },
  {
    id: 5,
    title: "Medical Billing Trainee",
    department: "Training",
    type: "Full-Time Remote",
    experience: "Entry Level",
    salary: "$40,000 - $50,000",
    description: "Start your career in medical billing with our comprehensive training program.",
    requirements: [
      "High school diploma or equivalent required",
      "Associate's degree in healthcare or business preferred",
      "Strong attention to detail and data entry skills",
      "Excellent communication abilities",
      "Eagerness to learn and grow in the industry"
    ],
    responsibilities: [
      "Complete 12-week paid training program",
      "Learn medical billing software and processes",
      "Study and obtain coding certification",
      "Assist senior billers with claim processing",
      "Progress to independent billing responsibilities"
    ]
  },
  {
    id: 6,
    title: "QA/Auditing Specialist",
    department: "Quality Assurance",
    type: "Full-Time Remote",
    experience: "4+ years",
    salary: "$70,000 - $85,000",
    description: "Ensure coding and billing accuracy through comprehensive audits and quality assurance processes.",
    requirements: [
      "CPC, CCS, or similar certification required",
      "4+ years of medical coding experience",
      "Previous auditing or QA experience preferred",
      "Strong understanding of compliance requirements",
      "Excellent analytical and documentation skills"
    ],
    responsibilities: [
      "Conduct random audits of coded claims",
      "Identify coding trends and provide feedback",
      "Develop training materials based on audit findings",
      "Maintain quality metrics and reports",
      "Ensure 99%+ accuracy standards are met"
    ]
  }
];

const cultureValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from coding accuracy to customer service."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as a team, supporting each other to achieve our goals and deliver exceptional results."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and innovative approaches to improve our services."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our business relationships."
  }
];

const Careers = () => {
  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Talent Infrastructure
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
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Global Talent Operations</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Architect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Future Core.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Join a 500+ member engineering and operations ecosystem dedicated to clinical revenue architecture.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          BENEFITS GRID — Ecosystem Support
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Core Infrastructure</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Why Scale with Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="group h-full bg-white border border-border/40 rounded-[2.5rem] p-10 hover:border-green/20 hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-navy group-hover:text-green transition-all">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-4 group-hover:text-navy transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          VALUES MODULE — Operational Protocol
      ───────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 text-white">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Foundational Logic</div>
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Operational Protocol</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-center group hover:bg-white/10 transition-all">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-green/30 transition-all">
                    <value.icon className="w-8 h-8 text-green" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4">{value.title}</h3>
                  <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-loose">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ACTIVE NODES — Deployment Opportunities
      ───────────────────────────────────────── */}
      <section id="openings" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Active Deployment</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Open Infrastructure Nodes</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="group bg-white border border-border/40 rounded-[3rem] p-8 md:p-14 hover:border-green/20 hover:shadow-2xl transition-all duration-700">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                    <div className="flex-1 space-y-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tighter group-hover:text-navy transition-colors">{position.title}</h3>
                        <span className="px-6 py-2 bg-navy text-green text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-green/20">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 font-mono">
                        <span className="flex items-center gap-3">
                          <Briefcase className="w-4 h-4 text-navy/40" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-navy/40" />
                          RE_REMOTE
                        </span>
                        <span className="flex items-center gap-3">
                          <GraduationCap className="w-4 h-4 text-navy/40" />
                          {position.experience} EXP
                        </span>
                        <span className="flex items-center gap-3 text-navy">
                          <DollarSign className="w-4 h-4 text-green" />
                          {position.salary}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">{position.description}</p>

                      <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border/40">
                        <div>
                          <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6">Requirements_List</h4>
                          <ul className="space-y-4">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-4 text-[11px] font-bold text-muted-foreground/70 uppercase tracking-tight">
                                <div className="w-1 h-1 rounded-full bg-green mt-1.5 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6">Responsibilities_Core</h4>
                          <ul className="space-y-4">
                            {position.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-4 text-[11px] font-bold text-muted-foreground/70 uppercase tracking-tight">
                                <div className="w-1 h-1 rounded-full bg-navy mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="shrink-0 lg:pt-0">
                      <Button className="w-full lg:w-auto h-20 px-12 rounded-[2rem] bg-navy hover:bg-green hover:text-navy text-white transition-all font-black uppercase tracking-widest text-xs shadow-xl group/btn">
                         Initiate Deployment <Zap className="w-4 h-4 ml-4 group-hover/btn:animate-pulse" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PROCESS PIPELINE — Onboarding Sequence
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Hiring Sequence</div>
             <h2 className="text-3xl md:text-6xl font-black text-navy uppercase tracking-tighter">Onboarding Pipeline</h2>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Apply", desc: "Submit Digital Portfolio" },
                { step: "02", title: "Screen", desc: "HR Protocol Assessment" },
                { step: "03", title: "Interview", desc: "Technical Matrix Validation" },
                { step: "04", title: "Offer", desc: "Institutional Integration" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 rounded-[2rem] bg-white border border-border/60 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-xl transition-all group overflow-hidden relative">
                     <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                     <span className="text-4xl font-black text-navy group-hover:text-green relative z-10">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Position?"
        description="We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future openings."
        primaryButtonText="Submit Resume"
      />
    </PageWrapper>

  );
};

export default Careers;
