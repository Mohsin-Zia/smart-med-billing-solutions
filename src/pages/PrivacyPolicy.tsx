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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-48 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 text-secondary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Unity Billing Solutions Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Unity Billing Solutions — protecting your personal, medical, and
              financial information
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Unity Billing Solutions Privacy Policy
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                At{" "}
                <strong className="text-foreground">
                  Unity Billing Solutions
                </strong>
                , we are fully committed to protecting your personal, medical,
                and financial information with the highest level of
                confidentiality and security. We operate in strict compliance
                with{" "}
                <strong className="text-foreground">HIPAA regulations</strong>{" "}
                and applicable federal and state laws. Our goal is to ensure
                that all sensitive data entrusted to us is handled responsibly,
                securely stored, and used only for legitimate medical billing
                and operational purposes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 1. Information We Collect ────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collect only the information that is necessary to properly
              provide medical billing and revenue cycle management services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <UserCheck className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Data We Collect</CardTitle>
                  </div>
                  <CardDescription>
                    Personal and medical information required for billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dataCollected.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      How It Is Collected
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Secure channels used to gather your information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {collectionMethods.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                    We limit data collection to what is required for accurate
                    billing, compliance, and service delivery.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. SMS & Communications ──────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              2. SMS &amp; Communications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We may contact you via SMS, phone, or email for service-related
              updates, billing notifications, and account reminders.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* SMS Types */}
            <div className="grid md:grid-cols-2 gap-6">
              {smsTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <type.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Consent, Opt-Out, Privacy rows */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Consent & Opt-In",
                  icon: CheckCircle2,
                  color: "text-secondary",
                  text: "SMS messages are sent only with your prior express consent. Consent is voluntary and is never a condition of receiving our services.",
                },
                {
                  title: "Opt-Out & HELP",
                  icon: AlertCircle,
                  color: "text-amber-500",
                  text: "Reply STOP at any time to opt out. Reply HELP for assistance. You may also contact us directly to manage communication preferences.",
                },
                {
                  title: "Privacy & Security",
                  icon: Lock,
                  color: "text-primary",
                  text: "Your phone number will never be sold or shared. SMS messages do not contain PHI. Message frequency typically does not exceed 4–6 messages per month.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-5 h-5 ${item.color}`} />
                          <CardTitle className="text-base">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="p-5 bg-primary/5 border border-primary/20 rounded-xl text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              All SMS communications comply with{" "}
              <strong className="text-foreground">
                TCPA and CTIA guidelines
              </strong>{" "}
              and include required opt-out instructions. Standard message and
              data rates may apply.
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2a. SMS Consent Form ─────────────────────────────────────────── */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">SMS Consent Form</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  By providing your phone number, you consent to receive SMS
                  text messages from Unity Billing Solutions regarding service
                  inquiries, appointment scheduling, onboarding updates, and
                  account-related notifications. Message frequency may vary.
                  Message and data rates may apply. Reply STOP to opt out at any
                  time or HELP for assistance. Consent is not a condition of
                  purchase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <p className="text-xs text-muted-foreground">
                      Standard message and data rates may apply.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Full Name{" "}
                      <span className="text-muted-foreground text-xs">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      id="sms-consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="sms-consent"
                      className="text-sm text-foreground"
                    >
                      I agree to receive SMS communications from Unity Billing
                      Solutions.
                    </label>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Submit Consent
                  </button>

                  <div className="space-y-1 pt-3 border-t border-border text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">
                      We respect your privacy.
                    </p>
                    <p>
                      By submitting this form, you agree to receive SMS
                      communications from Unity Billing Solutions as described
                      above. You can withdraw your consent at any time by
                      texting STOP.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 3. How We Use Your Information ──────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your information is used strictly for legitimate healthcare
              billing and administrative purposes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {dataUses.map((use, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {use}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic border-t border-border pt-4">
                  We do not use your information for unrelated purposes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 4. HIPAA Compliance ──────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              4. HIPAA Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unity Billing Solutions takes HIPAA compliance extremely
              seriously. We implement comprehensive safeguards designed to
              protect Protected Health Information (PHI) from unauthorized
              access, disclosure, alteration, or destruction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {hipaaCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{cat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.measures.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Shield className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm text-muted-foreground mt-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Through these safeguards, we protect patient health information in
            both digital and physical formats, ensuring{" "}
            <strong className="text-foreground">
              confidentiality, integrity, and availability
            </strong>{" "}
            of data.
          </motion.p>
        </div>
      </section>

      {/* ── 5. Who Has Access ────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              5. Who Has Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Only authorized personnel within Unity Billing Solutions have
              access to your information. Access is granted strictly on a
              need-to-know basis and is limited to individuals directly involved
              in billing, compliance, or account management.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Access Restrictions</CardTitle>
                <CardDescription>
                  Access is limited to individuals directly involved in billing,
                  compliance, or account management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {accessRestrictions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 bg-muted/40 rounded-lg text-sm text-muted-foreground"
                    >
                      <Lock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-destructive">
                      Unauthorized access is strictly prohibited
                    </strong>{" "}
                    and subject to disciplinary action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 6. Your Rights ───────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              6. Your Rights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You have important rights regarding your personal and medical
              information.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {userRights.map((right, index) => (
                <AccordionItem
                  key={right.title}
                  value={`right-${index}`}
                  className="border rounded-xl px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-center gap-3 pr-4">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground">
                        {right.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-8">
                    <p className="text-foreground font-medium mb-2">
                      {right.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Process:</strong>{" "}
                      {right.process}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.p
              className="mt-6 text-sm text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Requests may be submitted via email at{" "}
              <a
                href="mailto:Contact@unitybillingsolutions.com"
                className="text-primary hover:underline"
              >
                Contact@unitybillingsolutions.com
              </a>{" "}
              or by phone at{" "}
              <a
                href="tel:(678) 408-2725"
                className="text-primary hover:underline"
              >
                (678) 408-2725
              </a>
              . We will respond in accordance with applicable legal
              requirements.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 7. Consent ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-3xl font-bold text-foreground">7. Consent</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p>
                  By using our services and providing insurance or medical
                  information, you consent to the collection, use, and
                  processing of your data for billing, administrative, and
                  compliance purposes.
                </p>
                <p className="font-medium text-foreground">
                  Consent may be provided through:
                </p>
                <ul className="space-y-2">
                  {[
                    "Phone or in-person communications",
                    "Emails or written agreements",
                    "Website form submissions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm pt-2 border-t border-border">
                  Your personal information, including phone numbers and SMS
                  consent, will{" "}
                  <strong className="text-foreground">
                    never be shared, sold, or disclosed
                  </strong>{" "}
                  to third parties except as required by law or for legitimate
                  billing operations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 8. Children's Privacy ────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Baby className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-3xl font-bold text-foreground">
                8. Children's Privacy
              </h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Our services are not directed toward children under the age of
                  13. We do not knowingly collect personal information from
                  children. If a parent or guardian believes that a child has
                  provided personal data to us without consent, they should
                  contact us immediately so appropriate steps can be taken to
                  remove the information.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 9. Updates to This Policy ────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-3xl font-bold text-foreground">
                9. Updates to This Privacy Policy
              </h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect
                  changes in regulations, services, or operational practices.
                  Updated versions will be posted on this page with a revised
                  effective date. When required, we may also notify clients via
                  email or other appropriate communication methods.
                </p>
                <p className="text-muted-foreground mt-4">
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we protect your information.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 10. Contact ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              10. Contact Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For questions, concerns, or to exercise your privacy rights,
              please contact us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:Contact@unitybillingsolutions.com"
                className="text-primary hover:underline text-sm break-all"
              >
                Contact@unitybillingsolutions.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a
                href="tel:+15013133708"
                className="text-primary hover:underline"
              >
                (678) 408-2725
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Website</h3>
              <a
                href="https://www.unitymedicalbilling.com"
                className="text-primary hover:underline text-sm"
              >
                www.unitymedicalbilling.com
              </a>
            </motion.div>
          </div>

          <motion.div
            className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              We are committed to addressing your privacy concerns promptly and
              professionally.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              © {new Date().getFullYear()} Unity Billing Solutions — All Rights
              Reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
