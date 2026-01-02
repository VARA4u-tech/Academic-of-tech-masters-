import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const courses = [
  { name: "Quantum Computing", href: "/course/quantom-computing" },
  { name: "DevOps (AWS/Azure)", href: "/course/devops-aws-azure" },
  { name: "Embedded Systems", href: "/course/embedded-systems" },
  { name: "Data Science", href: "/course/data-science" },
  { name: "Cloud Computing", href: "/course/cloud-computing" },
  { name: "Data Analytics", href: "/course/data-analytics" },
  { name: "Cyber Security", href: "/course/cyber-security" },
  { name: "QA Automation", href: "/course/qa-automation" },
  { name: "AI", href: "/course/ai" },
  { name: "JavaFull Stack", href: "/course/java-full-stack" },
  { name: "Python Full Stack", href: "/course/python-full-stack" },
  { name: "Machine Learning", href: "/course/machine-learning" },
];

const navLinks = [
  {
    name: "What We Do", href: "/what-we-do", hasDropdown: true, dropdownItems: [
      { name: "Placements", href: "/what-we-do#placements" },
      { name: "Interns", href: "/what-we-do#interns" },
      { name: "Resources", href: "/what-we-do#resources" }
    ]
  },
  { name: "Courses", href: "/courses", hasDropdown: true, dropdownItems: courses },
  {
    name: "About Us", href: "/about-us", hasDropdown: true, dropdownItems: [
      { name: "Blog", href: "/blog" }
    ]
  },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@aotms?si=mj3-j_JH4lHC3zeF", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/academyoftechmasters?igsh=enZ5YjYwOXg1cW80&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
      >
        {/* Top Bar - Hidden on scroll and on mobile */}
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          animate={{
            height: isScrolled ? 0 : "auto",
            opacity: isScrolled ? 0 : 1,
            paddingTop: isScrolled ? 0 : undefined,
            paddingBottom: isScrolled ? 0 : undefined
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-primary text-primary-foreground text-xs py-2 hidden md:block overflow-hidden"
        >
           <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:+918019942233" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3.5 h-3.5" /><span>+91 80199 42233 / 52233</span></a>
              <span className="w-px h-3 bg-primary-foreground/30" />
              <a href="mailto:Info@aotms.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3.5 h-3.5" /><span>Info@aotms.com</span></a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>Mon - Sat: 8:00 - 18:00</span></div>
              <span className="w-px h-3 bg-primary-foreground/30" />
              <div className="flex items-center gap-1.5">
                <a href="#" className="hover:text-accent transition-colors font-medium">Login</a>
                <span className="text-primary-foreground/50">/</span>
                <a href="#" className="hover:text-accent transition-colors font-medium">Register</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <nav className={`bg-background/95 backdrop-blur-md border-b border-border/50 ${isScrolled ? "py-2" : "py-3"}`}>
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="TechVarsity" className={`transition-all duration-300 ${isScrolled ? "h-9" : "h-11"}`} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="nav-link flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                  </Link>
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                           initial={{ opacity: 0, y: 15, scale: 0.98 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: 15, scale: 0.98 }}
                           transition={{ duration: 0.2, ease: "easeOut" }}
                           className={`absolute top-full mt-4 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 overflow-hidden ${link.name === "Courses" ? "w-[600px] -left-1/2" : "w-[200px]"}`}
                        >
                          <div className={`grid gap-1 relative z-10 ${link.name === "Courses" ? "grid-cols-2" : "grid-cols-1"}`}>
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/item flex items-center px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                              >
                                <div className="mr-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-300" />
                                <span className="text-sm font-medium text-slate-600 group-hover/item:text-blue-900 transition-colors">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
                <button className="btn-primary hidden sm:flex">Enroll Now</button>
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6 text-foreground" />
                </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-background z-[101] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={logo} alt="TechVarsity" className="h-8" />
                  </Link>
                  <button
                    className="p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-grow p-6 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.name} className="border-b border-border/50">
                        {!link.hasDropdown ? (
                          <Link
                            to={link.href}
                            className="block text-foreground/80 hover:text-primary py-3 font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                              className="flex items-center justify-between w-full text-foreground/80 hover:text-primary py-3 font-medium transition-colors"
                            >
                              <span>{link.name}</span>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-secondary/30 rounded-lg my-2"
                                >
                                  <div className="py-2">
                                  {link.dropdownItems?.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className="block py-2.5 px-4 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-border">
                    <button className="btn-primary w-full mb-4">Enroll Now</button>
                    <div className="flex items-center justify-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
