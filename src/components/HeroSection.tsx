
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  image,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax values
  const parallaxBg = `translateY(${scrollY * 0.5}px)`;
  const parallaxContent = `translateY(${scrollY * -0.2}px)`;

  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${image})`,
          transform: parallaxBg
        }}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] opacity-70 animate-float delay-200">
          <Coffee className="h-12 w-12 text-white/30" />
        </div>
        <div className="absolute top-[30%] right-[20%] opacity-50 animate-float delay-300">
          <Coffee className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-[25%] left-[25%] opacity-60 animate-float delay-100">
          <Coffee className="h-10 w-10 text-white/25" />
        </div>
      </div>

      {/* Content */}
      <div 
        className="container mx-auto px-4 relative text-center z-10"
        style={{ transform: parallaxContent }}
      >
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            {title.split(' ').map((word, i) => (
              <span 
                key={i} 
                className="inline-block animate-scale-in"
                style={{ 
                  animationDelay: `${i * 0.1 + 0.3}s`,
                  animationFillMode: 'both'
                }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow animate-fade-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {subtitle}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <Link 
              to={primaryButtonLink} 
              className="btn-hover-effect bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              {primaryButtonText}
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                to={secondaryButtonLink} 
                className="btn-hover-effect bg-white hover:bg-white/90 text-primary font-medium py-3 px-8 rounded-md transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1.5s' }}
        >
          <a href="#intro" className="text-white/80 hover:text-white transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowRight className="h-5 w-5 transform rotate-90" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
