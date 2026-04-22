import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Shield,
  AlertTriangle,
  Users,
  DollarSign,
  Clock,
  Ban,
  Gavel,
  CheckCircle2,
  MessageSquare,
  Briefcase,
  Lock,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  const effectiveDate = "Legal Terms & Conditions";

  const tableOfContents = [
    { number: "1", title: "Acceptance of Terms" },
    { number: "2", title: "SMS Terms of Service" },
    { number: "3", title: "Services Offered" },
    { number: "4", title: "Client Responsibilities" },
    { number: "5", title: "HIPAA Compliance & Confidentiality" },
    { number: "6", title: "Intellectual Property" },
    { number: "7", title: "Limitation of Liability" },
    { number: "8", title: "Indemnification" },
    { number: "9", title: "Modification of Terms" },
    { number: "10", title: "Governing Law" },
  ];

  const clientObligations = [
    {
      title: "Accurate Information",
      icon: FileText,
      description:
        "Provide accurate and complete information required for billing and claims management.",
    },
    {
      title: "Security",
      icon: Lock,
      description:
        "Maintain confidentiality of login credentials and secure account access.",
    },
    {
      title: "Legal Compliance",
      icon: Scale,
      description:
        "Use services only for lawful purposes and in compliance with all applicable regulations.",
    },
    {
      title: "Timely Updates",
      icon: RefreshCw,
      description:
        "Notify Smart promptly of any changes that may affect billing operations.",
    },
  ];

  const servicesOffered = [
    "Maximize reimbursements and reduce claim denials",
    "Maintain compliance with healthcare regulations",
    "Streamline practice operations and workflows",
    "Provide credentialing and telehealth billing support",
    "Revenue cycle management and consulting",
    "Medical coding and documentation review",
  ];

  const hipaaPoints = [
    "All Protected Health Information (PHI) handled securely and confidentially",
    "Unauthorized disclosure of PHI is strictly prohibited",
    "Clients are expected to safeguard proprietary information",
    "Smart adheres to HIPAA Privacy Rule (45 CFR Part 160)",
    "Full compliance with the HIPAA Security Rule (45 CFR Part 164)",
    "HITECH Act provisions are strictly followed",
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Legal Infrastructure
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-navy text-white text-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Scale className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Governing Protocol v2.5</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Legal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Framework.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            The operational logic and binding parameters governing the transmission and processing of institutional revenue.
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/30">
             <div className="w-1 h-1 rounded-full bg-green" />
             <span>Ref: {effectiveDate}</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PROTOCOL INDEX — Documentation Map
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Index_Logic</div>
             <h2 className="text-3xl font-black text-navy uppercase tracking-tighter">Documentation Matrix</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {tableOfContents.map((item) => (
              <div
                key={item.number}
                className="group flex flex-col bg-white border border-border/40 rounded-2xl p-6 hover:border-green/20 hover:shadow-xl transition-all cursor-pointer"
              >
                <span className="text-2xl font-black text-border group-hover:text-green transition-colors mb-4 italic">0{item.number}</span>
                <span className="text-[10px] font-black text-navy uppercase tracking-widest leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ACCEPTANCE — Protocol Initiation
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="shrink-0 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-navy text-green flex items-center justify-center font-black text-2xl">01</div>
                </div>
                <div className="flex-1 space-y-8">
                  <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Protocol Initiation</h2>
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed italic">
                    By accessing this website or engaging with our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions.
                  </p>
                  
                  <div className="p-8 bg-muted/30 border border-border/40 rounded-[2rem] flex items-start gap-6">
                    <AlertTriangle className="w-6 h-6 text-navy shrink-0" />
                    <p className="text-xs text-navy/60 font-medium leading-relaxed uppercase tracking-tight">
                      <strong className="text-navy font-black">Institutional Requirement:</strong> These Terms govern your use of our Services along with our Privacy Policy, Business Associate Agreement (BAA), and any applicable Service Level Agreements (SLAs).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SMS GATEWAY — Interface Terms
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white border border-border/40 rounded-[3rem] p-12 md:p-20 group hover:border-green/20 hover:shadow-2xl transition-all">
             <div className="flex items-center gap-8 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-navy text-green flex items-center justify-center font-black text-xl italic">02</div>
                <h2 className="text-3xl font-black text-navy uppercase tracking-tighter">SMS Interface Protocol</h2>
             </div>
             
             <p className="text-muted-foreground font-medium leading-relaxed mb-12">
               By opting into SMS from <strong className="text-navy">SmartMed Billing Solutions</strong>, you authorize the node-to-node transmission of service-related data packages.
             </p>

             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/20">
                   <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-4">Termination_Sequence</h4>
                   <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">
                     Reply <strong className="text-navy">STOP</strong> at any time to execute the termination sequence and halt transmission.
                   </p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/20">
                   <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-4">Support_Query</h4>
                   <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">
                     Reply <strong className="text-navy">HELP</strong> to receive technical documentation relating to the SMS gateway.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SERVICES — Operational Scope
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
             <div className="flex items-center gap-8 mb-16">
                <div className="w-16 h-16 rounded-2xl bg-navy text-green flex items-center justify-center font-black text-2xl italic">03</div>
                <div>
                   <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Operational Scope</h2>
                   <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mt-2">Active_Service_Load</div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-4">
              {servicesOffered.map((service, i) => (
                <div key={i} className="flex items-center gap-6 bg-white border border-border/40 rounded-2xl p-6 group hover:border-green/20 transition-all">
                  <div className="w-2 h-2 rounded-full bg-navy group-hover:bg-green transition-all" />
                  <span className="text-[11px] font-black text-muted-foreground uppercase tracking-widest leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          OBLIGATIONS — Node Requirements
      ───────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 text-white">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Client_Logic</div>
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Node Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {clientObligations.map((item, index) => (
              <div key={index} className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-green/30 transition-all">
                  <item.icon className="w-6 h-6 text-green" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-loose italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONFIDENTIALITY — Security Protocol
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-8 mb-16">
                <div className="w-16 h-16 rounded-2xl bg-navy text-green flex items-center justify-center font-black text-2xl italic">05</div>
                <div>
                   <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Security Protocol</h2>
                   <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mt-2">HIPAA_ENFORCEMENT_V4</div>
                </div>
             </div>

             <div className="space-y-4">
                {hipaaPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-8 bg-muted/20 border border-border/40 rounded-3xl p-8 hover:bg-white hover:border-green/20 hover:shadow-xl transition-all group">
                    <Shield className="w-6 h-6 text-navy group-hover:text-green transition-all shrink-0" />
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-relaxed italic">
                      {point}
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          GOVERNING LOGIC — Regulatory Scope
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto bg-white border border-border/40 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy -translate-y-1/2 translate-x-1/2 rotate-45" />
              
              <div className="flex items-center gap-8 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-navy text-green flex items-center justify-center font-black text-2xl italic shrink-0">10</div>
                <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Governing Logic</h2>
              </div>

              <p className="text-muted-foreground font-medium leading-relaxed mb-12 italic">
                These Protocols are governed by the laws of the jurisdiction in which SmartMed Billing Solutions maintains primary operations.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.4em] border-b border-border/40 pb-4">Federal_Enforcement</h4>
                    <ul className="space-y-3">
                       {["HIPAA Privacy Rule [45 CFR 160]", "HIPAA Security Rule [45 CFR 164]", "HITECH Act Provisions", "Medicare Compliance Logic"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">
                           <div className="w-1 h-1 rounded-full bg-green" />
                           {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.4em] border-b border-border/40 pb-4">State_Logic</h4>
                    <ul className="space-y-3">
                       {["Regional Privacy Mandates", "State Billing Protocols", "Licensure Verification", "Workers Comp Framework"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">
                           <div className="w-1 h-1 rounded-full bg-navy" />
                           {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          LEGAL SUPPORT — Communication Node
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[4rem] bg-navy p-12 md:p-24 text-center text-white relative overflow-hidden">
             {/* Background Patterns */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
               <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
               <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
             </div>

             <div className="inline-flex items-center gap-4 mb-10">
               <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
               <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Node_Status: Online</span>
             </div>

             <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">Legal Support <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Protocol.</span></h2>
             
             <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic">
               Submit official legal inquiries or documentation requests to our secure communications relay.
             </p>

             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { icon: MapPin, label: "Institutional_Address", value: "2780 Picacho Ave, Las Cruces, NM 88007" },
                 { icon: Phone, label: "Voice_Relay", value: "575-496-3459" },
                 { icon: Mail, label: "Encrypted_Email", value: "ashleyb@smbillings.com" }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green group-hover:text-navy transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-[9px] font-black text-green uppercase tracking-[0.3em] mb-4">{item.label}</div>
                    <div className="text-xs font-black uppercase tracking-widest leading-loose text-white/70">{item.value}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TermsOfService;
