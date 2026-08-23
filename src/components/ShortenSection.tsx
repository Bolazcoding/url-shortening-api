import Button from "./Button";

function ShortenSection() {
  return (
    <section className="maxWidth mx-auto bg-primarypurple-950 p-11 rounded-2xl mt-14">
      <section>
        <form className="flex items-center gap-6">
          <input
            className="bg-white text-neutralgray-500 font-medium px-5 py-4 rounded-lg w-full"
            type="text"
            placeholder="Shorten a link here..."
          />
          <Button className="text-sm py-2 px-8 rounded-lg">Shorten It!</Button>
        </form>
      </section>
    </section>
  );
}
export default ShortenSection;
