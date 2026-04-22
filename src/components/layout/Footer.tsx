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
    // { label: "Blog", href: "/blog" },
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
    <footer className="bg-navy pt-24 pb-12 relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          {/* Brand & Technical Identity */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="inline-block mb-10 group"
            >
              <div className="w-36 h-18 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center overflow-hidden p-3 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="SmartMed Billing Solutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
              Architecting maximum revenue pathways for healthcare providers through clinical intelligence and financial engineering.
            </p>
            
            {/* Live Status Indicator */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 w-fit">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green animate-ping absolute" />
                <div className="w-2 h-2 rounded-full bg-green relative" />
              </div>
              <span className="text-[10px] font-black text-green uppercase tracking-widest leading-none pt-0.5">Systems Operational</span>
            </div>
          </div>

          {/* Dynamic Link Grids */}
          <div className="lg:col-span-1">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-8 opacity-40">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-sm font-medium text-white/50 hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-8 opacity-40">Structure</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-sm font-medium text-white/50 hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support Architecture */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-8 opacity-40">HQ Contact</h4>
              <div className="space-y-6">
                <a
                  href="tel:575-496-3459"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-green group-hover:text-navy transition-all">
                    <Phone className="w-5 h-5 text-green group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Direct Line</p>
                    <p className="text-white/80 font-black tracking-tight leading-none pt-1">575-496-3459</p>
                  </div>
                </a>
                <a
                  href="mailto:ashleyb@smbillings.com"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-green group-hover:text-navy transition-all">
                    <Mail className="w-5 h-5 text-green group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Secure Email</p>
                    <p className="text-white/80 font-black tracking-tight leading-none pt-1">ashleyb@smbillings.com</p>
                  </div>
                </a>
                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-green group-hover:text-navy transition-all">
                    <MapPin className="w-5 h-5 text-green group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Office Location</p>
                    <p className="text-white/80 font-medium tracking-tight leading-normal pt-1">
                      2780 Picacho Ave, <br />
                      Las Cruces, NM 88007
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Subsystem Status */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-white/20 text-[11px] font-black tracking-widest uppercase">
              © {new Date().getFullYear()} SmartMed Billing Solutions / ALL_RIGHTS_RESERVED
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="text-[10px] font-black text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 hover:bg-white/10 hover:text-green transition-all border border-white/5"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
