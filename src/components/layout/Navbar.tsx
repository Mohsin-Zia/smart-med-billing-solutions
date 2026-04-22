import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Phone, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

// ── "Services" entry replaced with a dropdown-only item (no standalone /services link)
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#", // no standalone page — clicking label does nothing
    hasDropdown: true,
    items: services.map((s) => ({
      label: s.title,
      href: `/services/${s.id}`, // each item routes to its own page
      description: s.shortDescription,
    })),
  },
  { label: "Specialities", href: "/specialities" },
  {
    label: "Company",
    href: "/about",
    hasDropdown: true,
    items: [
      {
        label: "About",
        href: "/about",
        description: "Learn about our company",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        description: "Our privacy policy",
      },
      {
        label: "Terms & Conditions",
        href: "/terms-of-service",
        description: "Terms of service",
      },
    ],
  },
  // { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const legalItems = [
  { label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { label: "Terms of Service", href: "/terms-of-service", icon: FileText },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide on scroll down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show on scroll up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        const ref = dropdownRefs.current[activeDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Is the user currently on any service detail page?
  const onServicePage = location.pathname.startsWith("/services/");
  
  // Pages that start with a dark background header
  const darkHeaderPages = ["/","/about", "/specialities", "/services", "/careers", "/contact", "/privacy-policy", "/terms-of-service"];
  const hasDarkHeader = darkHeaderPages.some(path => location.pathname.startsWith(path)) && !onServicePage;
  
  // Should the navbar use light text (for dark backgrounds)?
  // Only when at the top of a dark-header page
  const useLightNavbar = hasDarkHeader && lastScrollY <= 20;

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        lastScrollY > 20 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <div className="w-52 h-20 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="SmartMed Billing Solutions Logo"
                  className={cn(
                    "w-full h-full object-contain transition-all duration-300",
                    useLightNavbar && "brightness-0 invert" // Make logo white on dark backgrounds
                  )}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
                ref={(el) => {
                  if (item.hasDropdown) dropdownRefs.current[item.label] = el;
                }}
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                  <Link
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 rounded-xl group",
                      location.pathname === item.href ||
                        (location.pathname.startsWith(item.href) &&
                          item.href !== "/")
                        ? (useLightNavbar ? "text-white" : "text-primary")
                        : (useLightNavbar ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary"),
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                  {item.hasDropdown && (
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/10"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  
                  {/* Hover effect underline */}
                  <div className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          hidden: { opacity: 0, y: 10, scale: 0.95 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              staggerChildren: 0.05,
                              duration: 0.2,
                            },
                          },
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64"
                      >
                        <div className="bg-background/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 p-3 max-h-[70vh] overflow-y-auto">
                          {item.items?.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.href}
                              variants={{
                                hidden: { opacity: 0, y: 5 },
                                visible: { opacity: 1, y: 0 },
                              }}
                            >
                              <Link
                                to={subItem.href}
                                className="flex flex-col px-4 py-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group/sub"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="text-sm font-bold text-foreground group-hover/sub:text-primary transition-colors flex items-center justify-between">
                                  {subItem.label}
                                  <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                                </div>
                                <div className="text-[11px] text-muted-foreground mt-1 leading-relaxed opacity-80">
                                  {subItem.description}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="tel:575-496-3459"
              className={cn(
                "flex items-center text-sm font-bold transition-all px-4 py-2",
                useLightNavbar ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary"
              )}
              whileHover={{ x: -2 }}
            >
              <Phone className={cn("w-4 h-4 mr-2.5", useLightNavbar ? "text-green-light" : "text-green")} />
              575-496-3459
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className={cn(
                  "px-8 h-12 rounded-xl shadow-lg font-bold tracking-tight transition-all duration-300",
                  useLightNavbar 
                    ? "bg-white text-navy hover:bg-white/90 shadow-white/10" 
                    : "bg-navy hover:bg-navy-light text-white shadow-navy/20"
                )}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors relative overflow-hidden",
              useLightNavbar ? "text-white hover:bg-white/10" : "hover:bg-muted"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={isOpen ? "open" : "closed"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <motion.div
              className="px-6 py-6 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label,
                          )
                        }
                        className={cn(
                          "w-full py-3 px-4 text-base font-medium transition-all rounded-lg flex items-center justify-between",
                          location.pathname.startsWith(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:text-primary hover:bg-muted/50",
                        )}
                      >
                        {item.label}
                        <motion.div
                          animate={{
                            rotate: mobileDropdown === item.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.items?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="block py-2 px-4 text-sm rounded-lg hover:bg-primary/10 transition-colors"
                                  onClick={() => {
                                    setMobileDropdown(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  <div className="font-medium text-foreground">
                                    {subItem.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                    {subItem.description}
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-3 px-4 text-base font-medium transition-all rounded-lg",
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-muted/50",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Legal */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="pt-4 mt-4 border-t border-border/50 space-y-2"
              >
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Legal
                </div>
                {legalItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center py-2 px-4 text-sm rounded-lg hover:bg-muted/50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4 mr-2 text-primary" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="pt-6 mt-4 border-t border-border/50 space-y-4"
              >
                <a
                  href="tel:575-496-3459"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  575-496-3459
                </a>
                <Button
                  className="w-full bg-green hover:bg-green/90 shadow-lg"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
