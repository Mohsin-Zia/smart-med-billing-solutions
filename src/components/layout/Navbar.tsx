import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, FileText, Shield } from "lucide-react";
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

  return (
    <motion.header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-500 mx-auto max-w-7xl px-4",
        "rounded-full bg-background/60 backdrop-blur-xl shadow-lg",
        "border border-border/50",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.98,
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const, // Premium out-expo style easing
      }}
    >
      <div>
        <nav className="flex items-center justify-between h-16 md:h-20 px-6">
          {/* Logo */}
          <motion.div
            // whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-0.5">
              <div className="w-30 h-20 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Unity Billing Solutions Logo"
                  className="w-full h-full object-contain"
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
                    "relative px-4 py-2 text-sm font-medium transition-all hover:text-primary rounded-lg flex items-center gap-1",
                    location.pathname === item.href ||
                      (location.pathname.startsWith(item.href) &&
                        item.href !== "/")
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:bg-muted/50",
                  )}
                >
                  {item.label}
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
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
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
                        <div className="bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 p-2 max-h-96 overflow-y-auto">
                          {item.items?.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.href}
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                              }}
                            >
                              <Link
                                to={subItem.href}
                                className="block px-3 py-2 text-sm rounded-lg hover:bg-primary/10 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {subItem.label}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
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
              href="tel:(678) 408-2725"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Phone className="w-4 h-4 mr-2" />
              </motion.div>
              (678) 408-2725
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-green hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors relative overflow-hidden"
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
                  href="tel:(678) 408-2725"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (678) 408-2725
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
