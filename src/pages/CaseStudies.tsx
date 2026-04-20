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
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Real Results for Real Practices
            </h1>
            <p className="text-lg text-primary-foreground/80">
              See how healthcare providers across specialities have transformed
              their revenue cycle with MedBill Pro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
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

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {study.specialty}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {study.practiceSize} • {study.location}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-foreground">
                      {study.title}
                    </h2>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">The Challenge</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {study.challenge}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Our Solution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {study.solution}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-secondary" />
                          Results in {study.timeline}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <p className="text-foreground italic mb-4">
                              "{study.testimonial}"
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                                <span className="text-sm font-bold text-primary-foreground">
                                  {study.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">
                                  {study.author}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {study.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Before/After Comparison */}
                  <div className="space-y-6">
                    <Card className="bg-destructive/5 border-destructive/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                          <TrendingUp className="w-5 h-5 rotate-180" />
                          Before
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                          <span className="text-muted-foreground">
                            Monthly Collections
                          </span>
                          <span className="font-semibold text-destructive">
                            {study.before.collections}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                          <span className="text-muted-foreground">
                            Denial Rate
                          </span>
                          <span className="font-semibold text-destructive">
                            {study.before.denialRate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                          <span className="text-muted-foreground">
                            Days in A/R
                          </span>
                          <span className="font-semibold text-destructive">
                            {study.before.daysInAR}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-muted-foreground">
                            Billing Staff
                          </span>
                          <span className="font-semibold text-destructive">
                            {study.before.staff}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/5 border-secondary/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-secondary">
                          <TrendingUp className="w-5 h-5" />
                          After
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-secondary/20">
                          <span className="text-muted-foreground">
                            Monthly Collections
                          </span>
                          <span className="font-semibold text-secondary">
                            {study.after.collections}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-secondary/20">
                          <span className="text-muted-foreground">
                            Denial Rate
                          </span>
                          <span className="font-semibold text-secondary">
                            {study.after.denialRate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-secondary/20">
                          <span className="text-muted-foreground">
                            Days in A/R
                          </span>
                          <span className="font-semibold text-secondary">
                            {study.after.daysInAR}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-muted-foreground">
                            Billing Staff
                          </span>
                          <span className="font-semibold text-secondary">
                            {study.after.staff}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <Button size="lg" className="w-full" asChild>
                        <Link to="/contact">
                          Get Similar Results
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Calculate Your Potential ROI
            </h2>
            <p className="text-muted-foreground mb-8">
              See how much you could save by partnering with MedBill Pro
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Average Client Improvements
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Revenue Increase", value: "20-35%" },
                      { label: "Denial Rate Reduction", value: "50-75%" },
                      { label: "A/R Days Reduction", value: "40-60%" },
                      { label: "Cost Savings", value: "$100K-$400K/year" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-bold text-primary">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        $250K
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Average Annual Savings
                      </div>
                      <Button size="lg" className="w-full" asChild>
                        {/* <Link to="/pricing">
                          Get Your Custom Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link> */}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
