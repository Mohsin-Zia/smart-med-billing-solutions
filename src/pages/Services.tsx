import { useRef, useEffect, useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import {
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/common/ContactForm";
import GoogleMap from "@/components/common/GoogleMap";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────
// Carousel Component
// ─────────────────────────────────────────
interface CarouselItem {
  title: string;
  description: string;
}

const VISIBLE = 3;

const ServiceCarousel = ({ items }: { items: CarouselItem[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const totalPages = Math.ceil(items.length / VISIBLE);
  const currentPage = Math.floor(startIndex / VISIBLE);

  const prev = useCallback(() => {
    setDirection("left");
    setStartIndex((i) =>
      i === 0
        ? Math.floor((items.length - 1) / VISIBLE) * VISIBLE
        : i - VISIBLE,
    );
  }, [items.length]);

  const next = useCallback(() => {
    setDirection("right");
    setStartIndex((i) => {
      const n = i + VISIBLE;
      return n >= items.length ? 0 : n;
    });
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setStartIndex((i) => {
        const n = i + VISIBLE;
        return n >= items.length ? 0 : n;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const visibleItems = items.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What's Included
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete breakdown of everything we handle for you.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* 3-card grid with slide animation */}
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleItems.map((item, i) => (
                  <div
                    key={startIndex + i}
                    className="bg-card rounded-2xl border border-border shadow-lg p-7 flex flex-col items-center text-center"
                  >
                    <span className="inline-flex items-center justify-center mb-4 w-9 h-9 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0">
                      {String(startIndex + i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentPage ? "right" : "left");
                    setStartIndex(i * VISIBLE);
                  }}
                  aria-label={`Go to page ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "w-6 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {startIndex + 1}–{Math.min(startIndex + VISIBLE, items.length)} of{" "}
            {items.length}
          </p>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────
const Services = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useGsapScrollReveal();

  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
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
  }, [serviceId]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          TOP  —  same on every service page
      ───────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={heroBgRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              height: "120%",
              top: "-10%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroContentRef} className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <service.icon className="w-10 h-10 text-secondary" />
            </div>

            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          MIDDLE  —  unique per service
      ───────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {service.description}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: features card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Service Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">95%+</div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">
                      24-48h
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Turnaround
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CAROUSEL  —  unique content per service
      ───────────────────────────────────────── */}
      {service.carouselItems && service.carouselItems.length > 0 && (
        <ServiceCarousel items={service.carouselItems} />
      )}

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* LEFT — Why Choose Us (benefits list, matching the image) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Unity Billing Solutions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Partnering with us provides immediate and measurable advantages
                for your practice:
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Minimize claim denials and rework",
                  "Speed up reimbursements and cash flow",
                  "Improve patient satisfaction with clear financial expectations",
                  "Reduce administrative burden on your staff",
                  "Maintain compliance with payer requirements",
                  "Dedicated account manager always within reach",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Why Choose Us cards */}
              {/* <div className="space-y-5">
                {[
                  {
                    title: "Free Consultation",
                    description:
                      "No obligation review of your current billing operations with actionable recommendations.",
                  },
                  {
                    title: "Quick Onboarding",
                    description:
                      "Get started in as little as 2 weeks with our streamlined onboarding process.",
                  },
                  {
                    title: "Dedicated Support",
                    description:
                      "Your dedicated account manager is just a call or email away.",
                  },
                  {
                    title: "No Long-Term Contracts",
                    description:
                      "Month-to-month agreements because we earn your business every day.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GoogleMap
                  initialLocation={{
                    lat: 40.740769,
                    lng: -74.004258,
                    address: "1531 W McIntosh Rd Griffin GA 30223",
                  }}
                  onLocationSelect={(location) => {
                    console.log("Selected location:", location);
                  }}
                  height="350px"
                  className="mt-8"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT — Contact Form (matching image layout) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <Card className="shadow-xl border border-border/60">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground text-center mb-1">
                    Get Your Free Consultation
                  </h2>
                  <p className="text-muted-foreground text-center text-sm mb-6">
                    One of our specialists will reach out within 24 hours.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          BOTTOM  —  same on every service page
      ───────────────────────────────────────── */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A streamlined approach to maximize your revenue and minimize
              administrative burden.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Intake",
                description:
                  "We gather your practice information and understand your unique needs",
              },
              {
                step: "02",
                title: "Setup",
                description:
                  "Configure systems and establish workflows tailored to your practice",
              },
              {
                step: "03",
                title: "Execute",
                description:
                  "Our team processes your claims and manages your revenue cycle",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "Continuous monitoring and improvement to maximize collections",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-secondary/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Billing?"
        description="Let our experts handle your revenue cycle while you focus on patient care."
      />
    </PageWrapper>
  );
};

export default Services;
