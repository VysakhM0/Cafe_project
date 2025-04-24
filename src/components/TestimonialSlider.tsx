
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  role?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    quote: "Café Analog has become my second home. The coffee is outstanding, and the atmosphere is perfect for both working and relaxing.",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    quote: "Their seasonal drinks are something I look forward to every few months. The staff is knowledgeable and always ready with great recommendations.",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Sarah Williams",
    quote: "The pastries are absolutely divine! Paired with their signature house blend, it's the perfect way to start my day.",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "David Rodriguez",
    quote: "I've tried many cafés in town, but Café Analog consistently delivers the best espresso. The ambiance is unmatched.",
    role: "Coffee Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "Lisa Johnson",
    quote: "The outdoor seating area is my favorite spot to enjoy brunch on weekends. Their attention to detail makes every visit special.",
    role: "Weekend Regular",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  }
];

const TestimonialSlider = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    setIsLoaded(true);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel
        opts={{ loop: true, align: "center" }}
        setApi={setApi}
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 h-full">
              <div className="p-1 h-full">
                <Card className="border border-border/40 shadow-sm bg-card/80 backdrop-blur-sm h-full">
                  <CardContent className="flex flex-col p-6 h-full">
                    <div className="mb-4 text-primary/20">
                      <Quote className="h-10 w-10" />
                    </div>
                    <p className="italic text-foreground/80 mb-6">{testimonial.quote}</p>
                    <div className="mt-auto flex items-center">
                      {testimonial.image && (
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                        {testimonial.role && (
                          <p className="text-sm text-foreground/60">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 py-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary w-4" : "bg-primary/20"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="hidden md:flex -left-5 border-border/40 shadow-sm" />
        <CarouselNext className="hidden md:flex -right-5 border-border/40 shadow-sm" />
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
