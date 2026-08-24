import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShortenSection from "../components/ShortenSection";
import StartedSection from "../components/StartedSection";
import StatisticsSection from "../components/StatisticsSection";

function Homepage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <main>
        <ShortenSection />
        <StatisticsSection />
        <StartedSection />
      </main>
      <Footer />
    </div>
  );
}
export default Homepage;
