export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Bagwell",
    role: "LCSW",
    company: "LADAC Angels Network Counseling Services",
    content: "Ashley has been my billing specialist for years. She consistently demonstrates dedication and commitment to her clients. Ashley ensures that my business runs smoothly by addressing challenges of any size. She pays close attention to detail and has proven to be trustworthy and honest over the years. I highly recommend Smart Med Billing Solutions.",
    rating: 5,
  },
  {
    id: "2",
    name: "Angelica Pena Fernandez",
    role: "LPCC",
    company: "Flow De Vida",
    content: "Ashley is the most efficient credentialer ever! I trusted her to start my group practice and she took care of all the credentialing and billing since the beginning. The process was really fast and smooth. We got credentialed for Medicaid in less than one month! This is by far the best choice I've made to get my business started! I strongly recommend her services.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "LCSW",
    company: "Mind Better Counseling",
    content: "Working with SmartMed Billing Solutions has been a game-changer for our practice. Their tailored solutions have optimized our revenue cycle. Our credentialing issues were cleared up in no time with Ashley's help. Our clean‑claim rate improved and our denied claims were resolved faster.",
    rating: 5,
  },
];
