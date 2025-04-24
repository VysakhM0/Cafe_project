
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-playfair font-bold">Café Analog</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-xs">
              A cozy corner where exceptional coffee meets delicious food in a warm, welcoming atmosphere.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="min-w-5 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Coffee Street, Brewville, CA 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+11234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:info@cafeanalog.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@cafeanalog.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-primary-foreground/20 text-primary-foreground/60 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Café Analog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
