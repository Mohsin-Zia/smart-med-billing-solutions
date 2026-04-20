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
      {/* Hero with Background Image */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              height: "120%",
              top: "-10%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-green/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-green/20 text-white text-sm font-medium mb-4">
              Trusted Medical Billing Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Unity Billing Solutions
            </h1>
            <p className="text-xl font-semibold text-white/90 mb-4">
              15+ Years of Experience in Medical Billing Excellence
            </p>
            <p className="text-lg text-white/85 mb-5">
              Unity Billing Solutionsis your trusted partner in revenue cycle
              management, dedicated to simplifying complex billing processes,
              ensuring compliance, and providing healthcare providers with the
              insights and clarity needed to grow their practices confidently.
            </p>
            <p className="text-base text-white/80 mb-8">
              Whether you operate a small clinic or a multi-location group, our
              team combines extensive industry expertise, advanced technology,
              and personalized, white-glove support. We focus on maximizing
              reimbursements, minimizing claim denials, and streamlining
              workflows so your practice can thrive financially while you focus
              on delivering exceptional patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green hover:bg-green/90" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10"
                asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Unity Billing Solutions, our mission is simple yet powerful:
                to transform medical billing for healthcare providers
                nationwide, helping practices achieve financial clarity,
                efficiency, and growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Maximize Revenue: Optimize reimbursements and cash flow for your practice.",
                  "Reduce Denials: Minimize claim denials and administrative inefficiencies",
                  "Ensure Compliance: Deliver accurate, timely, and fully compliant billing solutions.",
                  "Focus on Patients: Empower healthcare providers to dedicate their time and energy to patient care.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6">
              <StatCounter
                value={1500}
                suffix="+"
                label="Healthcare Providers"
                variant="medical"
              />
              <StatCounter
                value={99}
                suffix="%"
                label="Clean Claim Rate"
                variant="medical"
              />
              <StatCounter
                value={75}
                suffix="+"
                label="Medical Specialities"
                variant="medical"
              />
              <StatCounter
                value={30}
                suffix="%"
                label="Revenue Increase"
                variant="medical"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our
              clients.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline - Commented Out */}
      {false && (
        <section
          id="journey"
          ref={journeySectionRef}
          className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small team with a big vision to an industry leader.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />

                {milestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className="milestone-wrapper relative flex items-center mb-16">
                      <div
                        className={`w-5/12 ${isLeft ? "text-right pr-12" : "text-left pl-12 ml-auto"}`}>
                        <div
                          className={`milestone-box bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all relative overflow-hidden group`}>
                          <div
                            className={`milestone-arrow absolute top-1/2 ${
                              isLeft
                                ? "right-0 translate-x-1/2 -translate-y-1/2"
                                : "left-0 -translate-x-1/2 -translate-y-1/2"
                            } z-10`}></div>

                          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary to-secondary" />

                          <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 milestone-dot-container">
                        <div className="milestone-dot w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg relative z-10">
                          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                          <div className="absolute inset-0 rounded-full bg-primary/50 blur-sm" />
                        </div>
                      </div>

                      <div className="w-5/12" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team - Commented Out */}
      {false && (
        <section id="team" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading our company.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "15+", label: "Years in Business" },
              { value: "1,500+", label: "Happy Clients" },
              { value: "500+", label: "Team Members" },
              { value: "50", label: "States Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented professionals to join our
              mission. Explore career opportunities and grow with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/careers">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact HR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Why Healthcare Providers Choose Unity Billing Solutions"
        description="Healthcare providers partner with Unity Billing Solutions for our precision, transparency, and proven results. Our advanced billing systems and experienced consultants reduce claim errors, increase reimbursements, and help practices stay compliant with constantly evolving payer regulations."
      />
    </PageWrapper>
  );
};

export default About;
