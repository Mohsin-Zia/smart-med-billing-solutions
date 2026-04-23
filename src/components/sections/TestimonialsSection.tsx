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
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
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
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-navy relative overflow-hidden text-white">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-light/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-green mb-8">
              <div className="w-12 h-px bg-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">Partner Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
              Clinical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-white to-green-light">Endorsements.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl leading-relaxed font-medium">
              Verified outcomes from leading medical facilities and multi-state practices across the nation.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="relative h-[600px] md:h-[500px]">
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
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] border border-white/10 p-12 md:p-24 shadow-2xl flex flex-col md:flex-row items-center gap-16 overflow-hidden"
              >
                {/* Visual Icon Accent
                <div className="relative shrink-0">
                   <div className="w-32 h-32 md:w-48 md:h-48 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10">
                      <MessageSquare className="w-16 h-16 text-green/50" />
                   </div>
                   <div className="absolute -top-6 -right-6 w-16 h-16 bg-green rounded-3xl flex items-center justify-center z-20 shadow-xl shadow-green/20">
                      <Quote className="w-8 h-8 text-navy" />
                   </div>
                </div> */}

                <div className="flex-1 text-center md:text-left relative">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mb-12">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-green text-green" />
                    ))}
                  </div>
                  
                  <blockquote className="text-md md:text-lg font-black leading-[1.1] mb-12 italic text-white tracking-tight uppercase">
                    "{current.content}"
                  </blockquote>

                  <div className="pt-10 border-t border-white/10">
                    <p className="text-2xl font-black text-white uppercase tracking-tighter">{current.name}</p>
                    <p className="text-xs font-black text-green uppercase tracking-[0.4em] mt-2">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
            <div className="flex items-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-green w-20 shadow-glow-green"
                      : "bg-white/10 w-6 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="w-20 h-20 rounded-3xl border-white/10 bg-white/5 hover:bg-green hover:text-navy hover:border-green text-white transition-all duration-500"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="w-20 h-20 rounded-3xl border-white/10 bg-white/5 hover:bg-green hover:text-navy hover:border-green text-white transition-all duration-500"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

