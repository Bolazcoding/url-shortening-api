import StatisticsDetails from "./StatisticsDetails";

function StatisticsSection() {
  return (
    <section className=" bg-neutralgray-400/20 pt-15 px-28 pb-22">
      <div className="maxWidth mx-auto text-center px-50">
        <h2 className="text-4xl text-neutralgray-950 font-bold">
          Advanced Statistics
        </h2>
        <p className="text-neutralgray-500 mt-3">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="max-md:grid-cols-1 max-md:gap-36 relative grid min-h-[35rem] grid-cols-3 gap-8 mt-20">
        <StatisticsDetails
          img="./images/icon-brand-recognition.svg"
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          type="start"
        />

        <StatisticsDetails
          img="./images/icon-detailed-records.svg"
          heading="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          type="center"
        />
        <StatisticsDetails
          img="./images/icon-fully-customizable.svg"
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          type="end"
        />
        <div className="max-md:w-[0.8rem] max-md:h-[85%] max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2 absolute left-[13rem] top-1/2 h-[0.8rem] w-[75%] bg-[#2BD0D0]"></div>
      </div>
    </section>
  );
}
export default StatisticsSection;
