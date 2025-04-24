import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Utensils, Clock, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";
import HeroSection from "@/components/HeroSection";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const testimonials = [
  {
    name: "Emma Thompson",
    quote: "Café Analog has become my second home. The coffee is outstanding, and the atmosphere is perfect for both working and relaxing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Michael Chen",
    quote: "Their seasonal drinks are something I look forward to every few months. The staff is knowledgeable and always ready with great recommendations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Sarah Williams",
    quote: "The pastries are absolutely divine! Paired with their signature house blend, it's the perfect way to start my day.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

const Index = () => {
  const [roastLevel, setRoastLevel] = useState([50]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Welcome to Café Analog"
        subtitle="Where every cup tells a story and every bite creates a memory"
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
        primaryButtonText="Explore Our Menu"
        primaryButtonLink="/menu"
        secondaryButtonText="Order Online"
        secondaryButtonLink="/order"
      />
      
      {/* Introduction Section */}
      <section id="intro" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                A Unique Coffee Experience
              </h2>
              <p className="text-foreground/80 mb-6">
                At Café Analog, we believe in slowing down and savoring the moment. Our carefully sourced beans are roasted to perfection, bringing out complex flavors that tell the story of their origin.
              </p>
              <p className="text-foreground/80 mb-8">
                Our café offers a warm, inviting space where community happens naturally. Whether you're meeting friends, working remotely, or simply enjoying a moment to yourself, we've crafted the perfect environment for you.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors interactive-element"
              >
                Learn more about our story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <div className="mt-8 p-6 bg-white/50 rounded-lg shadow-sm">
                <h3 className="font-playfair text-xl font-semibold mb-4">Choose Your Roast Preference</h3>
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>Light Roast</span>
                    <span>Medium</span>
                    <span>Dark Roast</span>
                  </div>
                  <Slider
                    defaultValue={roastLevel}
                    max={100}
                    step={1}
                    onValueChange={setRoastLevel}
                    className="w-full"
                  />
                  <div className="text-center">
                    <p className="text-primary font-medium">
                      {roastLevel[0] < 33 ? "Light roast - bright, acidic, and complex" : 
                       roastLevel[0] < 66 ? "Medium roast - balanced flavor and aroma" : 
                       "Dark roast - rich, bold, with lower acidity"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Coffee being prepared" 
                className="rounded-lg h-64 object-cover w-full animate-scale-in"
                style={{ animationDelay: '0.3s' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Café interior" 
                className="rounded-lg h-64 object-cover w-full mt-8 animate-scale-in"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-16">
            We take pride in offering an exceptional experience from bean to cup, plate to palate
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Premium Coffee</h3>
              <p className="text-foreground/80">
                We source only the finest single-origin and specialty blend beans, roasted to perfection to highlight their unique characteristics.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Artisanal Food</h3>
              <p className="text-foreground/80">
                Our kitchen prepares fresh, seasonal dishes using locally sourced ingredients that perfectly complement our coffee offerings.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Community Space</h3>
              <p className="text-foreground/80">
                More than just a café, we've created a welcoming environment where connections are made and community thrives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Highlights */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Menu Highlights
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-16">
            A taste of what we offer — from signature coffee blends to delicious food
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="menu-card bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-hidden h-60">
                <img 
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Signature Latte" 
                  className="w-full h-full object-cover menu-card-image"
                />
              </div>
              <div className="p-6 menu-card-content">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">Signature Latte</h3>
                <p className="text-foreground/80 mb-4">
                  Our house espresso blend with velvety steamed milk, enhanced with a hint of vanilla and cinnamon.
                </p>
                <p className="text-accent font-medium menu-card-price">$4.50</p>
              </div>
            </div>
            
            <div className="menu-card bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-hidden h-60">
                <img 
                  src="https://images.unsplash.com/photo-1525629545813-e4e7ba8d8c25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Avocado Toast" 
                  className="w-full h-full object-cover menu-card-image"
                />
              </div>
              <div className="p-6 menu-card-content">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">Artisan Avocado Toast</h3>
                <p className="text-foreground/80 mb-4">
                  Freshly mashed avocado on toasted sourdough, topped with microgreens, cherry tomatoes, and feta.
                </p>
                <p className="text-accent font-medium menu-card-price">$8.95</p>
              </div>
            </div>
            
            <div className="menu-card bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-hidden h-60">
                <img 
                  src="https://images.unsplash.com/photo-1571500339678-17c3a5548765?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Chocolate Croissant" 
                  className="w-full h-full object-cover menu-card-image"
                />
              </div>
              <div className="p-6 menu-card-content">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">Chocolate Croissant</h3>
                <p className="text-foreground/80 mb-4">
                  Flaky, buttery croissant filled with rich dark chocolate, baked fresh daily in our kitchen.
                </p>
                <p className="text-accent font-medium menu-card-price">$3.75</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="btn-hover-effect inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials with Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            What Our Customers Say
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            Don't just take our word for it — hear from our regular visitors
          </p>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Hours & Location */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Hours & Location
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" /> Hours
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" /> Location
                </h3>
                <p className="mb-4">123 Coffee Street, Brewville, CA 12345</p>
                <p className="mb-6">Plenty of parking available in our dedicated lot.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Café Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0674997533423!2d-122.42071548386195!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzEwLjgiVw!5e0!3m2!1sen!2sus!4v1620664871334!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
