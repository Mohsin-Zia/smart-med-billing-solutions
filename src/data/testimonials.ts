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
    name: "Dr. Sarah Johnson",
    role: "Medical Director",
    company: "Sunrise Family Practice",
    content: "Since partnering with MedBill Pro, our claim denial rate dropped by 85%. Their team is incredibly responsive and truly understands the complexities of medical billing. I can now focus on patient care instead of paperwork.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Practice Manager",
    company: "Chen Cardiology Associates",
    content: "The transition was seamless, and we saw results within the first month. Our collections increased by 28%, and the detailed reporting gives us complete visibility into our revenue cycle. Highly recommend!",
    rating: 5,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    role: "Owner",
    company: "Pediatric Care Center",
    content: "As a pediatric practice, we deal with complex billing scenarios daily. MedBill Pro's expertise in pediatric billing has been invaluable. Their accuracy and attention to detail are unmatched.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Williams",
    role: "CFO",
    company: "Metro Orthopedic Group",
    content: "We were struggling with a 45-day A/R. Within 6 months of working with MedBill Pro, we reduced it to 28 days. Their follow-up on claims is aggressive and effective. Outstanding service!",
    rating: 5,
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    role: "Psychiatrist",
    company: "Behavioral Health Associates",
    content: "Mental health billing is notoriously complex, but MedBill Pro handles it effortlessly. They understand the unique requirements and ensure we get reimbursed properly for every session.",
    rating: 5,
  },
  {
    id: "6",
    name: "Robert Martinez",
    role: "Operations Director",
    company: "Urgent Care Network",
    content: "Managing billing for 12 urgent care locations was a nightmare until we found MedBill Pro. Their scalable solutions and consistent quality across all locations have transformed our operations.",
    rating: 5,
  },
];
