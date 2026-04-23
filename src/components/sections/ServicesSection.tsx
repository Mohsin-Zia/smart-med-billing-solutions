import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ChevronRight, Activity, Database, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green/5 blur-3xl rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Technical Alignment */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-green mb-8">
              <div className="w-12 h-px bg-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">Modular Architecture</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-[0.85] tracking-tighter uppercase">
              Systemized <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Revenue Logic.</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-xl leading-relaxed font-medium border-l-2 border-green/20 pl-8">
              We engineer high-velocity reimbursement pathways through technical excellence and clinical domain expertise.
            </p>
          </motion.div>
        </div>

        {/* Services Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[450px]"
            >
              <div className="h-full bg-white border border-border/40 rounded-[3rem] p-12 transition-all duration-700 flex flex-col group-hover:shadow-[0_40px_80px_rgba(30,58,138,0.1)] group-hover:-translate-y-4 relative overflow-hidden">
                
                {/* Decorative Number */}
                <div className="absolute top-10 right-12 text-7xl font-black text-navy/[0.03] group-hover:text-green/[0.05] transition-colors">
                  0{index + 1}
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-20 h-20 rounded-[2rem] bg-navy/5 flex items-center justify-center mb-12 group-hover:bg-navy transition-all duration-500 transform group-hover:rotate-12">
                    <service.icon className="w-10 h-10 text-navy group-hover:text-green transition-all" />
                  </div>

                  <h3 className="text-2xl font-black text-navy mb-6 leading-tight tracking-tight uppercase">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground/70 mb-10 leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>

                  <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between">
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-navy group/link"
                    >
                      Initialize Protocol
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover/link:bg-green group-hover/link:text-navy transition-all">
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>
                
                {/* Hover Background Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green to-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button size="lg" className="bg-navy hover:bg-navy-light text-white px-8 md:px-16 h-16 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] text-sm md:text-xl font-black shadow-3xl shadow-navy/20 transition-all hover:scale-[1.05] active:scale-95 group" asChild>
            <Link to="/services">
              Full Service Protocol
              <ArrowRight className="w-5 h-5 md:w-8 md:h-8 ml-4 md:ml-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

