import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-border/40 relative overflow-hidden group">
            {/* Visual Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-navy via-green to-navy-light" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-navy transition-colors rounded-full hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-green transition-all duration-500 shadow-inner">
                <Cookie className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-3">
                  Cookie Protocol
                </h3>
                <p className="text-[11px] font-medium text-muted-foreground/80 leading-relaxed mb-6">
                  We utilize clinical-grade data protocols to optimize your interface experience. By continuing, you acknowledge our integrated cookie architecture. 
                  <Link to="/privacy-policy" className="text-green hover:underline ml-1 font-bold">
                    Review Protocol.
                  </Link>
                </p>
                
                <div className="flex items-center gap-4">
                  <Button 
                    onClick={handleAccept}
                    className="bg-navy hover:bg-navy-light text-white px-8 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-navy/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Accept Parameters
                  </Button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-[10px] font-black text-muted-foreground uppercase tracking-widest hover:text-navy transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
