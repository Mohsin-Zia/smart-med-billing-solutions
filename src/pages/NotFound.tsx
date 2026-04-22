import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Terminal, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy relative overflow-hidden">
      {/* Architectural Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header Node */}
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12">
            <AlertTriangle className="w-4 h-4 text-green" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">System Fault Detected</span>
          </div>

          {/* Big 404 */}
          <div className="relative mb-12">
            <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none tracking-tighter uppercase whitespace-pre line italic">
              404
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Route <span className="text-green">Broken.</span></h2>
               <div className="text-[10px] font-black text-green/50 uppercase tracking-[0.5em] font-mono">ERR_ENDPOINT_ABSENT</div>
            </div>
          </div>

          <p className="text-xl text-white/40 mb-16 max-w-lg mx-auto font-medium leading-relaxed italic">
            The requested data packet at <span className="text-white/60 font-mono">[{location.pathname}]</span> could not be retrieved from the primary repository.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="h-20 px-12 rounded-2xl bg-green hover:bg-white text-navy font-black uppercase tracking-widest text-xs transition-all shadow-2xl group w-full md:w-auto"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-3" /> Execute Home Protocol
              </Link>
            </Button>
            
            <div className="flex items-center gap-6 px-10 h-20 rounded-2xl bg-white/5 border border-white/10 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] font-mono">
               <Terminal className="w-4 h-4 opacity-30" />
               SYS_LOG: REDIRECT_PENDING
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Label */}
      <div className="absolute bottom-12 left-12 text-[9px] font-black text-white/10 uppercase tracking-[0.6em] rotate-90 origin-left hidden lg:block">
        Smart_Medical_Billing_Solutions_V1.0
      </div>
    </div>
  );
};

export default NotFound;
