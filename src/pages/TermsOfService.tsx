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
        "Notify Unity promptly of any changes that may affect billing operations.",
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
    "Unity adheres to HIPAA Privacy Rule (45 CFR Part 160)",
    "Full compliance with the HIPAA Security Rule (45 CFR Part 164)",
    "HITECH Act provisions are strictly followed",
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <PageWrapper>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-48 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Scale className="w-10 h-10 text-white" />
            </motion.div>

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              <span className="text-white/90 text-sm font-medium">
                {effectiveDate}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Terms &amp; Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website or
              engaging with our medical billing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Banner ───────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to Unity Billing Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
                These Terms &amp; Conditions govern your use of our website and
                services in the field of medical billing and revenue cycle
                management. Please read these terms carefully before using our
                website or engaging with our services.
              </p>
              <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-start gap-3 max-w-3xl mx-auto">
                <AlertTriangle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <p className="text-blue-400 leading-relaxed">
                  By accessing or using our website, you agree to comply with
                  and be bound by these Terms &amp; Conditions. If you do not
                  agree with any part of these terms, please do not use our
                  website or services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Table of Contents ──────────────────────────────────── */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Table of Contents
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {tableOfContents.map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-xs font-bold text-primary">
                      {item.number}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: Acceptance ──────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  By accessing this website or engaging with our services, you
                  acknowledge that you have read, understood, and agree to these
                  Terms &amp; Conditions. Continued use of our website or
                  services constitutes your acceptance of any updates or
                  modifications.
                </p>
              </div>
            </div>

            <div className="ml-17 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> These Terms govern your use of our
                  Services along with our Privacy Policy, Business Associate
                  Agreement (BAA), and any applicable Service Level Agreements
                  (SLAs). All parties must comply with HIPAA regulations and
                  applicable healthcare laws.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: SMS ─────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">
                      SMS Terms of Service
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  By opting into SMS from{" "}
                  <strong className="text-foreground">
                    Unity Billing Solutions
                  </strong>
                  , you agree to receive conversational and service-related
                  messages.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      To Opt Out
                    </h4>
                    <p className="text-sm">
                      Reply <strong className="text-foreground">STOP</strong> at
                      any time. You will receive a confirmation message and no
                      further messages will be sent.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      For Help
                    </h4>
                    <p className="text-sm">
                      Reply <strong className="text-foreground">HELP</strong> at
                      any time to receive assistance or additional information
                      about our SMS service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Services ────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Services Offered
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Unity Billing Solutions provides comprehensive billing,
                  coding, revenue cycle management, credentialing, telehealth
                  billing, and consulting services to healthcare providers.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 ml-17">
              {servicesOffered.map((service, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Client Responsibilities ────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <span className="text-lg font-bold text-primary">4</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Client Responsibilities
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When using our website or services, clients agree to the following
              obligations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {clientObligations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 5: HIPAA ───────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary">5</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  HIPAA Compliance &amp; Confidentiality
                </h2>
              </div>
            </div>

            <div className="ml-17">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Unity Billing Solutions strictly adheres to HIPAA regulations
                and industry best practices to ensure the protection of all
                Protected Health Information (PHI).
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {hipaaPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl p-4"
                  >
                    <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 6 & 7: IP + Liability ─────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {/* Intellectual Property */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">6</span>
                  </div>
                  <CardTitle className="text-2xl">
                    Intellectual Property
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  All content on our website, including text, graphics, logos,
                  images, videos, and software, is the property of{" "}
                  <strong className="text-foreground">
                    Unity Billing Solutions
                  </strong>{" "}
                  and is protected by copyright and other intellectual property
                  laws.
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 flex items-start gap-3">
                  <Ban className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    You may not reproduce, distribute, modify, or create
                    derivative works without prior written permission from Unity
                    Billing Solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">
                      Limitation of Liability
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  While we strive to provide accurate and efficient billing
                  services, Unity Billing Solutions cannot guarantee specific
                  reimbursement outcomes or financial results.
                </p>
                <p className="leading-relaxed">
                  In no event shall Unity Billing Solutions be liable for
                  direct, indirect, incidental, special, or consequential
                  damages arising from your use of our services, including but
                  not limited to lost revenue, data loss, or business
                  interruption.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Indemnification ─────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">8</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gavel className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Indemnification</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold{" "}
                  <strong className="text-foreground">
                    Unity Billing Solutions
                  </strong>{" "}
                  harmless from any claims, liabilities, losses, damages, costs,
                  or expenses (including reasonable attorneys' fees) arising
                  from your use of our services, violation of these Terms &amp;
                  Conditions, or infringement of any third-party rights.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── Sections 9 & 10: Modifications + Governing Law ─────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">9</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">
                      Modification of Terms
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  Unity Billing Solutions reserves the right to update or modify
                  these Terms &amp; Conditions at any time without prior notice.
                  Continued use of our website or services after any changes
                  constitutes your acceptance of the revised terms. We encourage
                  you to review this page periodically.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">10</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Scale className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Governing Law</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  These Terms &amp; Conditions are governed by the laws of the
                  state in which Unity Billing Solutions operates. Any legal
                  disputes arising from these terms shall be subject to the
                  exclusive jurisdiction of the courts in that jurisdiction.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Federal Regulations
                    </h4>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        HIPAA Privacy Rule (45 CFR Part 160)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        HIPAA Security Rule (45 CFR Part 164)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        HITECH Act provisions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        Medicare/Medicaid regulations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        Stark Law and Anti-Kickback Statute
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      State Compliance
                    </h4>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        State privacy laws
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        State medical billing regulations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        State licensure requirements
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        Workers' compensation laws
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        Prompt payment regulations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl mb-10">
              If you have any questions or concerns regarding these Terms &amp;
              Conditions, please don't hesitate to reach out.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "1531 W McIntosh Rd Griffin GA 30223",
                  href: null,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(678) 408-2725",
                  href: "tel:(678) 408-2725s",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "Contact@unitybillingsolutions.com",
                  href: "mailto:Contact@unitybillingsolutions.com",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-sm border border-black rounded-2xl p-6 hover:bg-white/15 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 " />
                    </div>
                    <p className=" text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className=" font-medium text-sm hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className=" font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TermsOfService;
