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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Why Outsource?
            </div>
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            In-House vs. Outsourced Billing
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how partnering with MedBill Pro compares to managing billing internally.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div>
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-semibold">
                    Feature
                  </div>
                  <div className="text-center font-semibold">
                    In-House Billing
                  </div>
                  <div className="text-center font-semibold relative">
                    <span className="relative z-10">MedBill Pro</span>
                  </div>
                </motion.div>
              </CardHeader>
              <CardContent className="p-0">
                {comparisonData.rows.map((row, index) => (
                  <motion.div
                    key={index}
                    className={`grid grid-cols-3 gap-4 p-4 border-b last:border-b-0 ${
                      row.highlight ? "bg-secondary/10" : ""
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="font-medium text-foreground">{row.feature}</div>
                    <div className="text-center">
                      {typeof row.inHouse === "boolean" ? (
                        row.inHouse ? (
                          <div>
                            <X className="w-5 h-5 text-destructive mx-auto" />
                          </div>
                        ) : (
                          <div>
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          </div>
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.inHouse}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof row.medbill === "boolean" ? (
                        row.medbill ? (
                          <div>
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          </div>
                        ) : (
                          <div>
                            <X className="w-5 h-5 text-destructive mx-auto" />
                          </div>
                        )
                      ) : (
                        <span className="font-semibold text-primary">
                          {row.medbill}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link to="/pricing">
                  See Full Pricing Details
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    className="ml-2 inline-block"
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
