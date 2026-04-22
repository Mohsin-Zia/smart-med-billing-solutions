import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { Calendar, User, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "2025 Medical Billing Updates: What You Need to Know",
    excerpt: "Stay compliant with the latest changes to medical billing codes, reimbursement rates, and regulatory requirements for 2025.",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    category: "Regulatory Updates",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 2,
    title: "How to Reduce Claim Denials by 95%: Best Practices",
    excerpt: "Learn the proven strategies top medical practices use to minimize claim denials and maximize first-pass acceptance rates.",
    author: "Michael Chen",
    date: "January 10, 2025",
    category: "Best Practices",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 3,
    title: "The Impact of AI on Medical Billing: Trends for 2025",
    excerpt: "Artificial intelligence is transforming revenue cycle management. Discover how AI can improve your billing operations.",
    author: "Emily Rodriguez",
    date: "January 5, 2025",
    category: "Technology",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Understanding No Surprises Act: A Practice Guide",
    excerpt: "Everything healthcare providers need to know about the No Surprises Act and good faith estimates.",
    author: "David Williams",
    date: "December 28, 2024",
    category: "Compliance",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Telehealth Billing: Complete Guide for 2025",
    excerpt: "Master the complexities of billing for telehealth services with our comprehensive guide.",
    author: "Sarah Johnson",
    date: "December 20, 2024",
    category: "Telehealth",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Optimizing Your Revenue Cycle: 5 Key Metrics",
    excerpt: "Track these essential KPIs to measure and improve your practice's financial performance.",
    author: "Michael Chen",
    date: "December 15, 2024",
    category: "Revenue Cycle",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=400&fit=crop&q=80"
  }
];

const categories = [
  "All Posts",
  "Regulatory Updates",
  "Best Practices",
  "Technology",
  "Compliance",
  "Telehealth",
  "Revenue Cycle"
];

const Blog = () => {
  const { id } = useParams();
  
  // If we have an ID, show the Analysis Report (Detail View)
  if (id) {
    const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];
    
    return (
      <PageWrapper>
        {/* ─────────────────────────────────────────
            REPORT HEADER — Analysis Document
        ───────────────────────────────────────── */}
        <section className="pt-32 pb-24 lg:pt-48 lg:pb-24 relative overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
            <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Analytical Report : DOC_0{post.id}</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-7xl font-black mb-12 leading-[1.1] tracking-tighter uppercase">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-12 pt-12 border-t border-white/10">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green text-navy flex items-center justify-center font-black text-xs italic">
                       {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                       <div className="text-[10px] font-black uppercase text-green tracking-widest">{post.author}</div>
                       <div className="text-[9px] font-bold uppercase text-white/30 tracking-tighter">Senior Strategic Analyst</div>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase text-white/30 tracking-widest">Protocol Date</div>
                    <div className="text-xs font-black uppercase tracking-tight">{post.date}</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase text-white/30 tracking-widest">Logic Stream</div>
                    <div className="text-xs font-black uppercase tracking-tight text-green">{post.category}</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase text-white/30 tracking-widest">Processing Time</div>
                    <div className="text-xs font-black uppercase tracking-tight">{post.readTime}</div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            REPORT BODY — Intelligence Flow
        ───────────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-20">
              {/* Primary Content Node */}
              <div className="space-y-12">
                 <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden border border-border/40 shadow-2xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
                 </div>

                 <div className="prose prose-lg max-w-none prose-navy prose-invert">
                    <p className="text-2xl font-medium leading-relaxed text-foreground italic mb-12 border-l-4 border-green pl-8">
                       {post.excerpt}
                    </p>
                    
                    <div className="text-muted-foreground leading-loose space-y-8 font-medium italic uppercase tracking-tighter text-sm">
                       [CONTENT_STREAM_COMMENCING]
                       <br /><br />
                       In the rapidly evolving landscape of healthcare financial architecture, the integration of "{post.title}" represents a critical pivot point for institutional revenue sustainability. As we traverse the 2025 fiscal parameters, the operational logic dictates a transition from legacy manual verification to high-density automated claim adjudication.
                       <br /><br />
                       The data packets processed through our primary diagnostic nodes indicate a 24.3% increase in procedural clarity when "{post.category}" logic is finalized. This enhancement is not merely incremental; it is foundational to the next generation of Revenue Cycle Management (RCM) infrastructure.
                       <br /><br />
                       [PHASE_01: DIAGNOSTIC_INITIALIZATION]
                       <br />
                       The first stage involves a deep-packet inspection of existing billing backlogs. By deploying technical filters aligned with current 2025 regulatory shifts, we can preemptively identify denial patterns before they exit the security terminal.
                       <br /><br />
                       [PHASE_02: OPERATIONAL_REFINEMENT]
                       <br />
                       Post-initialization, the system executes a series of logic checks to ensure all coded nodes are synchronized with payer requirements. This zero-latency verification minimizes the delta between service clinical delivery and financial realization.
                    </div>
                 </div>

                 <div className="p-12 bg-muted/20 border border-border/40 rounded-[3rem] flex items-center justify-between group hover:border-green/20 transition-all">
                    <div>
                       <div className="text-[10px] font-black text-green tracking-[0.4em] uppercase mb-4">Verification_Authority</div>
                       <div className="text-lg font-black text-navy uppercase tracking-tighter leading-tight">Smart Research Terminal v2.5</div>
                    </div>
                    <Button variant="ghost" className="h-16 px-10 rounded-2xl bg-navy text-green font-black uppercase tracking-widest text-[10px] hover:bg-green hover:text-navy transition-all">
                       Report Checksum
                    </Button>
                 </div>
              </div>

              {/* Technical Sidebar Nodes */}
              <aside className="space-y-12">
                 <div className="p-10 bg-white border border-border/40 rounded-[2.5rem] shadow-xl">
                    <h4 className="text-[10px] font-black text-navy tracking-[0.4em] uppercase mb-8 pb-6 border-b border-border/40">Technical_Indices</h4>
                    <div className="space-y-8">
                       <div className="flex items-center justify-between px-4 py-3 bg-muted/20 rounded-xl">
                          <span className="text-[9px] font-black text-muted-foreground/40 italic tracking-widest uppercase">System Reliability</span>
                          <span className="text-xs font-black text-navy tracking-tighter">99.98%</span>
                       </div>
                       <div className="flex items-center justify-between px-4 py-3 bg-muted/20 rounded-xl">
                          <span className="text-[9px] font-black text-muted-foreground/40 italic tracking-widest uppercase">Security Clearance</span>
                          <span className="text-xs font-black text-navy tracking-tighter">LVL_04</span>
                       </div>
                       <div className="flex items-center justify-between px-4 py-3 bg-muted/20 rounded-xl">
                          <span className="text-[9px] font-black text-muted-foreground/40 italic tracking-widest uppercase">Processing Speed</span>
                          <span className="text-xs font-black text-navy tracking-tighter">12ms DELTA</span>
                       </div>
                    </div>
                 </div>

                 <div className="p-10 bg-navy text-white rounded-[2.5rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 -translate-y-1/2 translate-x-1/2 rotate-45" />
                    <div className="relative z-10">
                       <TrendingUp className="w-8 h-8 text-green mb-8" />
                       <h4 className="text-xl font-black uppercase tracking-tighter mb-4 leading-tight">Strategic ROI <br /> Projection.</h4>
                       <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-loose mb-10 italic font-medium">
                          Deployment of these patterns typically results in a 340% increase in billing throughput during peak operational periods.
                       </p>
                       <Button className="w-full h-16 rounded-2xl bg-white text-navy hover:bg-green transition-all font-black uppercase tracking-widest text-[9px]">
                          Initialize ROI Audit
                       </Button>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-foreground tracking-[0.4em] uppercase pl-4">Lateral_Reports</h4>
                    <div className="space-y-3">
                       {blogPosts.slice(0, 3).map(p => (
                         <Link 
                           key={p.id} 
                           to={`/blog/${p.id}`}
                           className="flex items-center gap-6 p-6 bg-white border border-border/40 rounded-2xl hover:border-green/30 hover:shadow-lg transition-all group"
                         >
                           <div className="w-12 h-12 rounded-xl bg-muted overflow-hidden">
                              <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                           </div>
                           <div className="text-[9px] font-black text-navy uppercase tracking-widest leading-[1.4] line-clamp-2">{p.title}</div>
                         </Link>
                       ))}
                    </div>
                 </div>
              </aside>
            </div>
          </div>
        </section>

        <CTASection 
          title="Analyze Your Practice Data?"
          description="Submit your operational logs for a high-density diagnostic scan by our senior analysts."
          primaryButtonText="Submit Protocol"
        />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* ─────────────────────────────────────────
          PAGE HEADER — Intelligence Terminal
      ───────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-navy text-white text-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">Knowledge Stream v2.5</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Clinical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Intelligence.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Synthesized reporting on regulatory shifts, revenue optimization, and clinical technical deployment.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FEATURED FEED — Primary Analysis
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-muted/20 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="grid lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden border border-border/40 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:border-green/20">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
                  <div className="absolute top-8 left-8">
                    <span className="px-6 py-2 bg-navy text-green text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-green/30 backdrop-blur-xl">
                      Featured_Report
                    </span>
                  </div>
                </div>
                
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-8 font-mono">
                    <span className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-green" />
                       {blogPosts[0].category}
                    </span>
                    <span>{blogPosts[0].date}</span>
                    <span className="text-navy">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 leading-[1.1] tracking-tighter uppercase group-hover:text-navy transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground mb-12 leading-relaxed font-medium">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-10 border-t border-border/40">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-navy text-green flex items-center justify-center font-black text-xs">
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-foreground">{blogPosts[0].author}</div>
                        <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">Senior Analyst</div>
                      </div>
                    </div>
                    
                    <Button className="h-16 px-10 rounded-2xl bg-navy hover:bg-green hover:text-navy text-white transition-all font-black uppercase tracking-widest text-[10px]" asChild>
                      <Link to="/blog/1">
                        Read Analysis <ArrowRight className="w-4 h-4 ml-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CATEGORY MATRIX — Technical Filter
      ───────────────────────────────────────── */}
      <section className="py-8 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                  category === "All Posts"
                    ? "bg-navy text-green border-green/30 shadow-lg"
                    : "bg-white text-foreground/40 border-border/60 hover:border-navy hover:text-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          RESOURCE MODULES — Intelligence Grid
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-border/40 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-green/20 hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-navy/90 backdrop-blur-xl text-green text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-green/20">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 text-[9px] font-black text-white/20 uppercase tracking-tighter">INF_DOC_0{post.id}</div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 mb-6 font-mono">
                      <span>{post.date}</span>
                      <div className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight leading-tight mb-6 group-hover:text-navy transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-[11px] text-muted-foreground font-medium leading-relaxed mb-10 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-border/40 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-black text-[10px] text-foreground/40 group-hover:bg-navy group-hover:text-green transition-all">
                             {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/60">{post.author}</span>
                       </div>
                       
                       <Button size="icon" variant="ghost" className="w-12 h-12 rounded-xl group-hover:bg-navy group-hover:text-green transition-all" asChild>
                         <Link to={`/blog/${post.id}`}>
                           <ArrowRight className="w-4 h-4" />
                         </Link>
                       </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SUBSCRIPTION TERMINAL — Insights Link
      ───────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-12 md:p-24 text-center">
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-[10px] font-black text-green uppercase tracking-[0.4em]">Subscription Protocol</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase whitespace-pre-line">Stay Synchronized <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-green">Insights.</span></h2>
            
            <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto font-medium">
              Join 5,000+ medical directors receiving our weekly analysis on revenue architecture.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="ACCESS_EMAIL_PROTOCOL"
                className="flex-1 px-8 h-20 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-green/50 transition-all font-mono text-sm"
              />
              <Button className="h-20 px-10 rounded-2xl bg-green hover:bg-white text-navy font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                Subscribe Terminal
              </Button>
            </div>
            
            <p className="mt-8 text-[9px] font-bold text-white/10 uppercase tracking-widest">
              Zero-latency reporting. Encrypted distribution.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Expert Billing Advice?"
        description="Our team is here to help answer your questions and optimize your revenue cycle."
        primaryButtonText="Contact Us"
      />
    </PageWrapper>
  );
};

export default Blog;
