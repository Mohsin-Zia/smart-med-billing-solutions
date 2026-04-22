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
        "group relative p-10 rounded-[2.5rem] bg-muted/20 backdrop-blur-sm border border-border/40 hover:border-green/30 cursor-pointer transition-all duration-500 overflow-hidden",
        className
      )}
      onClick={onClick}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardEnter}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6, backgroundColor: 'hsl(var(--muted)/0.4)' }}
    >
      {/* Decorative Technical ID */}
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="text-[10px] font-black font-mono tracking-tighter">SPEC_0{index + 1}</span>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-[1.25rem] bg-background shadow-sm group-hover:bg-navy group-hover:text-white flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110">
          <Icon className="w-8 h-8 text-navy group-hover:text-green transition-colors" />
        </div>
        
        <h3 className="text-xs font-black text-foreground uppercase tracking-[0.2em] leading-tight mb-4 group-hover:text-green transition-colors">
          {name}
        </h3>
        
        {/* Technical Progress Indicator */}
        <div className="flex items-center gap-1.5 pt-4 opacity-20 group-hover:opacity-100 transition-all duration-700">
          <div className="w-1.5 h-1.5 rounded-full bg-green" />
          <div className="w-1.5 h-1.5 rounded-full bg-green/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-green/20" />
        </div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
};
