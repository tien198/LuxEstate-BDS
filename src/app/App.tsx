import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { StatsSection } from "./components/StatsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <FeaturedProjects />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
