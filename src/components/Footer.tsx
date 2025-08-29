import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import nocLogo from "@/assets/noc-dubaija-logo-transparent.png";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" }
  ];

  const quickLinks = [
    { name: "VIP Memberships", href: "#vip" },
    { name: "Event Booking", href: "#reservations" },
    { name: "Private Parties", href: "#contact" },
    { name: "Corporate Events", href: "#contact" }
  ];

  const operatingHours = [
    { day: "Tuesday - Thursday", hours: "10:00 PM - 3:00 AM" },
    { day: "Friday - Saturday", hours: "10:00 PM - 4:00 AM" },
    { day: "Sunday - Monday", hours: "Closed" }
  ];

  return (
    <footer className="relative py-20 px-6 border-t border-primary/20">
      <div className="absolute inset-0 arabic-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={nocLogo} alt="Noć Dubaija" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Experience the pinnacle of Dubai's nightlife at Noć Dubaija, where luxury meets entertainment 
              in the heart of the city's most prestigious district.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">DIFC, Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">reservations@nocdubaija.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-luxury text-xl font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-luxury"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-luxury text-xl font-semibold mb-6 text-primary">Operating Hours</h3>
            <ul className="space-y-3">
              {operatingHours.map((schedule, index) => (
                <li key={index} className="text-sm">
                  <div className="text-foreground font-medium">{schedule.day}</div>
                  <div className="text-muted-foreground">{schedule.hours}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="holographic"
                  size="icon"
                  className="rounded-full hover:shadow-neon"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                Follow us for exclusive events and VIP offers
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 Noć Dubaija. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border-primary/20">
            <h3 className="font-luxury text-2xl font-semibold mb-4 text-primary">
              Join the Elite Circle
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive exclusive invitations to private events and VIP experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass border border-primary/20 focus:border-primary/50 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-neon-purple rounded-full animate-float opacity-40" />
      <div className="absolute top-20 right-20 w-2 h-2 bg-neon-turquoise rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
    </footer>
  );
};

export default Footer;