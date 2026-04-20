import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Medical Billing & Coding", href: "/services/medical-billing" },
    { label: "Credentialing and Enrollment", href: "/services/credentialing" },
    { label: "Advanced Eligibility Verification", href: "/services/rcm" },
    { label: "New Practice Setup", href: "/services/new-practice-setup" },
    { label: "Free Practice Audit", href: "/services/free-practice-audit" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    // { label: "Our Team", href: "/about#team" },
    // { label: "Careers", href: "/about#careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    // { label: "Pricing", href: "/pricing" },
    { label: "Specialities", href: "/specialities" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  const location = useLocation();

  // Scroll to top when route changes (excluding hash changes on same page)
  useEffect(() => {
    // Only scroll to top if it's a new page (not just a hash change)
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      // For hash links, scroll to the element after a short delay
      setTimeout(() => {
        const hash = location.hash.substring(1); // Remove the #
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleLinkClick = () => {
    // Scroll to top immediately when any footer link is clicked
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center mb-6"
            >
              <div className="w-32 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden p-2 shadow-inner">
                <img
                  src="/logo.png"
                  alt="Unity Billing Solutions Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Expert medical billing services trusted by 150+ healthcare
              providers nationwide. Maximize your revenue with our comprehensive
              billing solutions.
            </p>
            <div className="space-y-3">
              <a
                href="tel:(678) 408-2725"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                (678) 408-2725
              </a>
              <a
                href="mailto:Contact@unitybillingsolutions.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                Contact@unitybillingsolutions.com
              </a>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>
                  1531 W McIntosh Rd,
                  <br />
                  Griffin GA 30223
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-6">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Unity Billing Solutions. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
