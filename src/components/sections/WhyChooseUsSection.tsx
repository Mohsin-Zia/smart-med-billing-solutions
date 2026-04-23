import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  Clock,
  HeartPulse,
  Users,
  DollarSign,
  BarChart3,
  PhoneCall,
  Layers,
} from "lucide-react";

const differentiators = [
  {
    icon: DollarSign,
    title: "No Upfront Costs",
    description:
      "We work on a percentage-of-collections model — our success is directly tied to yours. If you don't get paid, neither do we. Zero setup fees, zero contracts, zero risk.",
  },
  {
    icon: Clock,
    title: "24–48 Hour Claim Turnaround",
    description:
      "Speed matters in RCM. We process and submit clean claims within one to two business days, slashing your days in A/R and keeping cash flow consistent.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "Every client gets a named billing specialist who understands your specialty, your payer mix, and your practice's unique needs — not a call center ticket system.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Performance Dashboards",
    description:
      "Access live reporting on collection rates, denial trends, A/R aging, and coder productivity — giving practice managers the data they need to make informed decisions.",
  },
  {
    icon: HeartPulse,
    title: "Specialty-Specific Expertise",
    description:
      "From primary care to neurology, cardiology to behavioral health — our coders are trained in over 40 specialties, with the specific CPT/ICD knowledge each requires.",
  },
  {
    icon: PhoneCall,
    title: "Proactive Communication",
    description:
      "We don't wait for you to call. Our team alerts you to payer policy changes, coding updates, and denial patterns that could impact your revenue — before they do.",
  },
];

const comparisonItems = [
  { feature: "No long-term contracts", us: true, typical: false },
  { feature: "Dedicated billing specialist", us: true, typical: false },
  { feature: "Real-time reporting portal", us: true, typical: false },
  { feature: "99% clean claim rate guarantee", us: true, typical: false },
  { feature: "Multi-specialty expertise", us: true, typical: true },
  { feature: "HIPAA-certified infrastructure", us: true, typical: true },
  { feature: "Same-day denial management", us: true, typical: false },
  { feature: "No setup or onboarding fees", us: true, typical: false },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/[0.02] -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green/[0.03] blur-3xl rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-green" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.6em]">
                Competitive Advantage
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-[0.85] tracking-tighter uppercase">
              Why Practices{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-navy-light">
                Choose Us.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-2xl leading-relaxed font-medium border-l-2 border-green/20 pl-8">
              Hundreds of physicians have replaced their in-house billing teams with SmartMed — here's
              exactly why they made the switch and never looked back.
            </p>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white border border-border/40 rounded-[3rem] p-12 hover:shadow-[0_40px_80px_rgba(30,58,138,0.1)] hover:-translate-y-4 transition-all duration-700 overflow-hidden"
            >
              {/* Hover bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green to-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />

              <div className="w-16 h-16 rounded-[1.5rem] bg-navy/5 flex items-center justify-center mb-10 group-hover:bg-navy group-hover:text-green transition-all duration-500">
                <item.icon className="w-8 h-8 text-navy group-hover:text-green transition-colors" />
              </div>
              <h3 className="text-lg font-black text-navy mb-5 uppercase tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground/70 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[4rem] overflow-hidden border border-border/40 shadow-2xl"
        >
          <div className="grid grid-cols-3 bg-navy text-white">
            <div className="p-10 col-span-1">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">
                Feature
              </span>
            </div>
            <div className="p-10 flex items-center justify-center gap-3 border-l border-white/10">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-sm font-black tracking-widest uppercase">SmartMed</span>
            </div>
            <div className="p-10 flex items-center justify-center border-l border-white/10">
              <span className="text-sm font-black tracking-widest uppercase text-white/40">
                Typical Biller
              </span>
            </div>
          </div>

          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-border/40 ${
                index % 2 === 0 ? "bg-white" : "bg-muted/20"
              }`}
            >
              <div className="p-8 col-span-1 flex items-center">
                <span className="text-sm font-semibold text-navy/80">{item.feature}</span>
              </div>
              <div className="p-8 flex items-center justify-center border-l border-border/30">
                {item.us ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green" />
                    <span className="text-[10px] font-black text-green uppercase tracking-widest hidden sm:inline">
                      Yes
                    </span>
                  </div>
                ) : (
                  <XCircle className="w-6 h-6 text-red-400/60" />
                )}
              </div>
              <div className="p-8 flex items-center justify-center border-l border-border/30">
                {item.typical ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-muted-foreground/40" />
                    <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest hidden sm:inline">
                      Sometimes
                    </span>
                  </div>
                ) : (
                  <XCircle className="w-6 h-6 text-red-400/40" />
                )}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};
