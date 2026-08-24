import Button from "./Button";

function StartedSection() {
  return (
    <section className="bg-primarypurple-950 bg-[url('/images/bg-boost-mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('/images/bg-boost-desktop.svg')]">
      <div className="py-22 text-center lg:py-14">
        <h3 className="text-2xl font-bold text-white lg:text-3xl">
          Boost your links today
        </h3>
        <Button className="bg-primaryblue-400 mt-5 px-8 py-3">
          Get Started
        </Button>
      </div>
    </section>
  );
}
export default StartedSection;
