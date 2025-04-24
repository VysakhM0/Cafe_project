
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-2" 
          : "bg-background/70 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Coffee className={cn(
            "h-8 w-8 transition-all duration-500 group-hover:text-accent",
            scrolled ? "text-primary" : "text-primary"
          )} />
          <div className="overflow-hidden">
            <motion.span 
              className="text-2xl font-playfair font-bold text-primary block" 
              initial={{ y: 0 }}
              whileHover={{ y: -30 }}
            >
              Café Analog
            </motion.span>
            <motion.span 
              className="text-sm text-accent font-medium -mt-1 block" 
              initial={{ y: 30 }}
              whileHover={{ y: -30 }}
            >
              Premium Coffee Experience
            </motion.span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "font-medium transition-colors relative py-2",
                isActive(link.path) 
                  ? "text-primary" 
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/order" 
            className="group relative overflow-hidden bg-accent text-accent-foreground px-6 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors"
          >
            <span className="relative z-10">Order Now</span>
            <span className="absolute inset-0 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out -skew-x-12"></span>
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-background border-b border-muted"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={link.path} 
                    className={cn(
                      "font-medium transition-colors py-2 block",
                      isActive(link.path) 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
              >
                <Link 
                  to="/order" 
                  className="bg-accent text-accent-foreground px-4 py-2 mt-2 rounded-md font-medium hover:bg-accent/90 transition-colors inline-block w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
