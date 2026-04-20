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
      {/* Hero Section - Matching Unity Billing SolutionsDesign */}
      <section className="pt-36 pb-20 lg:pt-48 relative overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              height: "120%",
              top: "-10%",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-green/70" />
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              {specialities.length}+ Medical Specialities Supported
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              Expert billing services tailored to your specific medical
              specialty with precision and care.
            </motion.p>

            {/* Stats Boxes */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-green-light mb-2">
                  98%
                </div>
                <div className="text-white/90 text-lg">Claim Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-green-light mb-2">
                  30%
                </div>
                <div className="text-white/90 text-lg">Faster Payments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-green-light mb-2">
                  40+
                </div>
                <div className="text-white/90 text-lg">Specialities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Specialities Section */}
      <section className="py-20 bg-[#f4f7fb] min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-[#2563eb] font-semibold uppercase tracking-widest text-sm mb-3">
              Our Most Requested Medical Billing Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f1d3a] mb-5">
              Medical Billing Specialities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Expert billing services tailored to your specific medical
              specialty with precision and care.
            </p>
          </div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate">
            {specialities.map((specialty) => {
              const Icon = specialty.icon;
              const isHovered = hoveredSpecialty === specialty.id;

              return (
                <motion.div
                  key={specialty.id}
                  variants={staggerItem}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredSpecialty(specialty.id)}
                  onMouseLeave={() => setHoveredSpecialty(null)}>
                  <motion.div
                    className="relative h-full rounded-2xl overflow-hidden border-2 transition-all duration-300"
                    animate={{
                      borderColor: isHovered ? "#2563eb" : "#e2e8f0",
                      boxShadow: isHovered
                        ? "0 12px 40px rgba(37,99,235,0.25)"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                      y: isHovered ? -6 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}>
                    {/* Animated blue fill background */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                      }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />

                    {/* White card background (behind fill) */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{ zIndex: -1 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center p-5 pt-6">
                      {/* Icon circle */}
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-250"
                        animate={{
                          backgroundColor: isHovered
                            ? "rgba(255,255,255,0.18)"
                            : "#eff6ff",
                        }}>
                        <motion.div
                          animate={{ color: isHovered ? "#ffffff" : "#2563eb" }}
                          transition={{ duration: 0.2 }}>
                          <Icon size={30} strokeWidth={1.6} />
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="font-semibold text-sm leading-tight mb-2"
                        animate={{ color: isHovered ? "#ffffff" : "#0f1d3a" }}
                        transition={{ duration: 0.2 }}>
                        {specialty.name}
                      </motion.h3>

                      {/* Description - reveal on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.p
                            className="text-xs text-white/85 leading-relaxed"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 8,
                            }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.25 }}>
                            {specialty.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Arrow on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            className="mt-3"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.2, delay: 0.05 }}>
                            <ArrowRight size={18} className="text-white/80" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Unity Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Unity Billing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span>Your Trusted Partner for Medical Billing Services</span>
              At Unity Billing Solutions, we combine experienced professionals,
              proven processes, and advanced technology to deliver billing
              services that are accurate, transparent, and easy to work with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              {
                title: "Expertise",
                description:
                  "Our team has decades of collective experience in medical billing, coding, and compliance across multiple specialities and payer types, ensuring your practice receives maximum reimbursement.",
                icon: CheckCircle2,
              },
              {
                title: "Tailored Solutions",
                description:
                  "Every practice is unique. We design flexible workflows, custom reports, and engagement models that align with your goals and integrate seamlessly with your internal team.",
                icon: CheckCircle2,
              },
              {
                title: "Advanced Technology",
                description:
                  "Our state-of-the-art tools streamline claim submission, tracking, and reporting, giving you real-time insights into revenue performance, trends, and opportunities for improvement.",
                icon: CheckCircle2,
              },
              {
                title: "Dedicated Support",
                description:
                  "With Unity Billing Solutions, you get a responsive, personal team that knows your practice by name—not just by ticket number—and is always ready to answer questions and provide guidance.",
                icon: CheckCircle2,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-border group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green/10 to-green/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              At Unity Billing Solutions, we don’t just handle billing—we
              transform it. Our commitment is to help your practice thrive
              financially, so you can focus entirely on delivering exceptional
              patient care.
            </p>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Contact us today to discover how we can optimize your revenue
              cycle, reduce administrative burdens, and strengthen your
              practice’s financial health.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
                asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
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
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Medical Billing Specialities FAQs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "What makes Unity Billing Solutions different from other billing companies?",
                a: "Unity Billing Solutions combines decades of industry experience, advanced technology, and personalized service to deliver accurate, transparent, and efficient billing solutions. We focus on maximizing reimbursements, minimizing denials, and simplifying your revenue cycle so you can focus on patient care.",
              },
              {
                q: "What types of practices do you work with?",
                a: "We work with practices of all sizes—from solo providers and small clinics to multi-location groups. Our solutions are customized to fit the unique workflows, specialities, and goals of each practice.",
              },
              {
                q: "How does Unity Billing Solutions help improve revenue and cash flow?",
                a: "Our team ensures accurate coding, timely claim submission, and proactive denial management. Combined with practice audits and revenue cycle optimization, these steps reduce errors, accelerate reimbursements, and maximize your practice revenue.",
              },
              {
                q: "Are your services compliant with healthcare regulations?",
                a: "Absolutely. Unity Billing Solutions is fully committed to regulatory compliance and industry standards, ensuring all billing and coding processes follow CMS, HIPAA, and payer-specific guidelines to minimize risk and protect your practice.",
              },
              {
                q: "How does Unity Billing Solutions support practices beyond billing?",
                a: "Beyond traditional billing, we offer credentialing & enrollment, practice audits, telehealth and RPM billing, and strategic consulting. Our goal is to provide end-to-end solutions that strengthen your practice’s financial health and operational efficiency.",
              },
              {
                q: "Have more questions?",
                a: "Our team experts is here to help you with any specific questions about your practice's needs.",
                isCta: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-card rounded-xl p-6 border border-border ${item.isCta ? "bg-gradient-to-br from-green/10 to-primary/5" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}>
                {item.isCta ? (
                  <div className="text-center">
                    <p className="text-lg text-foreground font-medium mb-4">
                      {item.q}
                    </p>
                    <Button className="bg-green hover:bg-green/90" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {item.q}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
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
