import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ChevronRight, Activity, Database, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with High-End Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-green font-black uppercase tracking-[0.2em] text-[10px] mb-6">
                <span className="w-10 h-0.5 bg-green"></span>
                Specialized Infrastructure
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
                Precision Revenue <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Architecture.</span>
              </h2>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:mb-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              We engineer maximum reimbursement pathways for modern healthcare practices through technical excellence.
            </p>
          </motion.div>
        </div>

        {/* Technical Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-navy/40 backdrop-blur-md rounded-[2.5rem] border border-border/50 p-8 hover:border-green/30 transition-all duration-500 flex flex-col technical-shadow">
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-10 group-hover:bg-green/10 group-hover:scale-110 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-green transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-green transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-3 mb-10">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-[10px] font-bold text-foreground/60 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-green" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <Link 
                    to={`/services/${service.id}`}
                    className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-primary group/link"
                  >
                    Module Details
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center gap-8"
        >
          <div className="w-px h-16 bg-gradient-to-b from-green/50 to-transparent" />
          <Button size="lg" className="bg-navy hover:bg-navy-light text-white px-12 h-16 rounded-2xl text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
            <Link to="services/medical-billing">
              Full System Overview
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

