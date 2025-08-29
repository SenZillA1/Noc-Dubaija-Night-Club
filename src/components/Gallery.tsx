import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, Heart } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Main Dance Floor",
      description: "State-of-the-art sound system and LED installations",
      views: "2.1K",
      likes: "486"
    },
    {
      id: 2,
      type: "image", 
      title: "Rooftop Terrace",
      description: "Open-air luxury with Dubai skyline panorama",
      views: "1.8K",
      likes: "392"
    },
    {
      id: 3,
      type: "video",
      title: "Saturday Night Vibes",
      description: "Experience the energy of Dubai's hottest nightclub",
      views: "5.2K",
      likes: "823"
    },
    {
      id: 4,
      type: "image",
      title: "Private Dining",
      description: "Michelin-starred cuisine in an intimate setting",
      views: "1.2K",
      likes: "267"
    },
    {
      id: 5,
      type: "image",
      title: "Gold Lounge",
      description: "Ultra-exclusive private lounge for VIP members",
      views: "3.4K",
      likes: "891"
    },
    {
      id: 6,
      type: "video",
      title: "Celebrity Performances",
      description: "World-renowned artists grace our stage",
      views: "8.7K",
      likes: "1.5K"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step inside Dubai's most exclusive nightclub through our immersive visual experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={item.id} className="group relative overflow-hidden glass border-primary/20 hover:border-primary/40 transition-luxury cursor-pointer">
              <div className="aspect-video bg-gradient-dark relative overflow-hidden">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 text-primary animate-pulse" />
                  ) : (
                    <Eye className="w-12 h-12 text-primary animate-pulse" />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-luxury" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    {item.type === "video" ? "VIDEO" : "PHOTO"}
                  </span>
                </div>

                {/* Stats */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="glass rounded-full px-2 py-1 flex items-center space-x-1">
                    <Eye className="w-3 h-3 text-neon-turquoise" />
                    <span className="text-xs text-foreground">{item.views}</span>
                  </div>
                  <div className="glass rounded-full px-2 py-1 flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-neon-pink" />
                    <span className="text-xs text-foreground">{item.likes}</span>
                  </div>
                </div>

                {/* Hover Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-luxury">
                    <Button variant="holographic" size="lg" className="rounded-full">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-luxury text-lg font-semibold mb-2 text-primary group-hover:text-secondary transition-luxury">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-neon opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-luxury" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;