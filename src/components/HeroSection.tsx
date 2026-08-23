import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="maxWidth flex items-center gap-9 mx-auto mt-20">
      <HeroDetails />
      <HeroImage />
    </section>
  );
}
export default HeroSection;
