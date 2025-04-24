
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { Facebook, Instagram, Twitter, MailOpen } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    // In a real app, you would send the form data to a server here
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormStatus(null);
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        image="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
      />
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-foreground/80 mb-8">
                Have questions about our menu, want to book an event, or just want to say hello? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2">Visit Us</h3>
                  <p className="text-foreground/80">
                    123 Coffee Street<br />
                    Brewville, CA 12345
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2">Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-foreground/80">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                    <span>Saturday</span>
                    <span>8:00 AM - 9:00 PM</span>
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2">Contact</h3>
                  <p className="text-foreground/80 mb-2">
                    Phone: (123) 456-7890
                  </p>
                  <p className="text-foreground/80">
                    Email: info@cafeanalog.com
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6 text-primary" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6 text-primary" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                  <MailOpen className="h-5 w-5" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Catering">Catering</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0674997533423!2d-122.42071548386195!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzEwLjgiVw!5e0!3m2!1sen!2sus!4v1620664871334!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
