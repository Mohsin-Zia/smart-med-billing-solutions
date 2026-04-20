import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { staggerContainer, staggerItem, scaleInBounce } from "@/lib/animations";

interface FAQSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export const FAQSection = ({ limit, showTitle = true }: FAQSectionProps) => {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Precision Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full text-navy/5" viewBox="0 0 100 100">
           <defs>
              <pattern id="faqGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                 <circle cx="10" cy="10" r="0.5" fill="currentColor" />
              </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#faqGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {showTitle && (
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
              <span className="w-10 h-0.5 bg-green"></span>
              Knowledge Base
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Clarifications.</span>
            </h2>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-border/50 rounded-[2rem] px-8 bg-white dark:bg-navy/40 hover:border-green/30 transition-all duration-300 technical-shadow group overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:no-underline py-8 group-hover:text-green transition-colors">
                    <span className="flex items-center gap-6">
                       <span className="text-[10px] font-black text-foreground/20 group-hover:text-green/40 transition-colors">0{index + 1}</span>
                       {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-8 pl-[2.8rem] font-medium leading-relaxed">
                    <div className="pt-2 border-t border-border/50">
                       {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
