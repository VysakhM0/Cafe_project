import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Minus, ShoppingCart, CheckCircle, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const categories = [
  { id: "popular", name: "Popular Items" },
  { id: "coffee", name: "Coffee & Espresso" },
  { id: "food", name: "Food" },
  { id: "pastries", name: "Pastries" },
  { id: "beverages", name: "Other Beverages" },
];

const menuItems = [
  {
    id: 1,
    name: "House Blend Coffee",
    description: "Our signature blend with notes of chocolate, caramel and hazelnut.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["popular", "coffee"],
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety microfoam.",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["popular", "coffee"],
  },
  {
    id: 3,
    name: "Avocado Toast",
    description: "Freshly mashed avocado on toasted sourdough with cherry tomatoes, feta and microgreens.",
    price: 8.95,
    image: "https://images.unsplash.com/photo-1603046891744-76146356a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["popular", "food"],
  },
  {
    id: 4,
    name: "Espresso",
    description: "A rich, full-bodied shot of our house espresso blend.",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1510707577719-ae7f89c4f5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["coffee"],
  },
  {
    id: 5,
    name: "Café Latte",
    description: "Our signature espresso with steamed milk and a light layer of foam.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["coffee"],
  },
  {
    id: 6,
    name: "Mocha",
    description: "Espresso with steamed milk, chocolate syrup and whipped cream.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1560555367-42926bc5ab87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["coffee"],
  },
  {
    id: 7,
    name: "Breakfast Sandwich",
    description: "Free-range egg, aged cheddar, and smoked bacon on a freshly baked croissant.",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1600348862121-7c284f879e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["food"],
  },
  {
    id: 8,
    name: "Mediterranean Bowl",
    description: "Quinoa, roasted vegetables, hummus, feta, olives, and tahini dressing.",
    price: 10.95,
    image: "https://images.unsplash.com/photo-1543339226-95b2174de601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["food"],
  },
  {
    id: 9,
    name: "Butter Croissant",
    description: "Traditional French-style croissant with a flaky, layered texture.",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["popular", "pastries"],
  },
  {
    id: 10,
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with rich dark chocolate.",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["pastries"],
  },
  {
    id: 11,
    name: "Fresh Lemonade",
    description: "Housemade with freshly squeezed lemons and a hint of mint.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1575596510825-f748919564da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["beverages"],
  },
  {
    id: 12,
    name: "Chai Tea Latte",
    description: "Spiced black tea with steamed milk and a touch of honey.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1586082207122-af65626b3ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    categories: ["beverages"],
  },
];

interface OrderFormProps {
  onComplete: () => void;
}

const OrderForm = ({ onComplete }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupTime: "",
    notes: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  
  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
    
    for (let i = 0; i < 12; i++) {
      const time = new Date(now.getTime() + i * 15 * 60000);
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
      options.push(timeString);
    }
    
    return options;
  };
  
  const timeOptions = generateTimeOptions();
  
  return (
    <div className="bg-card p-8 rounded-lg shadow-sm animate-fade-up">
      <h2 className="font-playfair text-2xl font-bold text-primary mb-6 flex items-center">
        <Coffee size={24} className="mr-2 text-accent" />
        Pickup Details
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="animate-fade-up delay-100">
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
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          
          <div className="animate-fade-up delay-200">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
        
        <div className="animate-fade-up delay-300">
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
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        
        <div className="animate-fade-up delay-400">
          <label htmlFor="pickupTime" className="block text-sm font-medium text-foreground mb-1">
            Pickup Time
          </label>
          <select
            id="pickupTime"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">Select a pickup time</option>
            {timeOptions.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
        
        <div className="animate-fade-up delay-500">
          <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1">
            Special Instructions (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-md font-medium hover:bg-accent/90 transition-colors checkout-button"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
};

const OrderSuccess = () => {
  return (
    <div className="text-center py-8 animate-scale-in">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 animate-pulse-soft" />
      </div>
      <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
        Order Confirmed!
      </h2>
      <p className="text-foreground/80 mb-6 max-w-md mx-auto">
        Your order has been received and will be ready for pickup at your selected time. You will receive a confirmation email shortly.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
      </Link>
    </div>
  );
};

const Order = () => {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  const [orderStep, setOrderStep] = useState<"menu" | "checkout" | "success">("menu");
  const [animateItems, setAnimateItems] = useState(false);
  
  useEffect(() => {
    setAnimateItems(true);
  }, []);
  
  useEffect(() => {
    setAnimateItems(false);
    setTimeout(() => setAnimateItems(true), 100);
  }, [activeCategory]);
  
  const filteredItems = menuItems.filter(item => item.categories.includes(activeCategory));
  
  const addToCart = (itemId: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === itemId);
      
      if (existingItem) {
        return prev.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id: itemId, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter(item => item.id !== itemId);
      }
    });
  };
  
  const getCartQuantity = (itemId: number) => {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      const menuItem = menuItems.find(item => item.id === cartItem.id);
      return total + (menuItem ? menuItem.price * cartItem.quantity : 0);
    }, 0);
  };
  
  const proceedToCheckout = () => {
    setOrderStep("checkout");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const completeOrder = () => {
    setOrderStep("success");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Order Online" 
        subtitle="Order ahead for pickup and skip the line"
        image="https://images.unsplash.com/photo-1560704429-05c3644204e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
      />
      
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {orderStep === "menu" && (
            <>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 transform ${
                      activeCategory === category.id 
                        ? 'bg-primary text-primary-foreground scale-105 shadow-md'
                        : 'bg-secondary hover:bg-primary/10 hover:scale-105'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`menu-card bg-card rounded-lg overflow-hidden shadow-sm ${
                      animateItems ? 'animate-fade-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-40 overflow-hidden">
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
                        <span className="menu-card-price text-accent font-medium">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-foreground/80 mb-4">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        {getCartQuantity(item.id) > 0 ? (
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="bg-primary/10 hover:bg-primary/20 transition-colors p-2 rounded-full"
                              aria-label="Remove from cart"
                            >
                              <Minus size={18} className="text-primary" />
                            </button>
                            <span className="font-medium">{getCartQuantity(item.id)}</span>
                            <button 
                              onClick={() => addToCart(item.id)}
                              className="bg-primary/10 hover:bg-primary/20 transition-colors p-2 rounded-full"
                              aria-label="Add to cart"
                            >
                              <Plus size={18} className="text-primary" />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(item.id)}
                            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:scale-105"
                          >
                            <Plus size={16} />
                            <span>Add to Order</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="fixed bottom-0 left-0 right-0 bg-card shadow-lg p-4 border-t border-border z-40 animate-slide-in-right">
                <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium block">{getTotalItems()} item(s)</span>
                      <span className="font-bold text-lg text-primary block md:inline md:ml-2">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={proceedToCheckout}
                    className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-md animate-pulse-soft"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
          
          {orderStep === "checkout" && (
            <div className="grid md:grid-cols-3 gap-8 checkout-layout">
              <div className="md:col-span-2">
                <OrderForm onComplete={completeOrder} />
              </div>
              
              <div className="checkout-summary">
                <div className="bg-card p-6 rounded-lg shadow-sm sticky top-4 animate-fade-in">
                  <h2 className="font-playfair text-2xl font-bold text-primary mb-6 flex items-center">
                    <ShoppingCart size={24} className="mr-2 text-accent" />
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin">
                    {cart.map((cartItem, index) => {
                      const item = menuItems.find(i => i.id === cartItem.id);
                      if (!item) return null;
                      
                      return (
                        <div 
                          key={item.id} 
                          className="flex justify-between items-center p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-12 h-12 object-cover rounded-md"
                            />
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-foreground/70">Qty: {cartItem.quantity}</p>
                            </div>
                          </div>
                          <span className="font-medium">
                            ${(item.price * cartItem.quantity).toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Subtotal</span>
                      <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Tax</span>
                      <span className="font-medium">${(getTotalPrice() * 0.0825).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg text-primary mt-4 pt-4 border-t border-border">
                      <span>Total</span>
                      <span>${(getTotalPrice() * 1.0825).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button 
                      onClick={() => setOrderStep("menu")}
                      className="flex items-center justify-center w-full bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {orderStep === "success" && <OrderSuccess />}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Order;
