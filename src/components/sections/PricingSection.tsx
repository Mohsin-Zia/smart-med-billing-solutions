import { motion } from "framer-motion";
import { Check, X, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerItem } from "@/lib/animations";

const comparisonData = {
  headers: ["Feature", "In-House Billing", "MedBill Pro"],
  rows: [
    { feature: "Average Collection Rate", inHouse: "70-80%", medbill: "95%+", highlight: true },
    { feature: "Clean Claim Rate", inHouse: "75-85%", medbill: "99%", highlight: true },
    { feature: "Days in A/R", inHouse: "45-60 days", medbill: "25-30 days", highlight: true },
    { feature: "Staff Training Required", inHouse: true, medbill: false },
    { feature: "Software Costs", inHouse: true, medbill: false },
    { feature: "HIPAA Compliance Management", inHouse: true, medbill: false },
    { feature: "24/7 Claim Monitoring", inHouse: false, medbill: true },
    { feature: "Dedicated Account Manager", inHouse: false, medbill: true },
    { feature: "Performance Reporting", inHouse: "Limited", medbill: "Comprehensive" },
  ],
};

export const PricingSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/[0.01]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green/[0.01] blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Revenue Strategy</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
              Financial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Architecture.</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 leading-relaxed font-medium max-w-2xl mx-auto">
              See how partnering with <span className="text-navy font-black">SmartMed</span> compares to managing billing internally.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-[4rem] border border-border/40 shadow-3xl overflow-hidden">
            <div className="bg-navy p-12 text-white">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-xs font-black uppercase tracking-[0.3em] opacity-40">Precision Metrics</div>
                <div className="text-center text-xs font-black uppercase tracking-[0.3em] opacity-40">In-House Billing</div>
                <div className="text-center text-xs font-black uppercase tracking-[0.3em] text-green">SmartMed Solutions</div>
              </div>
            </div>
            
            <div className="divide-y divide-border/40">
              {comparisonData.rows.map((row, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-3 gap-8 p-12 items-center hover:bg-navy/[0.02] transition-colors ${
                    row.highlight ? "bg-green/[0.03]" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="text-sm font-black text-navy uppercase tracking-widest leading-tight">{row.feature}</div>
                  <div className="text-center">
                    {typeof row.inHouse === "boolean" ? (
                      row.inHouse ? (
                        <X className="w-6 h-6 text-red-400 mx-auto" />
                      ) : (
                        <Check className="w-6 h-6 text-navy/20 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm font-bold text-navy/40">{row.inHouse}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof row.medbill === "boolean" ? (
                      row.medbill ? (
                        <Check className="w-8 h-8 text-green mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-lg font-black text-navy tracking-tighter">
                        {row.medbill}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex flex-col items-center mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-green/40 to-transparent mb-8" />
            <Button size="lg" className="bg-navy hover:bg-navy-light text-white px-8 md:px-16 h-16 md:h-20 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.2em] shadow-3xl shadow-navy/20 transition-all hover:scale-105 active:scale-95 group" asChild>
              <Link to="/contact">
                Initiate System Audit
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-4 md:ml-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
