import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
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
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Blog & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Medical Billing Insights
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Expert articles, industry updates, and best practices to help you optimize your revenue cycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">Featured Article</span>
              </div>
              <Card className="overflow-hidden border-2 border-primary/20">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">
                            {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/blog/1">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === "All Posts"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.author}</span>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/blog/${post.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Medical Billing Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest industry news, regulatory updates, and best practices delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
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
