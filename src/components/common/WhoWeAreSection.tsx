import { motion } from "framer-motion";
import { Users, CheckCircle, TrendingUp, Shield, Heart } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Certified Billing Specialists",
    description:
      "Industry-certified professionals ensuring accuracy in every claim.",
  },
  {
    icon: TrendingUp,
    title: "Increased Reimbursements",
    description: "Proven strategies that maximize your revenue potential.",
  },
  {
    icon: Shield,
    title: "Reduced Claim Denials",
    description: "Proactive denial management to protect your bottom line.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Letting you focus on care while we handle the rest.",
  },
];

const floatingAnimation = {
  animate: { y: [0, -15, 0] },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const WhoWeAreSection = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-background">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-navy/[0.02]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green/[0.02] blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          
          {/* Visual Side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-3xl bg-navy/5 p-3">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Medical billing excellence"
                  className="w-full h-[700px] object-cover rounded-[3.5rem] grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* High-Impact Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-12 -left-12 bg-white backdrop-blur-2xl p-10 rounded-[3rem] shadow-3xl border border-border/40 hidden xl:block max-w-[280px]"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-green flex items-center justify-center text-navy shadow-lg shadow-green/20">
                    <TrendingUp className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-5xl font-black text-navy tracking-tighter">15+</h4>
                    <p className="text-[10px] font-black text-navy/40 uppercase tracking-[0.4em] mt-2">Years of Mastery</p>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-10 -right-10 bg-navy p-8 rounded-[3rem] shadow-3xl border border-white/10 text-white max-w-[320px]"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-green uppercase tracking-[0.4em] mb-1">Global Standard</p>
                    <p className="text-sm font-black text-white/80 uppercase tracking-tight">Enterprise Compliance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-green" />
                <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">Corporate Identity</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black text-navy mb-12 leading-[0.85] tracking-tighter uppercase">
                Revenue <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-navy-light to-navy">Intelligence.</span>
              </h2>

              <p className="text-xl text-muted-foreground/60 leading-relaxed mb-20 font-medium border-l-2 border-green/20 pl-10">
                At <span className="text-navy font-black">SmartMed Billing Solutions</span>, we architect robust revenue pathways by merging deep clinical intelligence with advanced financial engineering.
              </p>

              {/* Highlights Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="p-10 rounded-[3rem] bg-white border border-border/40 hover:border-green/20 hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-navy group-hover:text-green transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-sm font-black text-navy mb-4 leading-tight tracking-widest uppercase">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
