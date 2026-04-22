import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  UserCheck,
  FileText,
  AlertCircle,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Database,
  RefreshCw,
  MessageSquare,
  Building2,
  Baby,
  ScrollText,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const effectiveDate = "January 1, 2026";

  // ── 1. Information We Collect ──────────────────────────────────────────
  const dataCollected = [
    "Name, Address, Date of Birth",
    "Social Security Number and Insurance Information",
    "Relevant demographic details",
    "Medical information required for claims processing",
    "Contact information such as phone number and email",
  ];

  const collectionMethods = [
    "Encrypted website forms",
    "Phone conversations",
    "Email communications",
    "Written documents",
    "Authorized submissions",
  ];

  // ── 2. SMS Message Types ───────────────────────────────────────────────
  const smsTypes = [
    {
      title: "Service & Customer Care",
      icon: MessageSquare,
      items: [
        "Billing reminders and claim updates",
        "Account notifications and follow-ups",
        "Responses to inquiries",
      ],
    },
    {
      title: "Marketing & Informational",
      icon: Mail,
      items: [
        "Service announcements and new offerings",
        "Consultation invitations",
        "Business updates",
      ],
    },
  ];

  // ── 3. How We Use Your Information ────────────────────────────────────
  const dataUses = [
    "Provide medical billing and revenue cycle management services",
    "Submit, track, and manage insurance claims",
    "Verify insurance eligibility and benefits",
    "Process payments and resolve billing issues",
    "Maintain accurate financial and medical billing records",
    "Ensure compliance with HIPAA and healthcare regulations",
    "Communicate securely regarding your account and services",
  ];

  // ── 4. HIPAA Safeguards ────────────────────────────────────────────────
  const hipaaCategories = [
    {
      title: "Technical Safeguards",
      icon: Lock,
      measures: [
        "Encryption of PHI during transmission and while stored",
        "Secure servers and protected databases",
        "Firewalls, intrusion detection systems, and continuous monitoring",
        "Secure authentication and password protection systems",
      ],
    },
    {
      title: "Administrative Safeguards",
      icon: FileText,
      measures: [
        "Ongoing employee training on HIPAA privacy and security standards",
        "Role-based access controls limiting PHI access to authorized personnel",
        "Written policies for data handling, breach response, and incident management",
        "Confidentiality agreements for employees and contractors",
      ],
    },
    {
      title: "Physical Safeguards",
      icon: Building2,
      measures: [
        "Restricted access to office spaces and data storage areas",
        "Secure storage of physical records and electronic devices",
        "Controlled disposal of documents and hardware containing sensitive data",
      ],
    },
    {
      title: "Ongoing Monitoring & Updates",
      icon: RefreshCw,
      measures: [
        "Regular internal audits and risk assessments",
        "Continuous review of compliance procedures",
        "Updates to systems and policies to address evolving security risks",
      ],
    },
  ];

  // ── 5. Access Restrictions ─────────────────────────────────────────────
  const accessRestrictions = [
    "Encryption and firewall protection",
    "Role-based permissions and user authentication",
    "Secure servers with monitored activity logs",
    "Regular review of user access rights",
  ];

  // ── 6. Your Rights ─────────────────────────────────────────────────────
  const userRights = [
    {
      title: "Right to Access",
      description: "Access your data and review it for accuracy.",
      process:
        "Submit a request via email or phone. We will respond in accordance with applicable legal requirements.",
    },
    {
      title: "Right to Correction",
      description:
        "Request corrections to inaccurate or incomplete information.",
      process:
        "Contact our privacy office with details of the inaccuracies. We will investigate and correct errors promptly.",
    },
    {
      title: "Right to Deletion",
      description:
        "Request deletion of data, subject to legal and regulatory obligations.",
      process:
        "Submit a deletion request. We will delete your information unless required by law or for legitimate business purposes.",
    },
    {
      title: "Right to Restrict Processing",
      description: "Restrict or limit certain uses of your information.",
      process:
        "Specify the processing activities you want restricted. We will accommodate your request where feasible.",
    },
    {
      title: "Right to Information",
      description: "Receive information about how your data is used.",
      process:
        "Contact us at any time for a transparent summary of how your personal and medical information is being used.",
    },
    {
      title: "Manage Communications",
      description: "Manage SMS and marketing communication preferences.",
      process:
        "Reply STOP to any SMS to opt out, or contact us directly to update your communication preferences.",
    },
  ];

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Privacy Protocol
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
            <Shield className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Data Protection Protocol v4.0</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Privacy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Architecture.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Institutional-grade transparency regarding the collection, processing, and stabilization of clinical data.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/30">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10">
                <div className="w-1 h-1 rounded-full bg-green" />
                <span>Effective: {effectiveDate}</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10">
                <div className="w-1 h-1 rounded-full bg-green" />
                <span>HIPAA_COMPLIANT_V2</span>
             </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CORE STATEMENT — Intelligence Summary
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-border/40 rounded-[3rem] p-10 md:p-20 shadow-sm"
            >
              <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mb-8 italic">Ethical_Framework</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed">
                <p>
                  At SmartMed Billing Solutions, we are fully committed to protecting your personal, medical, and financial information with the highest level of confidentiality and security. We operate in strict compliance with <strong className="text-navy font-black">HIPAA regulations</strong> and applicable federal and state laws. Our goal is to ensure that all sensitive data entrusted to us is handled responsibly, securely stored, and used only for legitimate medical billing and operational purposes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          DATA CATEGORIES — Information Matrix
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Protocol_01</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Information Collection</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="rounded-[2.5rem] border-border/40 bg-white overflow-hidden group hover:border-green/20 hover:shadow-2xl transition-all">
              <CardHeader className="p-10 border-b border-border/40">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-navy group-hover:text-green transition-all flex items-center justify-center">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Active Parameters</h3>
                    <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest mt-1">Primary_Data_Input</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-10">
                <ul className="space-y-4">
                  {dataCollected.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[2.5rem] border-border/40 bg-white overflow-hidden group hover:border-green/20 hover:shadow-2xl transition-all">
              <CardHeader className="p-10 border-b border-border/40">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-navy group-hover:text-green transition-all flex items-center justify-center">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Ingestion Channels</h3>
                    <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest mt-1">Transmission_Network</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-10">
                <ul className="space-y-4">
                  {collectionMethods.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          COMMUNICATIONS — Interface Protocol
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Protocol_02</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Communications Hub</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {smsTypes.map((type, index) => (
                <div key={type.title} className="bg-white border border-border/40 rounded-[2.5rem] p-10 hover:border-green/20 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-navy text-green flex items-center justify-center">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{type.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground font-medium">
                        <div className="w-1 h-1 rounded-full bg-green mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Consent & Opt-In", icon: CheckCircle2, text: "SMS messages are sent only with your prior express consent. Consent is voluntary and is never a condition of receiving our services." },
                { title: "Opt-Out & HELP", icon: AlertCircle, text: "Reply STOP at any time to opt out. Reply HELP for assistance. You may also contact us directly to manage communication preferences." },
                { title: "Privacy & Security", icon: Lock, text: "Your phone number will never be sold or shared. SMS messages do not contain PHI. Message frequency typically does not exceed 4–6 messages per month." }
              ].map((item, i) => (
                <div key={i} className="bg-muted/30 border border-border/40 rounded-[2rem] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="w-5 h-5 text-navy" />
                    <h4 className="text-sm font-black text-foreground uppercase tracking-widest">{item.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONSENT TERMINAL — SMS Validation
      ───────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-12 md:p-24">
             <div className="inline-flex items-center gap-4 mb-10 text-white">
               <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
               <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Authorization Terminal v1.2</span>
             </div>

             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">SMS Consent <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Protocol.</span></h2>
             
             <p className="text-sm text-white/40 mb-12 max-w-xl font-medium leading-relaxed">
               By providing your phone number, you authorize the transmission of service-related nodes via encrypted cellular frequency.
             </p>

             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Phone_Identifier</label>
                      <input type="tel" placeholder="+1 (000) 000-0000" className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 text-white px-8 focus:outline-none focus:border-green/50 transition-all font-mono text-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Authorized_Name</label>
                      <input type="text" placeholder="John Doe" className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 text-white px-8 focus:outline-none focus:border-green/50 transition-all font-mono text-sm" />
                   </div>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:border-green/30 transition-all group">
                   <input id="terminal-consent" type="checkbox" className="w-5 h-5 rounded border-white/20 bg-transparent text-green focus:ring-green mt-1" />
                   <label htmlFor="terminal-consent" className="text-xs text-white/60 font-medium leading-relaxed uppercase tracking-tight group-hover:text-white transition-colors">I acknowledge and authorize SMS communication via the Smart Medical Billing Solutions encrypted gateway.</label>
                </div>

                <Button className="w-full h-20 rounded-[2rem] bg-green hover:bg-white text-navy font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                   Validate & Execute Protocol
                </Button>

                <p className="text-[9px] font-bold text-white/10 text-center uppercase tracking-widest mt-8">Zero-latency enrollment. 256-bit encryption. CTIA compliant.</p>
             </form>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECURITY LAYERS — HIPAA Safeguards
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Protocol_04</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Security Safeguards</h2>
             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-medium leading-relaxed">SmartMed Billing Solutions implements institutional-grade barriers designed to protect Protected Health Information (PHI).</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
             {hipaaCategories.map((cat, index) => (
                <div key={index} className="bg-white border border-border/40 rounded-[2.5rem] p-10 hover:border-green/20 hover:shadow-2xl transition-all group">
                   <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-navy group-hover:text-green transition-all flex items-center justify-center mb-8">
                     <cat.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-black text-foreground uppercase tracking-tighter mb-6">{cat.title}</h3>
                   <ul className="space-y-4">
                      {cat.measures.map((m, i) => (
                        <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-tight">
                           <div className="w-1 h-1 rounded-full bg-border mt-1.5 shrink-0" />
                           <span>{m}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          RIGHTS MATRIX — Control Nodes
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Protocol_06</div>
             <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter">Your Rights</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4 font-mono">
              {userRights.map((right, index) => (
                <AccordionItem
                  key={right.title}
                  value={`right-${index}`}
                  className="border border-border/60 rounded-[2rem] px-10 bg-white shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-8">
                    <div className="flex items-center gap-6 pr-4">
                      <div className="text-[10px] font-black text-green opacity-40">NODE_0{index + 1}</div>
                      <span className="text-lg font-black text-navy uppercase tracking-tighter">
                        {right.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10 pl-16">
                    <p className="text-foreground font-black uppercase text-xs mb-4 tracking-widest">
                      {right.description}
                    </p>
                    <div className="p-6 bg-muted/30 rounded-2xl border border-border/40">
                       <span className="text-[10px] font-black text-navy uppercase tracking-[0.3em] block mb-2">Process_Execution:</span>
                       <p className="text-[12px] text-muted-foreground font-medium leading-relaxed italic">{right.process}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-20 p-12 bg-navy rounded-[3rem] text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                 <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               </div>
               <h4 className="text-[10px] font-black text-green uppercase tracking-[0.4em] mb-6">Contact Privacy Office</h4>
               <p className="text-xl font-medium mb-10 text-white/50">Submit official data requests to the secure channel:</p>
               <a
                  href="mailto:ashleyb@smbillings.com"
                  className="text-2xl md:text-4xl font-black text-white hover:text-green transition-colors underline decoration-green/30 decoration-4 underline-offset-8"
                >
                  ashleyb@smbillings.com
                </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
