import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Wine, Shield, Sparkles } from "lucide-react";
import vipInterior from "@/assets/vip-interior.jpg";

const VipExperience = () => {
  const vipFeatures = [
    {
      icon: Crown,
      title: "Exclusive VIP Lounges",
      description: "Private luxury lounges with panoramic Dubai skyline views"
    },
    {
      icon: Wine,
      title: "Premium Bottle Service",
      description: "Curated selection of the world's finest champagnes and spirits"
    },
    {
      icon: Shield,
      title: "Personal Concierge",
      description: "Dedicated VIP host ensuring your every need is met"
    },
    {
      icon: Sparkles,
      title: "Celebrity Treatment",
      description: "Red carpet entrance and paparazzi-style photography"
    }
  ];

  return (
    <section id="vip" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            VIP Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your night with our exclusive VIP packages designed for Dubai's most discerning clientele
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* VIP Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={vipInterior} 
                alt="VIP Interior" 
                className="w-full h-96 object-cover transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 glass rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-primary">Starting from AED 5,000</span>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-gold opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-luxury" />
          </div>

          {/* VIP Features */}
          <div className="space-y-6">
            {vipFeatures.map((feature, index) => (
              <Card key={index} className="p-6 glass border-primary/20 hover:border-primary/40 transition-luxury hover:shadow-gold group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-gold rounded-xl shadow-gold">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-luxury text-xl font-semibold mb-2 text-primary group-hover:text-secondary transition-luxury">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="pt-6">
              <Button variant="vip" size="lg" className="w-full sm:w-auto">
                <Crown className="w-5 h-5" />
                Explore VIP Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipExperience;