import { motion } from "framer-motion";
import { ClipboardList, Code2, Send, RefreshCw, BadgeDollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Patient Registration & Eligibility Verification",
    description:
      "We collect accurate patient demographics and insurance data upfront, then verify real-time eligibility to confirm active coverage, co-pays, deductibles, and benefit limitations — eliminating the #1 cause of claim denials before they happen.",
    badge: "Real-Time Verification",
  },
  {
    number: "02",
    icon: Code2,
    title: "Medical Coding & Charge Capture",
    description:
      "Our AAPC-certified coders translate clinical documentation into precise ICD-10, CPT, and HCPCS codes. Every service is captured, every modifier applied correctly — maximizing billable charges without compliance risk.",
    badge: "ICD-10 / CPT / HCPCS",
  },
  {
    number: "03",
    icon: Send,
    title: "Claim Scrubbing & Electronic Submission",
    description:
      "Before any claim leaves our system, it passes through our multi-layer scrubbing engine — checking for payer-specific rules, bundling conflicts, and missing documentation. Clean claims are transmitted within 24–48 hours.",
    badge: "99% Clean Claim Rate",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Denial Management & Appeals",
    description:
      "Our dedicated denial team analyzes every rejection, identifies root causes, and resubmits with supporting documentation within the payer's timely-filing window. We don't write off revenue — we fight for every dollar.",
    badge: "< 2% Denial Rate",
  },
  {
    number: "05",
    icon: BadgeDollarSign,
    title: "Payment Posting & Revenue Reporting",
    description:
      "Payments, adjustments, and patient balances are posted with precision. You receive transparent performance dashboards — collection rates, days in A/R, denial trends — giving you full visibility into your financial health.",
    badge: "Full Transparency",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-green" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">
                Revenue Cycle Blueprint
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-[0.85] tracking-tighter uppercase">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">
                Work.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-2xl leading-relaxed font-medium border-l-2 border-green/20 pl-8">
              A disciplined, end-to-end revenue cycle management process — from patient intake to final
              payment — designed to eliminate revenue leakage and accelerate cash flow.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-green/40 via-navy/20 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
              >
                {/* Step Number + Icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3 relative z-10">
                  <div className="w-24 h-24 rounded-[2rem] bg-white border border-border/40 flex items-center justify-center shadow-lg group-hover:bg-navy group-hover:border-transparent transition-all duration-500 relative">
                    <step.icon className="w-10 h-10 text-navy/60 group-hover:text-green transition-colors duration-500" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green flex items-center justify-center shadow-md">
                      <span className="text-[9px] font-black text-navy">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-border/40 rounded-[3rem] p-12 group-hover:shadow-[0_30px_60px_rgba(30,58,138,0.08)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green to-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />

                  <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                    <h3 className="text-xl md:text-2xl font-black text-navy leading-tight tracking-tight uppercase max-w-xl">
                      {step.title}
                    </h3>
                    <span className="flex-shrink-0 text-[9px] font-black text-green uppercase tracking-[0.3em] border border-green/30 px-4 py-2 rounded-full bg-green/5">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground/70 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-green hover:bg-green-light text-navy px-8 md:px-16 h-16 md:h-20 rounded-2xl text-sm md:text-lg font-black shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all hover:scale-[1.03] active:scale-95 group"
            asChild
          >
            <Link to="/contact">
              Start Your Billing Audit
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
