import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="flex items-center gap-9 mt-20">
      <HeroDetails />
      <HeroImage />
    </section>
  );
}
export default HeroSection;
