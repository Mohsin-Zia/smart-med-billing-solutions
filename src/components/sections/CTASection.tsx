import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { floatingAnimation } from "@/lib/animations";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  showPhoneButton?: boolean;
}

export const CTASection = ({
  title = "Ready to Maximize Your Revenue?",
  description = "Join healthcare providers who trust us with their medical billing. Get a specialized system audit and see how much we can improve your collections.",
  primaryButtonText = "System Audit Request",
  primaryButtonLink = "/contact",
  showPhoneButton = true,
}: CTASectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden bg-navy">
      {/* High-Impact Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1)_0%,transparent_50%)]" />

        {/* SVG Grid */}
        <svg
          className="absolute inset-0 w-full h-full text-white/5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="ctaGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative glass-panel rounded-[4rem] p-12 md:p-20 overflow-hidden border-white/5 bg-white/5 backdrop-blur-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Inner Glow */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-green/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-8">
                <span className="w-10 h-0.5 bg-green"></span>
                Next Steps
              </div>

              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
                Bridge the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-white">
                  Revenue Gap.
                </span>
              </h2>

              <p className="text-xl text-white/60 mb-12 max-w-2xl font-medium leading-relaxed">
                Connect your practice to our high-performance billing
                infrastructure. Most practices see a 20% increase in collections
                within 90 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-green hover:bg-green-dark text-navy px-12 h-16 rounded-2xl text-lg font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
                  asChild
                >
                  <Link to={primaryButtonLink}>
                    {primaryButtonText}
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                </Button>

                {showPhoneButton && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-12 h-16 rounded-2xl text-lg font-bold transition-all hover:scale-105"
                    asChild
                  >
                    <a href="tel:(678) 408-2725">
                      <Phone className="mr-3 w-5 h-5 text-green" />
                      Direct Access
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Technical Labels */}
            <div className="absolute bottom-8 left-12 hidden lg:block">
              <p className="text-[10px] font-black tracking-widest text-white/20">
                LATENCY: <span className="text-green">MINIMAL</span>
              </p>
            </div>
            <div className="absolute bottom-8 right-12 hidden lg:block">
              <p className="text-[10px] font-black tracking-widest text-white/20">
                REVENUE_SYNC: <span className="text-green">OPTIMIZED</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
