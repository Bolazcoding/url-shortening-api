import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShortenSection from "../components/ShortenSection";

function Homepage() {
  return (
    <div className="maxWidth mx-auto mt-8">
      <Header />
      <HeroSection />
      <main>
        <ShortenSection />
      </main>
    </div>
  );
}
export default Homepage;
