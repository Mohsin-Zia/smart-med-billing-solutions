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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/[0.01]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green/[0.01] blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {showTitle && (
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Expert Knowledge Base</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Logic Map.</span>
              </h2>
            </motion.div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-8">
            {displayFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-border/40 rounded-[3rem] px-12 bg-white hover:border-green/20 hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <AccordionTrigger className="text-left text-xl font-black text-navy hover:no-underline py-12 group-hover:text-green transition-colors uppercase tracking-tight">
                    <span className="flex items-start gap-10">
                       <span className="flex flex-col items-center opacity-20 group-hover:opacity-100 transition-opacity">
                          <span className="text-[9px] font-black text-navy uppercase tracking-tighter">ID</span>
                          <span className="text-2xl font-black text-navy">0{index + 1}</span>
                       </span>
                       <span className="pt-1">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-12 pl-24 pr-12 font-medium leading-relaxed text-lg">
                    <div className="pt-10 border-t border-border/40">
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
