
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { X } from "lucide-react";

// Gallery categories and images
const categories = [
  { id: "all", name: "All" },
  { id: "cafe", name: "Café Interior" },
  { id: "coffee", name: "Coffee & Drinks" },
  { id: "food", name: "Food" },
  { id: "events", name: "Events" },
];

const galleryImages = [
  {
    id: 1,
    category: "cafe",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Café seating area with wooden tables",
    title: "Main Seating Area"
  },
  {
    id: 2,
    category: "cafe",
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee bar with brewing equipment",
    title: "Our Coffee Bar"
  },
  {
    id: 3,
    category: "cafe",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Cozy reading nook with armchairs",
    title: "Reading Corner"
  },
  {
    id: 4,
    category: "coffee",
    src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Latte art with heart pattern",
    title: "Signature Latte Art"
  },
  {
    id: 5,
    category: "coffee",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee beans in roaster",
    title: "Bean Roasting Process"
  },
  {
    id: 6,
    category: "coffee",
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Cold brew coffee preparation",
    title: "Cold Brew Preparation"
  },
  {
    id: 7,
    category: "food",
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Avocado toast with eggs",
    title: "Avocado Toast Special"
  },
  {
    id: 8,
    category: "food",
    src: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Freshly baked pastries",
    title: "Morning Pastry Selection"
  },
  {
    id: 9,
    category: "food",
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Salad bowl with fresh ingredients",
    title: "Seasonal Harvest Bowl"
  },
  {
    id: 10,
    category: "events",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee tasting event",
    title: "Monthly Coffee Tasting"
  },
  {
    id: 11,
    category: "events",
    src: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Live music performance",
    title: "Friday Night Music"
  },
  {
    id: 12,
    category: "events",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Barista workshop",
    title: "Barista Workshop"
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<null | typeof galleryImages[0]>(null);
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey through our café, food, and events"
        image="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-primary/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <div className="relative group h-72">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <h3 className="text-white font-playfair text-xl font-semibold px-4 text-center">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-background rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="w-full max-h-[80vh] object-contain"
            />
            
            <div className="p-4 bg-background">
              <h3 className="font-playfair text-xl font-bold text-primary">{lightboxImage.title}</h3>
              <p className="text-foreground/80">{lightboxImage.alt}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
