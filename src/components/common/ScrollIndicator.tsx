import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
      setIsScrolling(true);

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Reset isScrolling after scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
    >
      <motion.button
        onClick={scrollDirection === "up" ? scrollToTop : scrollToBottom}
        className={`
          relative w-14 h-14 rounded-2xl shadow-2xl backdrop-blur-md
          border-2 transition-all duration-300
          ${
            scrollDirection === "up"
              ? "bg-gradient-to-br from-emerald-500/20 to-green-600/20 border-emerald-400/50 hover:border-emerald-400 hover:shadow-emerald-500/30"
              : "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-blue-400/50 hover:border-blue-400 hover:shadow-blue-500/30"
          }
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={scrollDirection === "up" ? "Scroll to top" : "Scroll to bottom"}
      >
        {/* Mouse icon background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Mouse body */}
          <div className="relative">
            {/* Outer mouse shape */}
            <svg
              width="28"
              height="40"
              viewBox="0 0 28 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={scrollDirection === "up" ? "text-emerald-400" : "text-blue-400"}
            >
              <path
                d="M14 0C6.268 0 0 6.268 0 14V26C0 33.732 6.268 40 14 40C21.732 40 28 33.732 28 26V14C28 6.268 21.732 0 14 0ZM14 22C12.343 22 11 20.657 11 19V13C11 11.343 12.343 10 14 10C15.657 10 17 11.343 17 13V19C17 20.657 15.657 22 14 22Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>

            {/* Scroll wheel / Arrow indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              initial={false}
              animate={{ scale: isScrolling ? [1, 0.8, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {scrollDirection === "up" ? (
                  <motion.div
                    key="up"
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronUp className="w-4 h-4" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="down"
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Pulse effect when scrolling */}
        <AnimatePresence>
          {isScrolling && (
            <motion.div
              className={`absolute inset-0 rounded-2xl ${
                scrollDirection === "up" ? "bg-emerald-400/30" : "bg-blue-400/30"
              }`}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl blur-lg opacity-30 ${
            scrollDirection === "up" ? "bg-emerald-400" : "bg-blue-400"
          }`}
        />
      </motion.button>
    </motion.div>
  );
};
