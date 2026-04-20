import {
  FileText,
  Shield,
  TrendingUp,
  ClipboardCheck,
  Award,
  Video,
  Activity,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

export interface CarouselItem {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  features: string[];
  carouselItems?: CarouselItem[];
}

export const services: Service[] = [
  {
    id: "medical-billing",
    title: "Medical Billing & Coding",
    shortDescription:
      "Boost revenue and minimize claim denials with our expert billing team.",
    description:
      "Increase revenue and reduce claim denials with our experienced billing team. We focus on accurate submissions, faster reimbursements, and efficient accounts receivable management to keep your cash flow steady.",
    icon: FileText,
    benefits: [
      "Reduce claim denials by up to 95%",
      "Faster payment turnaround (24-48 hours)",
      "Improved cash flow and collections",
      "Reduced administrative burden",
    ],
    features: [
      "Patient demographics verification",
      "Insurance eligibility verification",
      "Charge entry and coding",
      "Claim submission and tracking",
      "Payment posting and reconciliation",
      "Denial management and appeals",
    ],
    carouselItems: [
      {
        title: "Medical Billing Services",
        description:
          "We handle claims efficiently and accurately to ensure timely reimbursement, reducing administrative overhead and minimizing delays.",
      },
      {
        title: "HCC Medical Billing",
        description:
          "Our specialized coding services optimize revenue for risk adjusted care while maintaining full compliance.",
      },
      {
        title: "Small Practice Billing",
        description:
          "Tailored solutions for clinics and private practices, including claim management, coding, and follow ups, to ensure smooth billing operations.",
      },
      {
        title: "Insurance Claim Management",
        description:
          "From submission to tracking and denial resolution, we manage the entire process to maximize reimbursements.",
      },
      {
        title: "Billing Compliance & Audit Support",
        description:
          "We help maintain accurate records and provide guidance during audits, reducing risk and safeguarding your practice.",
      },
      {
        title: "Eligibility & Benefit Verification",
        description:
          "Accurate verification of patient benefits and eligibility ensures claims are processed quickly and correctly.",
      },
    ],
  },
  {
    id: "credentialing",
    title: "Credentialing and Enrollment",
    shortDescription:
      "Simplify insurance credentialing and enrollment with our specialists.",
    description:
      "Streamline insurance credentialing and payer enrollment with expert guidance, allowing your practice to concentrate on delivering high-quality patient care.",
    icon: Award,
    benefits: [
      "Faster network enrollment",
      "Reduced credentialing delays",
      "Complete documentation management",
      "Ongoing credential maintenance",
    ],
    features: [
      "Initial credentialing applications",
      "Re-credentialing and renewals",
      "CAQH profile management",
      "Payer enrollment and contracting",
      "License and certificate tracking",
      "Privileging support",
    ],
    carouselItems: [
      {
        title: "Provider Information Collection",
        description:
          "We gather all necessary documentation, including licenses, certifications, education, work history, and malpractice insurance.",
      },
      {
        title: "Payer Enrollment",
        description:
          "Our team handles applications with insurance payers, ensuring providers are added to networks quickly and accurately.",
      },
      {
        title: "Primary Source Verification",
        description:
          "We verify all credentials, licenses, and certifications directly with primary sources to maintain compliance and reduce errors.",
      },
      {
        title: "Application Tracking",
        description:
          "Every application is carefully monitored, with status updates and follow ups conducted until approval is confirmed.",
      },
      {
        title: "Re-Credentialing Support",
        description:
          "We assist with ongoing re-credentialing to ensure your providers remain in good standing with all payers and avoid lapses in coverage.",
      },
    ],
  },
  {
    id: "rcm",
    title: "Advanced Eligibility Verification",
    shortDescription:
      "Streamline insurance verification and enrollment with our specialists.",
    description:
      "Streamline insurance verification and enrollment with our specialists, allowing your practice to concentrate on delivering high-quality patient care.",
    icon: Award,
    benefits: [
      "Faster network enrollment",
      "Reduced verification delays",
      "Complete documentation management",
      "Ongoing verification maintenance",
    ],
    features: [
      "Initial verification applications",
      "Re-verification and renewals",
      "CAQH profile management",
      "Payer enrollment and contracting",
      "License and certificate tracking",
    ],
    carouselItems: [
      {
        title: "Patient Information Review",
        description:
          "We start by reviewing and confirming all patient details—demographics, insurance policy numbers, and contact information—to prevent errors at the very first step.",
      },
      {
        title: "Insurance Coverage Verification",
        description:
          "Our team confirms active coverage, plan types, network participation, and policy start and end dates to ensure services provided are eligible for reimbursement.",
      },
      {
        title: "Benefit Assessment",
        description:
          "We analyze co-pays, deductibles, coinsurance, and visit limits so your staff can clearly communicate patient financial responsibility upfront.",
      },
      {
        title: "Pre-Authorization and Referral Checks",
        description:
          "Any services requiring pre-authorization or referrals are identified early to prevent claim denials and delays.",
      },
      {
        title: "Documentation & Reporting",
        description:
          "All verified information is accurately documented and communicated to your billing and clinical teams, ensuring a smooth, error-free claims process.",
      },
    ],
  },
  {
    id: "new-practice-setup",
    title: "New Practice Setup",
    shortDescription:
      "Get your practice up and running with our expert setup services.",
    description:
      "Get your practice up and running with our expert setup services, allowing your practice to concentrate on delivering high-quality patient care.",
    icon: Award,
    benefits: [
      "Faster network enrollment",
      "Reduced verification delays",
      "Complete documentation management",
      "Ongoing verification maintenance",
    ],
    features: [
      "Initial verification applications",
      "Re-verification and renewals",
      "CAQH profile management",
      "Payer enrollment and contracting",
      "License and certificate tracking",
    ],
    carouselItems: [
      {
        title: "Practice Assessment and Planning",
        description:
          "We evaluate your practice goals, patient base, and operational needs to create a customized setup plan that aligns with your objectives.",
      },
      {
        title: "Billing and Coding Setup",
        description:
          "We implement accurate billing and coding systems tailored to your specialty, ensuring compliance and maximizing reimbursements from day one.",
      },
      {
        title: "Payer Enrollment and Credentialing",
        description:
          "Our team handles insurance enrollment and provider credentialing, so your practice is in-network with payers and ready to submit claims immediately.",
      },
      {
        title: "Compliance and Documentation",
        description:
          "We establish protocols to ensure HIPAA compliance, proper documentation, and adherence to regulatory requirements, minimizing risk from the start.",
      },
      {
        title: "Revenue Cycle Management Integration",
        description:
          "We design efficient workflows for claims submission, payment posting, follow-ups, and reporting to optimize your revenue cycle and cash flow.",
      },
      {
        title: "Staff Training and Support",
        description:
          "We provide guidance and training to your staff on billing procedures, software systems, and patient financial processes to ensure smooth operations.",
      },
    ],
  },
  {
    id: "free-practice-audit",
    title: "Free Practice Audit",
    shortDescription:
      "Not sure why your revenue isn't growing? Our complimentary audit identifies missed opportunities.",
    description:
      "Unsure why your revenue growth has stalled? Our complimentary practice audit uncovers missed opportunities and delivers clear, actionable strategies to enhance billing efficiency and boost cash flow.",
    icon: SearchCheck,
    benefits: [
      "Identify missed revenue opportunities",
      "Uncover billing inefficiencies",
      "Compliance gap analysis",
      "Customized optimization strategy",
    ],
    features: [
      "Revenue cycle assessment",
      "Claim denial analysis",
      "Coding accuracy review",
      "Workflow evaluation",
      "Benchmarking against industry standards",
      "Actionable improvement recommendations",
    ],
    carouselItems: [
      {
        title: "Billing and Coding Accuracy Review",
        description:
          "We examine your claims for coding accuracy, proper documentation, and compliance with industry standards, helping reduce denials and errors.",
      },
      {
        title: "Claim Denial Analysis",
        description:
          "We analyze past claim denials to identify recurring issues, payer-specific trends, and areas for improvement to enhance future reimbursements.",
      },
      {
        title: "Revenue Cycle Evaluation",
        description:
          "Our team reviews your entire revenue cycle, from patient registration to payment posting, identifying bottlenecks and inefficiencies that may be impacting cash flow.",
      },
      {
        title: "Insurance Verification Assessment",
        description:
          "We evaluate your eligibility and benefits verification processes to ensure claims are submitted with accurate patient insurance information.",
      },
      {
        title: "Recommendations & Action Plan",
        description:
          "After the audit, we provide a detailed report highlighting issues, potential revenue opportunities, and actionable steps to optimize your practice's billing performance.",
      },
    ],
  },
];

export const featuredServices = services.slice(0, 6);
