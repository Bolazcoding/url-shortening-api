type StatisticsDetailsProps = {
  img: string;
  heading: string;
  text: string;
  type: "start" | "center" | "end";
};

function StatisticsDetails({
  img,
  heading,
  text,
  type,
}: StatisticsDetailsProps) {
  return (
    <div
      className={`z-10 flex w-full flex-col max-lg:items-center rounded-md bg-white px-7 pb-10 text-center lg:px-8 lg:pb-10 lg:text-left ${
        type === "start"
          ? "lg:mt-0"
          : type === "center"
            ? "lg:mt-11"
            : "lg:mt-22"
      }`}
    >
      <img
        src={img}
        alt={heading}
        className="-mt-12 rounded-full bg-primarypurple-950 p-6 lg:self-start"
      />

      <h3 className="pt-8 text-xl font-bold text-neutralgray-900">{heading}</h3>
      <p className="pt-4 text-sm leading-6 text-neutralgray-500">{text}</p>
    </div>
  );
}

export default StatisticsDetails;
