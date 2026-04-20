import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Users, Heart, Award, Target, Zap, Briefcase, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision insurance for you and your family"
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Annual training budget, certification reimbursement, and career growth opportunities"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible remote work options, generous PTO, and paid parental leave"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Salary above market rates, performance bonuses, and 401(k) matching"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with regular team events and employee recognition"
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description: "Clear career paths with internal promotion and leadership development"
  }
];

const openPositions = [
  {
    id: 1,
    title: "Medical Coder - Cardiology",
    department: "Coding",
    type: "Full-Time Remote",
    experience: "3+ years",
    salary: "$65,000 - $85,000",
    description: "We're seeking an experienced medical coder with cardiology specialty expertise to join our growing team.",
    requirements: [
      "CPC or CCS certification required",
      "Minimum 3 years cardiology coding experience",
      "Expert knowledge of ICD-10-CM, CPT, and HCPCS coding",
      "Understanding of cardiology procedures and terminology",
      "Strong attention to detail and quality focus"
    ],
    responsibilities: [
      "Review and code cardiology medical records accurately",
      "Ensure compliance with coding guidelines and regulations",
      "Work closely with billing team to resolve coding issues",
      "Stay current with annual coding updates and changes",
      "Maintain 99.5% coding accuracy rate"
    ]
  },
  {
    id: 2,
    title: "Revenue Cycle Manager",
    department: "Operations",
    type: "Full-Time Remote",
    experience: "5+ years",
    salary: "$85,000 - $110,000",
    description: "Lead a team of billing specialists and manage revenue cycle operations for multiple client practices.",
    requirements: [
      "Bachelor's degree in Healthcare Administration or related field",
      "5+ years of medical billing and revenue cycle experience",
      "2+ years of team leadership experience",
      "CPAM or similar certification preferred",
      "Strong analytical and problem-solving skills"
    ],
    responsibilities: [
      "Oversee daily billing operations for assigned client accounts",
      "Monitor and improve key performance metrics (KPIs)",
      "Lead and mentor a team of billing specialists",
      "Develop and implement process improvements",
      "Serve as primary point of contact for client relationships"
    ]
  },
  {
    id: 3,
    title: "Denial Management Specialist",
    department: "Billing",
    type: "Full-Time Remote",
    experience: "2+ years",
    salary: "$55,000 - $70,000",
    description: "Focus on preventing, analyzing, and appealing denied claims to maximize client revenue.",
    requirements: [
      "2+ years of medical billing experience",
      "Strong understanding of denial causes and prevention strategies",
      "Experience with appeals process and documentation",
      "Excellent written and verbal communication",
      "Detail-oriented with strong follow-up skills"
    ],
    responsibilities: [
      "Analyze denied claims to identify root causes",
      "Develop and implement prevention strategies",
      "Prepare and submit appeal documentation",
      "Track and report on denial trends and metrics",
      "Collaborate with coding team to prevent future denials"
    ]
  },
  {
    id: 4,
    title: "Client Success Manager",
    department: "Account Management",
    type: "Full-Time Remote",
    experience: "3+ years",
    salary: "$70,000 - $90,000",
    description: "Build strong relationships with healthcare clients and ensure their success with our services.",
    requirements: [
      "3+ years account management or client success experience",
      "Healthcare industry experience strongly preferred",
      "Strong relationship-building and communication skills",
      "Proactive problem-solving abilities",
      "Experience managing multiple client accounts"
    ],
    responsibilities: [
      "Serve as primary point of contact for assigned clients",
      "Conduct regular check-ins and business reviews",
      "Identify opportunities to expand service offerings",
      "Address client concerns and coordinate resolution",
      "Maintain high client satisfaction and retention rates"
    ]
  },
  {
    id: 5,
    title: "Medical Billing Trainee",
    department: "Training",
    type: "Full-Time Remote",
    experience: "Entry Level",
    salary: "$40,000 - $50,000",
    description: "Start your career in medical billing with our comprehensive training program.",
    requirements: [
      "High school diploma or equivalent required",
      "Associate's degree in healthcare or business preferred",
      "Strong attention to detail and data entry skills",
      "Excellent communication abilities",
      "Eagerness to learn and grow in the industry"
    ],
    responsibilities: [
      "Complete 12-week paid training program",
      "Learn medical billing software and processes",
      "Study and obtain coding certification",
      "Assist senior billers with claim processing",
      "Progress to independent billing responsibilities"
    ]
  },
  {
    id: 6,
    title: "QA/Auditing Specialist",
    department: "Quality Assurance",
    type: "Full-Time Remote",
    experience: "4+ years",
    salary: "$70,000 - $85,000",
    description: "Ensure coding and billing accuracy through comprehensive audits and quality assurance processes.",
    requirements: [
      "CPC, CCS, or similar certification required",
      "4+ years of medical coding experience",
      "Previous auditing or QA experience preferred",
      "Strong understanding of compliance requirements",
      "Excellent analytical and documentation skills"
    ],
    responsibilities: [
      "Conduct random audits of coded claims",
      "Identify coding trends and provide feedback",
      "Develop training materials based on audit findings",
      "Maintain quality metrics and reports",
      "Ensure 99%+ accuracy standards are met"
    ]
  }
];

const cultureValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from coding accuracy to customer service."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as a team, supporting each other to achieve our goals and deliver exceptional results."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and innovative approaches to improve our services."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our business relationships."
  }
];

const Careers = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Build Your Career in Healthcare Revenue
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Join our team of 500+ professionals dedicated to transforming healthcare practices nationwide.
              Grow your career while making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Work at MedBill Pro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to creating an environment where talented professionals can thrive,
              grow, and make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do as an organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity and join our growing team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{position.title}</CardTitle>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                            {position.department}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Remote
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            {position.experience}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-primary">
                            <DollarSign className="w-4 h-4" />
                            {position.salary}
                          </span>
                        </div>
                      </div>
                      <Button size="lg">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{position.description}</p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {position.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent and efficient hiring journey from application to offer.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Apply", description: "Submit your application and resume online" },
                { step: "02", title: "Screen", description: "Initial phone screen with our HR team" },
                { step: "03", title: "Interview", description: "Skills assessment and team interviews" },
                { step: "04", title: "Offer", description: "Welcome to the team!" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-secondary/30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Position?"
        description="We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future openings."
        primaryButtonText="Submit Resume"
      />
    </PageWrapper>
  );
};

export default Careers;
