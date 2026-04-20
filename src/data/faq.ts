export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What services does Unity Billing Solutions provide?",
    answer:
      "Unity Billing Solutions provides end-to-end medical billing solutions including claims submission, medical coding, accounts receivable management, denial management, and full revenue cycle optimization. Our services are tailored to support a wide range of medical specialities and practice sizes to ensure accurate billing and improved revenue.",
    category: "services",
  },
  {
    id: "2",
    question: "How can Unity Billing Solutions help reduce claim denials?",
    answer:
      "Our experienced billing team performs detailed coding, eligibility verification, and claim reviews before submission. By identifying common billing errors and ensuring compliance with payer guidelines, we significantly reduce claim denials and help accelerate reimbursements.",
    category: "services",
  },
  {
    id: "3",
    question: "Which EHR systems do you support?",
    answer:
      "We support many leading EHR platforms including Epic, Cerner, Athenahealth, Allscripts, NextGen Healthcare, eClinicalWorks, Practice Fusion, and Greenway Health. Our team ensures smooth integration with your existing workflow for efficient billing operations.",
    category: "general",
  },
  {
    id: "4",
    question: "Do you offer services for small practices?",
    answer:
      "Yes, we offer scalable billing solutions for solo practitioners, small clinics, and large medical practices. Our services are designed to provide the same level of accuracy, compliance, and revenue optimization regardless of practice size.",
    category: "general",
  },
  {
    id: "5",
    question: "What is included in the Free Practice Audit?",
    answer:
      "Our free practice audit reviews your current billing workflow to identify missed revenue opportunities, inefficiencies, and compliance issues. After the audit, we provide a customized strategy to improve your billing performance and maximize your revenue cycle.",
    category: "pricing",
  },
  {
    id: "6",
    question: "How do you handle claim denials?",
    answer:
      "Our denial management process includes immediate analysis of denied claims, identification of root causes, timely appeals with proper documentation, and implementation of preventive measures. We track denial patterns and work with your team to address systemic issues. Our goal is to recover maximum revenue while reducing future denials.",
    category: "services",
  },
  {
    id: "7",
    question: "Is my patient data secure?",
    answer:
      "Absolutely. We are HIPAA compliant and implement enterprise-grade security measures including encryption, secure data centers, access controls, and regular security audits. Our team undergoes regular HIPAA training, and we sign Business Associate Agreements (BAA) with all clients. Your patient data is protected with the highest security standards.",
    category: "security",
  },
  {
    id: "8",
    question: "What billing software do you use?",
    answer:
      "We work with all major practice management and EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Kareo, and many others. If you're using a different system, we can likely integrate with it. Our flexibility ensures a seamless transition without disrupting your existing workflows.",
    category: "technology",
  },
  {
    id: "9",
    question: "How does the onboarding process work?",
    answer:
      "Our onboarding is designed to be smooth and efficient. It includes: 1) Initial consultation and practice analysis, 2) Data migration and system setup, 3) Team training and workflow integration, 4) Parallel billing period for quality assurance, and 5) Full transition with ongoing support. Most practices are fully onboarded within 2-4 weeks.",
    category: "general",
  },
  {
    id: "10",
    question: "Do you offer credentialing services?",
    answer:
      "Yes, we provide comprehensive provider credentialing services including initial credentialing, re-credentialing, CAQH profile management, and payer enrollment. We track all credentials and licenses, ensuring timely renewals and maintaining your participation in all insurance networks.",
    category: "services",
  },
];
