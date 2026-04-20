import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ContactForm } from "@/components/common/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleMap } from "@/components/common/GoogleMap";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(678) 408-2725",
    description: "Mon-Fri 8am-6pm EST",
    href: "tel:(678) 408-2725",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Contact@unitybillingsolutions.com",
    description: "We respond within 24 hours",
    href: "mailto:Contact@unitybillingsolutions.com",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "1531 W McIntosh Rd Griffin GA 30223",
    description: "Griffin GA 30223",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "8:00 AM - 6:00 PM EST",
    href: "#",
  },
];

const Contact = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
          {/* Lighter gradient overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-green/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
              Contact Unity Billing Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Your Trusted Partner in Financial Success
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with Unity Billing Solutions today to discover how we
              can help your practice thrive financially, streamline operations,
              and optimize your revenue cycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={staggerItem}
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and one of our billing specialists will
                get back to you within 24 hours with a customized quote.
              </p>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're committed to helping healthcare providers succeed with
                transparent, performance-based billing services.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Free Consultation",
                    description:
                      "No obligation review of your current billing operations with actionable recommendations.",
                  },
                  {
                    title: "Quick Onboarding",
                    description:
                      "Get started in as little as 2 weeks with our streamlined onboarding process.",
                  },
                  {
                    title: "Dedicated Support",
                    description:
                      "Your dedicated account manager is just a call or email away.",
                  },
                  {
                    title: "No Long-Term Contracts",
                    description:
                      "Month-to-month agreements because we earn your business every day.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map with Location Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GoogleMap
                  initialLocation={{
                    lat: 40.740769,
                    lng: -74.004258,
                    address: "1531 W McIntosh Rd Griffin GA 30223",
                  }}
                  onLocationSelect={(location) => {
                    console.log("Selected location:", location);
                  }}
                  height="350px"
                  className="mt-8"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection limit={5} />
    </PageWrapper>
  );
};

export default Contact;
