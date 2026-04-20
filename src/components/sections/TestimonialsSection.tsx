import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 10 : -10
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 10 : -10
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-32 bg-navy relative overflow-hidden text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-green mb-8">
              <MessageSquare className="w-4 h-4" />
              Provider Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Trusted by Leading <br />
              <span className="text-primary italic">Medical Practices.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative perspective-[1500px] h-[500px] md:h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 md:p-16 shadow-4xl flex flex-col md:flex-row items-center gap-12"
              >
                {/* Visual Accent */}
                <div className="relative shrink-0">
                   <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-4 border-white/10 relative z-10">
                      <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-green rounded-2xl flex items-center justify-center z-20 shadow-2xl">
                      <Quote className="w-6 h-6 text-navy" />
                   </div>
                   <div className="absolute -bottom-6 -left-6 text-white/10 select-none">
                      <Quote className="w-32 h-32 rotate-180" />
                   </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-green text-green" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic text-white/90">
                    "{current.content}"
                  </blockquote>

                  <div>
                    <p className="text-xl font-black text-white">{current.name}</p>
                    <p className="text-sm font-bold text-green uppercase tracking-widest">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Precision Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 px-8">
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-green w-12"
                      : "bg-white/10 w-4 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

