import { motion } from "framer-motion";
import { TrendingDown, AlertOctagon, PiggyBank, Clock4, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const problemPoints = [
  {
    icon: TrendingDown,
    stat: "$125B+",
    label: "Lost Annually",
    description: "U.S. healthcare providers lose over $125 billion every year to billing errors, undercoding, and uncollected claims.",
  },
  {
    icon: AlertOctagon,
    stat: "30%",
    label: "Claims Denied",
    description: "Nearly 1 in 3 medical claims is denied or delayed — most due to preventable coding errors, incomplete documentation, or eligibility failures.",
  },
  {
    icon: PiggyBank,
    stat: "80%",
    label: "Never Reworked",
    description: "Of all denied claims, approximately 80% are never corrected and resubmitted — representing direct, recoverable revenue that practices simply abandon.",
  },
  {
    icon: Clock4,
    stat: "14 hrs",
    label: "Lost Per Week",
    description: "The average physician spends 14+ hours weekly on administrative billing tasks — time that should be spent on patient care and practice growth.",
  },
];

export const MedicalBillingProblemSection = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-navy">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-green/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-light/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">
                Industry Reality Check
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.85] tracking-tighter uppercase">
              The Hidden Cost of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-white to-green-light">
                Poor Billing.
              </span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto">
              Most healthcare practices are leaving significant revenue on the table every single month — 
              not from seeing fewer patients, but from billing inefficiencies that are entirely fixable.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white/5 border border-white/10 rounded-[3rem] p-12 hover:bg-white/10 hover:border-green/30 transition-all duration-500 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-green group-hover:text-navy transition-all duration-500">
                  <point.icon className="w-8 h-8 text-green group-hover:text-navy transition-colors" />
                </div>
                <div className="text-5xl font-black text-white mb-3 tracking-tighter">{point.stat}</div>
                <div className="text-[9px] font-black text-green uppercase tracking-[0.4em] mb-6">{point.label}</div>
                <p className="text-sm text-white/50 leading-relaxed font-medium">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[4rem] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-sm"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="text-[10px] font-black text-green uppercase tracking-[0.5em] mb-6">
              The SmartMed Solution
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Stop Leaving Revenue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
                Uncollected.
              </span>
            </h3>
            <p className="text-lg text-white/50 leading-relaxed font-medium max-w-2xl">
              SmartMed Billing Solutions exists to close the gap between the care you provide and the
              revenue you receive. Our specialized RCM team, advanced claim scrubbing technology, and
              relentless denial management recover revenue that other billers leave behind.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:min-w-[280px]">
            {[
              "Free billing audit with no obligation",
              "Average 15–30% revenue increase",
              "Onboarding in under 5 business days",
              "Dedicated specialist from day one",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white/70 leading-snug">{point}</span>
              </div>
            ))}

            <Button
              size="lg"
              className="mt-6 bg-green hover:bg-green-light text-navy h-16 rounded-2xl text-sm font-black shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all hover:scale-[1.03] active:scale-95 group"
              asChild
            >
              <Link to="/contact">
                Get Your Free Audit
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
