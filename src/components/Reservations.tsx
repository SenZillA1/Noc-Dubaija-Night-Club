import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, Clock, Star, Phone } from "lucide-react";

const Reservations = () => {
  const [selectedPackage, setSelectedPackage] = useState("premium");

  const packages = [
    {
      id: "standard",
      name: "Standard Table",
      price: "AED 3,000",
      features: ["Table for 6 guests", "2 Premium bottles", "Dedicated server", "Dance floor access"],
      popular: false
    },
    {
      id: "premium",
      name: "Premium VIP",
      price: "AED 8,000", 
      features: ["Private VIP booth", "Table for 10 guests", "4 Premium bottles", "Personal concierge", "Priority entry", "Complimentary appetizers"],
      popular: true
    },
    {
      id: "platinum",
      name: "Platinum Suite",
      price: "AED 15,000",
      features: ["Private luxury suite", "Table for 15 guests", "Premium champagne selection", "Personal chef service", "Private entrance", "Helicopter transfer available"],
      popular: false
    }
  ];

  return (
    <section id="reservations" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Reserve Your Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your table at Dubai's most exclusive nightclub and join the elite circle of Noć Dubaija
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative p-6 cursor-pointer transition-luxury ${
                selectedPackage === pkg.id 
                  ? 'border-primary/60 shadow-gold bg-card/80' 
                  : 'glass border-primary/20 hover:border-primary/40'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-gold px-4 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold mb-2 text-primary">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">per night</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {selectedPackage === pkg.id && (
                <div className="absolute -inset-0.5 bg-gradient-gold opacity-20 rounded-lg blur-sm" />
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 glass border-primary/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="glass border-primary/20 focus:border-primary/50" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block">Phone Number</Label>
                <Input id="phone" placeholder="+971 XX XXX XXXX" className="glass border-primary/20 focus:border-primary/50" />
              </div>
              <div>
                <Label htmlFor="date" className="text-foreground mb-2 block">Preferred Date</Label>
                <Input id="date" type="date" className="glass border-primary/20 focus:border-primary/50" />
              </div>
              <div>
                <Label htmlFor="guests" className="text-foreground mb-2 block">Number of Guests</Label>
                <Input id="guests" type="number" placeholder="6" className="glass border-primary/20 focus:border-primary/50" />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="requests" className="text-foreground mb-2 block">Special Requests</Label>
              <textarea 
                id="requests"
                placeholder="Birthday celebration, dietary requirements, etc."
                className="w-full p-3 glass border border-primary/20 focus:border-primary/50 rounded-md bg-transparent text-foreground placeholder:text-muted-foreground resize-none h-24"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="reservation" size="lg" className="flex-1">
                <Calendar className="w-5 h-5" />
                Reserve Now
              </Button>
              <Button variant="vip" size="lg">
                <Phone className="w-5 h-5" />
                Call +971 4 XXX XXXX
              </Button>
            </div>

            <div className="mt-6 p-4 glass rounded-lg border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Reservation Policy</span>
              </div>
              <p className="text-xs text-muted-foreground">
                All reservations require 48-hour advance notice. A deposit of 50% is required to secure your booking. 
                Dress code strictly enforced - smart formal attire required.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reservations;