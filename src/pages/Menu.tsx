import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Coffee, Utensils, CakeSlice, Candy, Wine } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Menu data
const menuCategories = [
  { id: "coffee", name: "Coffee & Espresso", icon: Coffee },
  { id: "food", name: "Food", icon: Utensils },
  { id: "pastries", name: "Pastries", icon: CakeSlice },
  { id: "desserts", name: "Desserts", icon: Candy },
  { id: "beverages", name: "Other Beverages", icon: Wine },
];

const menuItems = {
  coffee: [
    {
      name: "House Blend Coffee",
      description: "Our signature blend with notes of chocolate, caramel and hazelnut.",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Espresso",
      description: "A rich, full-bodied shot of our house espresso blend.",
      price: "$2.75",
      image: "https://images.unsplash.com/photo-1510707577719-ae7f89c4f5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and velvety microfoam.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Café Latte",
      description: "Our signature espresso with steamed milk and a light layer of foam.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mocha",
      description: "Espresso with steamed milk, chocolate syrup and whipped cream.",
      price: "$4.95",
      image: "https://images.unsplash.com/photo-1560555367-42926bc5ab87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cold Brew",
      description: "Slow-steeped for 18 hours for a smooth, rich flavor.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ],
  food: [
    {
      name: "Avocado Toast",
      description: "Freshly mashed avocado on toasted sourdough with cherry tomatoes, feta and microgreens.",
      price: "$8.95",
      image: "https://images.unsplash.com/photo-1603046891744-76146356a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Breakfast Sandwich",
      description: "Free-range egg, aged cheddar, and smoked bacon on a freshly baked croissant.",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1600348862121-7c284f879e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mediterranean Bowl",
      description: "Quinoa, roasted vegetables, hummus, feta, olives, and tahini dressing.",
      price: "$10.95",
      image: "https://images.unsplash.com/photo-1543339226-95b2174de601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Grilled Cheese",
      description: "Three-cheese blend on artisan sourdough, served with tomato soup.",
      price: "$9.50",
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ],
  pastries: [
    {
      name: "Butter Croissant",
      description: "Traditional French-style croissant with a flaky, layered texture.",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with rich dark chocolate.",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Blueberry Muffin",
      description: "Moist muffin loaded with fresh blueberries and topped with streusel.",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Cinnamon Roll",
      description: "Freshly baked with a gooey center and cream cheese frosting.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1605188229555-681e94a11e34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1593179354420-061d99822bd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "New York Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust, topped with seasonal berries.",
      price: "$6.95",
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Chocolate Brownie",
      description: "Rich, fudgy brownie served warm with vanilla ice cream.",
      price: "$5.75",
      image: "https://images.unsplash.com/photo-1589217157232-464b505b197f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ],
  beverages: [
    {
      name: "Fresh Lemonade",
      description: "Housemade with freshly squeezed lemons and a hint of mint.",
      price: "$3.95",
      image: "https://images.unsplash.com/photo-1575596510825-f748919564da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Chai Tea Latte",
      description: "Spiced black tea with steamed milk and a touch of honey.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1586082207122-af65626b3ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Matcha Latte",
      description: "Premium grade matcha whisked with steamed milk of your choice.",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1594631336804-b678cbfdb38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Italian Soda",
      description: "Sparkling water with your choice of fruit syrup and a splash of cream.",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1535518125090-cb88f3c54335?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [animateItems, setAnimateItems] = useState(false);
  
  useEffect(() => {
    setAnimateItems(true);
  }, []);
  
  useEffect(() => {
    setAnimateItems(false);
    setTimeout(() => setAnimateItems(true), 100);
  }, [activeCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Our Menu" 
        subtitle="Quality ingredients, expertly crafted drinks and delicious food"
        image="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
      />
      
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 transform ${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground scale-105 shadow-md'
                    : 'bg-card hover:bg-primary/10 hover:scale-105'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div 
                key={index} 
                className={`menu-card bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ${
                  animateItems ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="menu-card-image w-full h-full object-cover"
                  />
                </div>
                <div className="menu-card-content p-6">
                  <div className="flex justify-between items-start mb-2">
                    <HoverCard>
                      <HoverCardTrigger>
                        <h3 className="font-playfair text-xl font-bold text-primary cursor-pointer">{item.name}</h3>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-card p-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-32 object-cover rounded-md mb-2"
                        />
                        <p className="text-sm">{item.description}</p>
                      </HoverCardContent>
                    </HoverCard>
                    <span className="menu-card-price text-accent font-medium">{item.price}</span>
                  </div>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6 text-center animate-fade-in">Dietary Information</h2>
          <div className="bg-card p-8 rounded-lg shadow-sm animate-scale-in">
            <p className="text-foreground/80 mb-4">
              We're committed to accommodating various dietary preferences and restrictions. Many of our menu items can be customized to suit your needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                <h3 className="font-semibold text-primary mb-2">Milk Alternatives</h3>
                <p className="text-foreground/80">
                  All of our coffee drinks can be made with your choice of milk: whole, skim, oat, almond, or soy at no extra charge.
                </p>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                <h3 className="font-semibold text-primary mb-2">Dietary Restrictions</h3>
                <p className="text-foreground/80">
                  Please inform our staff of any allergies or dietary restrictions. We offer gluten-free, vegan, and vegetarian options.
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

export default Menu;
