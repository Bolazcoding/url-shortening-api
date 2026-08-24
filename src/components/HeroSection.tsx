import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="page-container flex flex-col-reverse items-center gap-9 pt-8 pb-40 text-center lg:flex-row lg:gap-8 lg:pt-20 lg:pb-36 lg:text-left">
      <HeroDetails />
      <HeroImage />
    </section>
  );
}
export default HeroSection;
