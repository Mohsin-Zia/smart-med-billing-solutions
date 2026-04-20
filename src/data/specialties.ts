import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Heart,
  Baby,
  Bone,
  Eye,
  Stethoscope,
  Activity,
  Syringe,
  Thermometer,
  Pill,
  Microscope,
  Scan,
  Zap,
  Droplets,
  Moon,
  Sun,
  Wind,
  Dna,
  FlaskConical,
  Scissors,
  Ear,
  PersonStanding,
  Timer,
  Bed,
  Hospital,
  Building,
  Ambulance,
  Video,
  Home,
  ArrowRight,
  ShipWheel,
  Syringe as SyringeIcon,
} from "lucide-react";

// Specialty data inline (matches your specialities.ts)
export const specialities = [
  {
    id: "dme",
    name: "DME",
    icon: ShipWheel ?? Bone,
    description:
      "Documentation scrubbing, compliance oversight, rental cycle logic, and prior auth strategy for DME billing",
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    icon: Pill,
    description:
      "Internal medicine-specific medical coding with clean claim submission and denial follow-up",
  },
  {
    id: "family-practice",
    name: "Family Practice",
    icon: Stethoscope,
    description:
      "Primary care and family medicine billing with comprehensive revenue cycle management",
  },
  {
    id: "primary-care",
    name: "Primary Care",
    icon: Stethoscope,
    description:
      "Comprehensive primary care billing with specialized coding for family medicine practitioners",
  },
  {
    id: "wound-care",
    name: "Wound Care",
    icon: Activity,
    description:
      "Specialized billing for wound care services including hyperbaric oxygen therapy and wound debridement",
  },
  {
    id: "radiology",
    name: "Radiology",
    icon: Scan,
    description:
      "Diagnostic imaging billing including X-rays, CT scans, MRI, ultrasound, and interventional radiology",
  },
  {
    id: "laboratory",
    name: "Laboratory Billing",
    icon: Microscope,
    description:
      "Complete lab billing services for clinical and anatomic pathology, molecular diagnostics, and genetic testing",
  },
  {
    id: "molecular-lab",
    name: "Molecular Lab",
    icon: Dna,
    description:
      "Specialized molecular diagnostics and genetic testing billing with complex code management",
  },
  {
    id: "physical-therapy",
    name: "Physical Therapy",
    icon: PersonStanding,
    description:
      "Rehabilitation services billing including physical therapy evaluations, therapeutic exercises, and modalities",
  },
  {
    id: "speech-therapy",
    name: "Speech Therapy",
    icon: Ear,
    description:
      "Speech-language pathology billing for evaluation and treatment of communication disorders",
  },
  {
    id: "chiropractic",
    name: "Chiropractic",
    icon: Bone,
    description:
      "Chiropractic care billing including spinal manipulation, therapies, and X-ray services",
  },
  {
    id: "hospital",
    name: "Hospital",
    icon: Building,
    description:
      "Comprehensive hospital billing including inpatient, outpatient, and emergency department services",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: Brain,
    description:
      "Psychiatric and behavioral health billing including psychotherapy, psychiatric evaluations, and medication management",
  },
  {
    id: "assisted-living",
    name: "Assisted Living Facility",
    icon: Bed,
    description:
      "Billing for assisted living facilities including long-term care services and support coordination",
  },
  {
    id: "podiatry",
    name: "Podiatry",
    icon: PersonStanding,
    description:
      "Foot and ankle care billing including podiatric surgery, orthotics, and diabetic foot care",
  },
  {
    id: "pediatrics",
    name: "Pediatric",
    icon: Baby,
    description:
      "Children's healthcare billing services from newborn through adolescent care",
  },
  {
    id: "inpatient-outpatient",
    name: "In-patient & Out-patient",
    icon: Hospital,
    description:
      "Complete hospital billing solutions for both inpatient stays and outpatient services",
  },
  {
    id: "nursing-skilled",
    name: "Skilled Nursing",
    icon: Bed,
    description:
      "Specialized billing for skilled nursing facilities, long-term care, and nursing home services",
  },
  {
    id: "gynecology",
    name: "Gynecology",
    icon: Baby,
    description:
      "Gynecological services billing including well-woman exams, procedures, and surgical interventions",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    description:
      "Eye care and vision billing including comprehensive eye exams, procedures, and surgeries",
  },
  {
    id: "dental",
    name: "Dental Billing",
    icon: Sun,
    description:
      "Complete dental billing for general dentistry, oral surgery, orthodontics, and cosmetic procedures",
  },
  {
    id: "telemed",
    name: "TeleMed",
    icon: Video,
    description:
      "Telehealth and telemedicine billing with virtual visit coding and remote patient monitoring",
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: Stethoscope,
    description:
      "Digestive system billing including endoscopies, colonoscopies, and GI procedures",
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    icon: Scissors,
    description:
      "Surgical services billing for various surgical procedures and post-operative care",
  },
  {
    id: "ambulatory",
    name: "Ambulatory",
    icon: Ambulance,
    description:
      "Ambulatory surgical center billing for outpatient surgical procedures and services",
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    icon: FlaskConical,
    description:
      "Hormone and metabolism billing including diabetes management, thyroid disorders, and endocrine procedures",
  },
  {
    id: "pain-management",
    name: "Pain Management",
    icon: Pill,
    description:
      "Chronic pain treatment billing including injections, nerve blocks, and pain management procedures",
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: Dna,
    description:
      "Cancer treatment billing services including chemotherapy, radiation therapy, and oncology procedures",
  },
  {
    id: "obgyn",
    name: "OBGYN",
    icon: Baby,
    description:
      "Complete obstetrics and gynecology billing including prenatal care, deliveries, and gynecological surgeries",
  },
  {
    id: "home-nursing",
    name: "Home Nursing",
    icon: Home,
    description:
      "Home health and nursing billing including home health aide services and skilled nursing visits",
  },
  {
    id: "hepatology",
    name: "Hepatology",
    icon: Activity,
    description:
      "Liver disease and hepatology billing including hepatitis treatment and liver function testing",
  },
  {
    id: "nephrology",
    name: "Nephrology",
    icon: Droplets,
    description:
      "Kidney care and dialysis billing including chronic kidney disease management and dialysis treatments",
  },
  {
    id: "dermatology",
    name: "Dermatologist",
    icon: Sun,
    description:
      "Skin care and dermatology billing including dermatological procedures, skin cancer treatment, and cosmetic dermatology",
  },
  {
    id: "traumatology",
    name: "Traumatology",
    icon: Bone,
    description:
      "Trauma and injury billing including emergency trauma care, fracture treatment, and trauma surgery",
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    icon: Brain,
    description:
      "Brain and spine surgery billing including cranial procedures, spinal surgery, and neurosurgical interventions",
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    icon: Wind,
    description:
      "Respiratory and lung billing including pulmonary function tests, bronchoscopy, and respiratory therapy",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: Heart,
    description:
      "Heart and cardiovascular system billing including cardiac testing, stress tests, and cardiology procedures",
  },
  {
    id: "urgent-care",
    name: "Urgent Care",
    icon: Thermometer,
    description:
      "Walk-in and urgent care billing for immediate medical care and minor emergency services",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: Bone,
    description:
      "Musculoskeletal system billing including orthopedic surgery, joint replacements, and sports medicine",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: Zap,
    description:
      "Nervous system billing services including EEG, EMG, and neurological disorder management",
  },
];

// Featured specialities - prioritized with trricore's confirmed specialities first
export const featuredSpecialities = specialities.slice(0, 8);
