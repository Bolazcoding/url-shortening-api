import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="maxWidth flex items-center justify-between mx-auto mt-20">
      <HeroDetails />
      <HeroImage />
    </section>
  );
}
export default HeroSection;
