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
    <section className="py-40 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="relative rounded-[4rem] p-16 md:p-32 overflow-hidden bg-navy shadow-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background Highlights */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-green" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">System Integration</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
              Bridge the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-white">Revenue Gap.</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/50 mb-20 max-w-2xl font-medium leading-relaxed">
              Connect your practice to our high-performance billing infrastructure. 
              Most practices see a 20% increase in collections within 90 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 items-center">
              <Button
                size="lg"
                className="bg-green hover:bg-green-light text-navy px-16 h-24 rounded-[2rem] text-xl font-black shadow-glow-green transition-all hover:scale-105 active:scale-95 group"
                asChild
              >
                <Link to={primaryButtonLink}>
                  {primaryButtonText}
                  <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              {showPhoneButton && (
                <Link 
                  to="tel:575-496-3459"
                  className="flex items-center gap-6 text-white hover:text-green transition-all group"
                >
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/10">
                    <Phone className="w-8 h-8 text-green" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Expert Consultation</p>
                    <p className="text-2xl font-black tracking-tighter">575-496-3459</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
