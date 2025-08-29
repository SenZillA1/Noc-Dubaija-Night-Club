import Hero from "@/components/Hero";
import VipExperience from "@/components/VipExperience";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VipExperience />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
};

export default Index;
