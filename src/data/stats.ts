export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    id: "accuracy",
    value: 98,
    suffix: "%",
    label: "Claim Accuracy",
    description: "Industry-leading precision in submissions"
  },
  {
    id: "claims",
    value: 99,
    suffix: "%",
    label: "Clean Claim Rate",
    description: "First-pass claim acceptance"
  },
  {
    id: "specialities",
    value: 40,
    suffix: "+",
    label: "Medical Specialities",
    description: "Comprehensive specialty coverage"
  },
  {
    id: "recovery",
    value: 30,
    suffix: "%",
    label: "Faster Payments",
    description: "Reduction in accounts receivable cycle"
  },
];

export const trustBadges = [
  { id: "hipaa", label: "HIPAA Compliant", icon: "Shield" },
  { id: "certified", label: "AAPC Certified", icon: "Award" },
  { id: "support", label: "24/7 Support", icon: "Clock" },
  { id: "secure", label: "256-bit Encryption", icon: "Lock" },
];
