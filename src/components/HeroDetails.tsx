import Button from "./Button";

function HeroDetails() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-neutralgray-900 leading-18">
        More than just shorter links
      </h1>
      <p className="text-xl text-neutralgray-500 font-medium leading-8">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button className="mt-7 py-2 px-8">Get Started</Button>
    </div>
  );
}

export default HeroDetails;
