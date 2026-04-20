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
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Premium Technical Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute top-0 right-0 w-1/2 h-full text-navy/5" viewBox="0 0 400 800" fill="none">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="800" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side - Multi-layered */}
          <div className="flex-1 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl technical-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Medical billing team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </motion.div>

            {/* Float Card 1: Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -top-10 -left-10 glass-panel p-8 rounded-3xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-green" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">15+</h4>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Years Expertise</p>
                </div>
              </div>
            </motion.div>

            {/* Float Card 2: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-12 right-12 bg-white dark:bg-navy p-10 rounded-[2.5rem] shadow-2xl border border-border max-w-xs"
            >
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green" />
                Our Core Mission
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering healthcare professionals to deliver exceptional care by removing the complexities of revenue cycle management.
              </p>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green/10 text-primary text-xs font-black tracking-widest uppercase mb-6 border border-green/20">
                <Users className="w-3.5 h-3.5 mr-2" />
                Corporate Identity
              </span>
              
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-green">Financial Success</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground font-medium mb-12">
                <p>
                  At <span className="text-foreground">Unity Billing Solutions</span>, we don't just process claims; we architect robust revenue pathways for modern healthcare practices.
                </p>
                <p>
                  Our team combines deep clinical coding knowledge with advanced financial technology to ensure your practice remains compliant, profitable, and patient-focused.
                </p>
              </div>

              {/* Technical Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-green/30 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
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
