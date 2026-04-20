import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cardHover, hoverLift, cardEnter } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  benefits?: string[];
  index?: number;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  href,
  benefits,
  index = 0,
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardEnter}
      transition={{ delay: index * 0.1 }}
      whileHover="hover"
    >
      <motion.div
        variants={cardHover}
        whileHover={hoverLift.hover}
      >
        <Card className={cn("h-full border-0 shadow-card hover:shadow-card-hover transition-all duration-300", className)}>
          <CardContent className="p-6">
            <motion.div
              className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Icon className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">{title}</h3>
            <p className="text-muted-foreground mb-4 text-body leading-relaxed">{description}</p>
            {benefits && benefits.length > 0 && (
              <motion.ul
                className="space-y-2 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-sm text-muted-foreground"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    {benefit}
                  </motion.li>
                ))}
              </motion.ul>
            )}
            {href && (
              <motion.div whileHover={{ x: 5 }} whileTap={{ x: 2 }}>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                  <Link to={href} className="flex items-center">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
