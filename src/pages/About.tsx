
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Coffee, Heart, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="About Us" 
        subtitle="The story behind Café Analog and our mission"
        image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
      />
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-foreground/80 mb-4">
                Café Analog began in 2015 with a simple idea: create a space where exceptional coffee and food bring people together. Founded by coffee enthusiasts Mark and Sarah Wilson, the café was born from their travels across the world's great coffee regions.
              </p>
              <p className="text-foreground/80 mb-4">
                After years working in corporate jobs, Mark and Sarah decided to pursue their passion for coffee and community. They transformed a historic building in downtown Brewville into a warm, inviting space where the analog pleasures of conversation and connection could thrive in our increasingly digital world.
              </p>
              <p className="text-foreground/80">
                The name "Analog" represents our philosophy: slowing down, being present, and savoring life's simple pleasures—like a perfectly crafted cup of coffee shared with friends.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Café founders" 
                className="rounded-lg shadow-md z-10 relative"
              />
              <div className="absolute inset-0 bg-primary rounded-lg -translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Mission & Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Quality</h3>
              <p className="text-foreground/80">
                We never compromise on quality, from sourcing the best beans to training our baristas in the art of coffee preparation.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Community</h3>
              <p className="text-foreground/80">
                We strive to create a welcoming space where connections are made and community thrives through shared experiences.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Sustainability</h3>
              <p className="text-foreground/80">
                We're committed to environmentally responsible practices, from ethically sourced beans to compostable packaging.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">Craftsmanship</h3>
              <p className="text-foreground/80">
                We honor traditional methods while embracing innovation, treating coffee-making as both an art and a science.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Coffee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Coffee beans" 
                  className="rounded-lg h-48 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Coffee preparation" 
                  className="rounded-lg h-48 object-cover w-full mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Roasting process" 
                  className="rounded-lg h-48 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Café interior" 
                  className="rounded-lg h-48 object-cover w-full mt-8"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Coffee Philosophy
              </h2>
              <p className="text-foreground/80 mb-4">
                We believe that great coffee is a journey from seed to cup. We work directly with small-scale farmers and cooperatives who share our commitment to quality and sustainability.
              </p>
              <p className="text-foreground/80 mb-4">
                Our roasting process is carefully calibrated to highlight each bean's unique characteristics, whether it's the bright acidity of an Ethiopian Yirgacheffe or the chocolate notes of a Colombian Supremo.
              </p>
              <p className="text-foreground/80">
                Every cup we serve represents not just a beverage, but a connection to the people who grew the beans, the hands that processed them, and the craftsmanship of our baristas who prepare your drink with care and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Meet Our Team
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-12">
            The passionate people behind your favorite café experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Mark Wilson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-1">Mark Wilson</h3>
                <p className="text-accent mb-4">Co-founder & Head Roaster</p>
                <p className="text-foreground/80">
                  With over 15 years of experience in specialty coffee, Mark oversees our roasting program and coffee sourcing.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Sarah Wilson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-1">Sarah Wilson</h3>
                <p className="text-accent mb-4">Co-founder & Executive Chef</p>
                <p className="text-foreground/80">
                  Sarah brings her culinary expertise to create our menu of delicious foods that perfectly complement our coffee offerings.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Alex Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-1">Alex Chen</h3>
                <p className="text-accent mb-4">Head Barista</p>
                <p className="text-foreground/80">
                  A champion in regional barista competitions, Alex leads our coffee program and trains our talented barista team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
