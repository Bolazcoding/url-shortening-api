import StatisticsDetails from "./StatisticsDetails";

function StatisticsSection() {
  return (
    <section className="bg-neutralgray-400/20 px-6 pb-20 pt-20 lg:px-0 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold text-neutralgray-950 lg:text-4xl">
          Advanced Statistics
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutralgray-500 lg:text-base">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="page-container relative mt-24 flex flex-col gap-20 lg:mt-24 lg:min-h-[21rem] lg:flex-row lg:items-start lg:gap-8">
        <StatisticsDetails
          img="/images/icon-brand-recognition.svg"
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          type="start"
        />

        <StatisticsDetails
          img="/images/icon-detailed-records.svg"
          heading="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          type="center"
        />
        <StatisticsDetails
          img="/images/icon-fully-customizable.svg"
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          type="end"
        />
        <div className="absolute left-1/2 top-0 z-0 h-full w-2 -translate-x-1/2 bg-primaryblue-400 lg:left-[16.66%] lg:top-1/2 lg:h-2 lg:w-[66.66%] lg:-translate-x-0 lg:-translate-y-1/2" />
      </div>
    </section>
  );
}
export default StatisticsSection;
