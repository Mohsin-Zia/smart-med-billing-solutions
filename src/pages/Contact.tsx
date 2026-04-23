import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ContactForm } from "@/components/common/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleMap } from "@/components/common/GoogleMap";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "575-496-3459",
    description: "Mon-Fri 8am-6pm EST",
    href: "tel:575-496-3459",
  },
  {
    icon: Mail,
    title: "Email",
    content: "ashleyb@smbillings.com",
    description: "We respond within 24 hours",
    href: "mailto:ashleyb@smbillings.com",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "2780 Picacho Ave, Las Cruces, NM 88007",
    description: "Las Cruces, NM 88007",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "8:00 AM - 6:00 PM EST",
    href: "#",
  },
];

const Contact = () => {
  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Communications Hub
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-56 lg:pb-40 relative overflow-hidden bg-navy text-white text-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 mb-12 shadow-inner"
          >
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/60">Operational Interface</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-12 leading-[0.8] tracking-tighter uppercase">
            Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-green">Engagement.</span>
          </h1>
          
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium mb-24 border-l-2 border-green/20 pl-10 text-left md:text-center md:border-l-0 md:pl-0">
            Establish direct connectivity with our billing engineers and institutional advisory teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             {contactInfo.map((info, idx) => {
               const Icon = info.icon;
               return (
                 <motion.a
                   key={idx}
                   href={info.href}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] group hover:bg-white/[0.06] transition-all duration-500 text-left hover:shadow-3xl"
                 >
                   <div className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-6">NODE_0{idx + 1}</div>
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-inner">
                      <Icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">{info.title}</h3>
                   <div className="text-base font-black text-white truncate tracking-tight">{info.content}</div>
                 </motion.a>
               );
             })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONTACT INTERFACE — Logic Grid
      ───────────────────────────────────────── */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            {/* Left: Logical Nodes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.5em]">Integrated Logistics</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-navy mb-12 leading-[0.85] tracking-tighter uppercase">
                Institutional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">Connectivity.</span>
              </h2>
              
              <div className="space-y-8 mb-20">
                {[
                  { title: "Direct Audits", desc: "No-obligation institutional review of billing operations." },
                  { title: "Rapid Onboarding", desc: "Full infrastructure deployment within 14 business days." },
                  { title: "Dedicated Support", desc: "Senior account engineering mapped to your Clinical ID." },
                  { title: "SLA Management", desc: "Performance-mapped agreements focused on revenue yield." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 p-10 rounded-[3rem] bg-navy/[0.02] border border-border/40 group hover:border-green/20 transition-all duration-500 hover:shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-border/40 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-sm">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-2 leading-tight">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground/80 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Tunnel */}
              <div className="rounded-[4rem] overflow-hidden border border-border/40 shadow-3xl relative p-2 bg-muted/20">
                <GoogleMap
                   initialLocation={{
                     lat: 40.740769,
                     lng: -74.004258,
                     address: "2780 Picacho Ave, Las Cruces, NM 88007"
                   }}
                   height="500px"
                   className="grayscale brightness-95 contrast-125 rounded-[3.8rem]"
                />
                <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5 rounded-[4rem]" />
              </div>
            </motion.div>

            {/* Right: Operational Portal (Form) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-navy rounded-[4rem] p-16 md:p-20 text-white shadow-3xl relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-green/10 blur-[120px]" />
                
                <div className="relative z-10">
                   <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-green shadow-glow-green" />
                      <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/40">Secure Portal v5.0</span>
                   </div>
                   
                   <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Initiate Clinical <br /> Audit Protocol.</h3>
                   <p className="text-white/40 text-base mb-16 font-medium border-l-2 border-green/20 pl-8">Transmit your parameters below for institutional evaluation.</p>
                   
                   <div className="technical-form dark">
                      <ContactForm />
                   </div>
                   
                   <p className="mt-16 text-[10px] font-black text-white/10 uppercase tracking-[0.4em] text-center border-t border-white/5 pt-10">
                     ALL TRANSMISSIONS ENCRYPTED VIA AES-256 STANDARDS
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection limit={5} />
    </PageWrapper>
  );
};

export default Contact;
