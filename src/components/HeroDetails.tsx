import Button from "./Button";

function HeroDetails() {
  return (
    <div className="w-full lg:w-[52%]">
      <h1 className="text-[2.6rem] leading-[1.14] font-bold tracking-[-1.5px] text-neutralgray-900 sm:text-5xl lg:text-7xl">
        More than just shorter links
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-neutralgray-500 lg:mx-0 lg:mt-2 lg:text-xl lg:leading-8">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button className="bg-primaryblue-400 mt-7 py-3 px-8">Get Started</Button>
    </div>
  );
}

export default HeroDetails;
