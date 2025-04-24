
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4); // Parallax effect multiplier
      
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    // Animation on mount
    setIsVisible(true);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Random shine effect for title
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div 
      ref={headerRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-40 h-40 md:w-80 md:h-80 rounded-full bg-accent/5 translate-x-1/2 translate-y-1/2" />
      
      {/* Parallax background */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: `translateY(${offset}px) scale(1.1)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-background/30 p-8 rounded-lg shadow-lg border border-border/20">
          {/* Animated title */}
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 relative overflow-hidden">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "inline-block relative",
                  // Random color for some characters
                  Math.random() > 0.8 ? "text-accent" : ""
                )}
              >
                {char === ' ' ? '\u00A0' : char}
                {Math.random() > 0.9 && (
                  <span className="absolute inset-0 animate-pulse-soft opacity-70 blur-sm">
                    {char}
                  </span>
                )}
              </motion.span>
            ))}
          </h1>
          
          {/* Subtitle with reveal animation */}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Decorative angled divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-secondary transform -skew-y-2" />
    </div>
  );
};

export default PageHeader;
