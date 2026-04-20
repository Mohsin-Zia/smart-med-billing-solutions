import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardEnter, floatingAnimation } from "@/lib/animations";

interface SpecialtyCardProps {
  name: string;
  icon: LucideIcon;
  description?: string;
  onClick?: () => void;
  index?: number;
  className?: string;
}

export const SpecialtyCard = ({
  name,
  icon: Icon,
  description,
  onClick,
  index = 0,
  className,
}: SpecialtyCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative p-8 rounded-[2rem] bg-white dark:bg-navy/40 border border-border/50 hover:border-green/30 cursor-pointer transition-all duration-500 overflow-hidden technical-shadow",
        className
      )}
      onClick={onClick}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardEnter}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      {/* Premium Technical Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-16 h-16" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted/50 group-hover:bg-green/10 flex items-center justify-center mb-6 transition-all duration-500 scale-100 group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary group-hover:text-green transition-colors" />
        </div>
        
        <h3 className="text-sm font-bold text-foreground uppercase tracking-widest leading-relaxed mb-2">{name}</h3>
        
        {/* Animated Dash */}
        <div className="w-8 h-1 bg-green/20 group-hover:w-16 group-hover:bg-green transition-all duration-500 rounded-full" />
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};
