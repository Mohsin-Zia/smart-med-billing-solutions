import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Target,
  Award,
  Building,
  ArrowRight,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { StatCounter } from "@/components/common/StatCounter";
import { CTASection } from "@/components/sections/CTASection";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from coding accuracy to customer service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work as an extension of your team, aligned with your goals and committed to your success.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our business relationships.",
  },
  {
    icon: Building,
    title: "Innovation",
    description:
      "We continuously invest in technology and training to deliver cutting-edge solutions.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Founded",
    description: "Started with a vision to transform medical billing",
  },
  {
    year: "2012",
    title: "100 Clients",
    description: "Reached our first major client milestone",
  },
  {
    year: "2016",
    title: "National Expansion",
    description: "Expanded services to all 50 states",
  },
  {
    year: "2020",
    title: "1000+ Providers",
    description: "Trusted by over 1,000 healthcare providers",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as a top medical billing company",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "20+ years in healthcare revenue cycle management",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Chief Operations Officer",
    bio: "Former hospital CFO with expertise in RCM",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Coding",
    bio: "CPC, CCS certified with 15 years experience",
    initials: "ER",
  },
  {
    name: "David Williams",
    role: "VP of Client Success",
    bio: "Dedicated to exceptional client outcomes",
    initials: "DW",
  },
];

const About = () => {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useGsapScrollReveal();
  const journeySectionRef = useRef<HTMLDivElement>(null);

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

    // Journey timeline animations
    if (journeySectionRef.current) {
      const milestones =
        journeySectionRef.current.querySelectorAll(".milestone-wrapper");

      milestones.forEach((milestone, index) => {
        const box = milestone.querySelector(".milestone-box");
        const dot = milestone.querySelector(".milestone-dot");
        const arrow = milestone.querySelector(".arrow-icon");

        // Create timeline for each milestone
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: milestone,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });

        // Animate dot appearing first
        tl.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
            rotation: -180,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
        );

        // Animate arrow pointing to box
        tl.fromTo(
          arrow,
          {
            x: isLeftSide(index) ? -50 : 50,
            opacity: 0,
            scale: 0,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );

        // Animate box sliding in
        tl.fromTo(
          box,
          {
            x: isLeftSide(index) ? -100 : 100,
            opacity: 0,
            rotationY: isLeftSide(index) ? -20 : 20,
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        );

        // Add hover effect for interactive feel
        if (box) {
          box.addEventListener("mouseenter", () => {
            gsap.to(box, {
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          box.addEventListener("mouseleave", () => {
            gsap.to(box, {
              scale: 1,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }

        // Animate dot on scroll past
        ScrollTrigger.create({
          trigger: milestone,
          start: "top 30%",
          onEnter: () => {
            gsap.to(dot, {
              scale: 1.3,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
            });
          },
        });
      });

      // Animate center line drawing
      const centerLine =
        journeySectionRef.current.querySelector(".bg-gradient-to-b");
      if (centerLine) {
        gsap.fromTo(
          centerLine,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: journeySectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          },
        );
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.trigger === journeySectionRef.current ||
          journeySectionRef.current?.contains(trigger.trigger as Element)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Helper function to determine if milestone is on the left
  const isLeftSide = (index: number) => index % 2 === 0;

  return (
    <PageWrapper>
      {/* Page Header - Professional Architecture */}
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
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/60">Institutional Identity</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-12 leading-[0.8] tracking-tighter uppercase">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-green">Excellence.</span>
          </h1>
          
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium mb-12 border-l-2 border-green/20 pl-10 text-left md:text-center md:border-l-0 md:pl-0">
            SmartMed Billing Solutions is a premier revenue cycle management firm dedicated to transforming clinical intelligence into sustainable financial performance.
          </p>
        </div>
      </section>

      {/* Mission & Impact */}
      <section id="mission" className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Operational Mission</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-navy mb-12 leading-[0.85] tracking-tighter uppercase">
                Bridging <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Care & Capital.</span>
              </h2>
              <p className="text-xl text-muted-foreground/60 leading-relaxed mb-16 font-medium border-l-2 border-green/20 pl-10">
                Our mission is to engineer specialized revenue pathways for healthcare providers, ensuring that administrative complexity never obstructs patient care.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  "Revenue Maximization",
                  "Denial Mitigation",
                  "Compliance Integrity",
                  "Clinical Focus"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-inner">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-navy/60">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy rounded-[4rem] p-20 text-white relative overflow-hidden shadow-3xl"
            >
               {/* Visual Glow */}
               <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-green/10 blur-[120px]" />
               
                <div className="relative z-10 grid grid-cols-2 gap-16">
                   {[
                     { label: "ACCURACY", value: "98%", sub: "Claim Precision" },
                     { label: "EFFICIENCY", value: "99%", sub: "Clean Claim Rate" },
                     { label: "DOMAINS", value: "75+", sub: "Medical Specialties" },
                     { label: "PERFORMANCE", value: "30%", sub: "Avg. Faster Payments" }
                   ].map((stat, i) => (
                     <div key={i}>
                       <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">{stat.label}</p>
                       <h4 className="text-5xl font-black text-green mb-2 tracking-tighter">{stat.value}</h4>
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.sub}</p>
                     </div>
                   ))}
                 </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Technical Pipeline - Detailed Workflow */}
      <section id="workflow" className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Operational Workflow</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                The Technical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Pipeline.</span>
              </h2>
              <p className="text-xl text-muted-foreground/60 leading-relaxed font-medium">
                Our proprietary 4-phase deployment model ensures a seamless transition and immediate revenue stabilization.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent hidden md:block" />
            
            {[
              {
                step: "01",
                title: "Systems Audit",
                desc: "Comprehensive analysis of existing data streams to identify structural revenue leakage.",
                items: ["Leakage Analysis", "Data Mapping", "Process Audit"]
              },
              {
                step: "02",
                title: "Architecture",
                desc: "Custom-mapping clinical intelligence to optimized billing codes and payer-specific logic.",
                items: ["Code Optimization", "Payer Logic", "Workflow Design"]
              },
              {
                step: "03",
                title: "Live Activation",
                desc: "Deployment of real-time scrubbing engines and direct-to-payer submission tunnels.",
                items: ["Real-time Scrubbing", "Direct Submission", "Sync Check"]
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous performance tuning through daily denial analysis and predictive modeling.",
                items: ["Denial Tuning", "Revenue Forecast", "SLA Monitoring"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="w-20 h-20 rounded-3xl bg-white border border-border/40 flex items-center justify-center text-4xl font-black text-navy/10 mb-10 shadow-sm transition-all group hover:border-green">
                  {phase.step}
                </div>
                <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-6">{phase.title}</h3>
                <p className="text-[11px] text-muted-foreground/80 leading-relaxed mb-8">{phase.desc}</p>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-green" />
                      <span className="text-[9px] font-bold text-navy/40 uppercase tracking-widest">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-40 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Security Protocol</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-12 leading-[0.85] tracking-tighter uppercase">
                Institutional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-white">Compliance.</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed mb-16 font-medium">
                Our infrastructure is engineered to exceed the most stringent healthcare data security standards.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: "HIPAA", desc: "Full Regulatory Alignment" },
                  { label: "SOC 2", desc: "Type II Certified Core" },
                  { label: "AES-256", desc: "Advanced Data Encryption" },
                  { label: "SLA", desc: "99.9% Uptime Guarantee" }
                ].map((standard, i) => (
                  <div key={i} className="border-l border-white/10 pl-8">
                    <h4 className="text-2xl font-black text-white mb-2 tracking-tighter">{standard.label}</h4>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{standard.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[4rem] p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                <Award className="w-64 h-64 text-white" />
              </div>
              <h3 className="text-xs font-black text-green uppercase tracking-[0.4em] mb-12 relative z-10">Verification Log</h3>
              <div className="space-y-8 relative z-10">
                {[
                  "Monthly security audit completion",
                  "Encrypted data transmission tunnels active",
                  "Zero-trust architecture implementation",
                  "Annual compliance training certified"
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-2 h-2 rounded-full bg-green shadow-glow-green" />
                    <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">{log}</span>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-10 border-t border-white/10">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] text-center">Protocol ID: SMB-SEC-2024-X</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-40 bg-navy/[0.02] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Corporate Ethos</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                Foundational <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Principles.</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border/40 p-12 rounded-[3.5rem] group hover:border-green/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-inner">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-6 leading-tight">
                  {value.title}
                </h3>
                <p className="text-[11px] font-medium text-muted-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { value: "15+", label: "YEARS_IN_OPERATION" },
              { value: "500+", label: "SUCCESS_ENGINEERS" },
              { value: "50", label: "US_STATES_SERVED" },
              { value: "24/7", label: "SYSTEM_MONITORING" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-16 bg-white border border-border/40 rounded-[3.5rem] text-center hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-black text-navy mb-6 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-navy/20 uppercase tracking-[0.4em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-48 bg-navy relative overflow-hidden">
        {/* Visual Accent */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">Collaborative Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-16 leading-[0.8] tracking-tighter uppercase">
              Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-green">Clinical Finance.</span>
            </h2>
            <p className="text-xl text-white/40 mb-24 max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-green/20 pl-10 text-left md:text-center md:border-l-0 md:pl-0">
              We are expanding our network of billing specialists and financial engineers. Explore institutional opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
              <Button size="lg" className="bg-green hover:bg-white text-navy px-8 md:px-16 h-16 md:h-20 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.2em] shadow-3xl shadow-green/20 transition-all hover:scale-105 active:scale-95 group" asChild>
                <Link to="/contact">
                  Open Institutional Roles
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-4 md:ml-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 md:px-16 h-16 md:h-20 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.2em] border-white/20 hover:bg-white/5 text-white transition-all hover:scale-105 active:scale-95" asChild>
                <Link to="/contact">Contact Infrastructure Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Why Healthcare Providers Choose SmartMed Billing Solutions"
        description="Healthcare providers partner with SmartMed Billing Solutions for our precision, transparency, and proven results. Our advanced billing systems and experienced consultants reduce claim errors, increase reimbursements, and help practices stay compliant with constantly evolving payer regulations."
      />
    </PageWrapper>
  );
};

export default About;
