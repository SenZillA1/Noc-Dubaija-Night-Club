import { Button } from "@/components/ui/button";
import { Calendar, Star, MapPin } from "lucide-react";
import dubaiSkyline from "@/assets/dubai-skyline-night.jpg";
import nocLogo from "@/assets/noc-dubaija-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dubaiSkyline})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Arabic Pattern Overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-20" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={nocLogo} alt="Noć Dubaija" className="h-12 w-auto animate-float" />
          </div>
          <div className="hidden md:flex items-center space-x-8 glass rounded-full px-6 py-3">
            <a href="#vip" className="text-foreground hover:text-primary transition-luxury">VIP Experience</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-luxury">Gallery</a>
            <a href="#reservations" className="text-foreground hover:text-primary transition-luxury">Reservations</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-luxury">Contact</a>
          </div>
          <Button variant="vip" size="lg">
            <Calendar className="w-4 h-4" />
            Book VIP Table
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="font-luxury text-6xl md:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
            Noć Dubaija
          </h1>
          <p className="font-luxury text-xl md:text-2xl text-secondary mb-4">
            Ultra-Luxury Nightclub Experience
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where Dubai's elite gather for an unprecedented night of luxury, sophistication, and exclusive entertainment in the heart of the city's most prestigious district.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="reservation" size="lg" className="px-8 py-4">
            <Star className="w-5 h-5" />
            Reserve Your Table
          </Button>
          <Button variant="holographic" size="lg" className="px-8 py-4">
            <MapPin className="w-5 h-5" />
            Virtual Tour
          </Button>
        </div>

        {/* Location Badge */}
        <div className="mt-12 flex justify-center animate-slide-up">
          <div className="glass rounded-full px-6 py-3 flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Downtown Dubai • DIFC</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-purple rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-neon-turquoise rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-pink rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;