import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";
import { cardEnter } from "@/lib/animations";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  className?: string;
}

export const TestimonialCard = ({ testimonial, index = 0, className }: TestimonialCardProps) => {
  return (
    <motion.div
      className={cn(
        "bg-card rounded-2xl p-6 shadow-card border border-border relative overflow-hidden group",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardEnter}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote mark decoration */}
      <motion.div
        className="absolute top-4 right-4 text-6xl font-bold text-primary/5 -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "
      </motion.div>

      {/* Rating */}
      <motion.div
        className="flex items-center gap-1 mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 + i * 0.05, type: "spring", stiffness: 300 }}
          >
            <Star
              className={cn(
                "w-5 h-5",
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-muted text-muted"
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.p
        className="text-foreground mb-6 leading-relaxed relative text-body"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        <span className="text-3xl text-primary/30 font-serif mr-1">"</span>
        {testimonial.content}
        <span className="text-3xl text-primary/30 font-serif ml-1">"</span>
      </motion.p>

      {/* Author */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div className="flex-1">
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <motion.div
            className="text-sm text-muted-foreground leading-snug"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            {testimonial.role}, {testimonial.company}
          </motion.div>
        </div>
      </motion.div>

      {/* Hover gradient effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
        }}
      />
    </motion.div>
  );
};
