import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X, Calculator, DollarSign, ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    name: "Starter",
    description: "For small practices just getting started",
    rate: "7%",
    minMonthly: "$500",
    features: [
      "Claims submission",
      "Payment posting",
      "Basic reporting",
      "Email support",
      "HIPAA compliant"
    ],
    notIncluded: ["Denial management", "Credentialing", "A/R recovery"]
  },
  {
    name: "Professional",
    description: "For growing practices needing full support",
    rate: "5.5%",
    minMonthly: "$1,000",
    popular: true,
    features: [
      "Everything in Starter",
      "Denial management",
      "Prior authorization",
      "Detailed analytics",
      "Phone & email support",
      "Dedicated account manager"
    ],
    notIncluded: ["Credentialing", "Custom integrations"]
  },
  {
    name: "Enterprise",
    description: "For large practices and multi-location groups",
    rate: "Custom",
    minMonthly: "Contact us",
    features: [
      "Everything in Professional",
      "Provider credentialing",
      "Custom integrations",
      "A/R recovery",
      "24/7 priority support",
      "On-site training",
      "Custom reporting"
    ],
    notIncluded: []
  }
];

const Pricing = () => {
  const [monthlyCollections, setMonthlyCollections] = useState([50000]);
  const currentCollection = monthlyCollections[0];
  const inHouseCost = currentCollection * 0.12; // 12% typical in-house cost
  const ourCost = currentCollection * 0.055; // 5.5% our rate
  const savings = inHouseCost - ourCost;

  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useGsapScrollReveal();
  const savingsValuesRef = useRef<HTMLDivElement>(null);

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

    // Animate savings values when they change
    if (savingsValuesRef.current) {
      const values = savingsValuesRef.current.querySelectorAll('.savings-value');
      values.forEach((value) => {
        gsap.fromTo(value,
          { scale: 1.2, color: '#10b981' },
          { scale: 1, color: '', duration: 0.3, ease: 'power2.out' }
        );
      });
    }
  }, [currentCollection]);

  return (
    <PageWrapper>
      {/* Hero with Background Image */}
      <section className="pt-36 pb-20 lg:pt-48 relative overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={heroBgRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              height: '120%',
              top: '-10%',
            }}
          />
          {/* Lighter gradient overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-green/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroContentRef} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transparent, Performance-Based Pricing
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We only succeed when you succeed. Our rates are based on collected revenue,
              so we're motivated to maximize your collections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <div className="flex items-center gap-3">
                  <Calculator className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl">Savings Calculator</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      See how much you could save by outsourcing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent ref={savingsValuesRef} className="p-8">
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Monthly Collections: <span className="text-primary font-bold">${currentCollection.toLocaleString()}</span>
                  </label>
                  <Slider
                    value={monthlyCollections}
                    onValueChange={setMonthlyCollections}
                    min={10000}
                    max={500000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$10,000</span>
                    <span>$500,000</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-destructive/10 rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">In-House Billing Cost (12%)</p>
                    <p className="text-3xl font-bold text-destructive savings-value">${inHouseCost.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">MedBill Pro Cost (5.5%)</p>
                    <p className="text-3xl font-bold text-secondary savings-value">${ourCost.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Your Monthly Savings</p>
                    <p className="text-3xl font-bold text-primary savings-value">${savings.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>

                <div className="text-center mt-8 p-4 bg-secondary/10 rounded-xl">
                  <p className="text-lg">
                    <span className="font-bold text-secondary savings-value">Annual Savings: ${(savings * 12).toLocaleString()}</span>
                    <span className="text-muted-foreground"> — Plus better collection rates!</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to fit your practice size and needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className={`h-full relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{tier.rate}</span>
                      {tier.rate !== "Custom" && <span className="text-muted-foreground"> of collections</span>}
                      <p className="text-sm text-muted-foreground mt-1">Min: {tier.minMonthly}/month</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start opacity-50">
                          <X className="w-5 h-5 text-muted-foreground mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQSection />

      <CTASection
        title="Need a Custom Quote?"
        description="Every practice is unique. Contact us for a personalized pricing proposal tailored to your specific needs."
        primaryButtonText="Request Custom Quote"
      />
    </PageWrapper>
  );
};

export default Pricing;
