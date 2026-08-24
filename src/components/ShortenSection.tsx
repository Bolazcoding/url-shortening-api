import { useEffect, useState } from "react";
import Button from "./Button";
import ShortenLinks from "./ShortenLinks";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
};

type ShortenResponse = {
  originalUrl?: string;
  shortUrl?: string;
  error?: string;
};

function ShortenSection() {
  const shortenedData = localStorage.getItem("shortenedLinks");

  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinksProps[]>(
    JSON.parse(shortenedData!) || [],
  );

  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleShorten = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    setError("");
    setCopiedLink(null);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(url.trim());
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      // const response: Response = await fetch(
      //   "https://cleanuri.com/api/v1/shorten",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //     body: new URLSearchParams({
      //       url: url.trim(),
      //     }),
      //   },
      // );

      // const response = await fetch(
      //   `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url.trim())}`,
      // );

      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
        }),
      });

      // const response = await fetch("http://localhost:5000/api/shorten", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     url: url.trim(),
      //   }),
      // });

      // const data = await response.text();
      // const data = await response.text();
      const data: ShortenResponse = await response.json();

      if (!response.ok || !data.shortUrl) {
        throw new Error("Unable to shorten this URL.");
      }

      // const shortUrl = data.trim();

      // const newData = {
      //   longLink: url.trim(),
      //   shortLink: shortUrl,
      // };

      const newData = {
        longLink: data.originalUrl!,
        shortLink: data.shortUrl,
      };

      setShortenedLinks((prevLinks) => [...prevLinks, newData]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  function handleDelete(index: number) {
    setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  }

  const handleCopy = async (link: string): Promise<void> => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);

      setCopiedLink(link);
      setError("");

      setTimeout(() => {
        setCopiedLink((currentLink) =>
          currentLink === link ? null : currentLink,
        );
      }, 2000);
    } catch {
      setError("Failed to copy the shortened URL.");
    }
  };

  return (
    <section className="relative z-10 -mt-20 bg-linear-to-b from-white from-1/2 to-neutralgray-400/20 lg:-mt-23">
      <div className="page-container mx-auto">
        <form
          onSubmit={handleShorten}
          className="relative flex flex-col gap-4 rounded-xl bg-primarypurple-950 bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-no-repeat p-6 lg:flex-row lg:items-start lg:gap-6 lg:bg-[url('/images/bg-shorten-desktop.svg')] lg:p-12"
        >
          <div className="w-full">
            <input
              aria-invalid={Boolean(error)}
              className={`w-full rounded-md bg-white px-4 py-3 text-sm text-neutralgray-900 outline-none lg:px-6 lg:py-4 lg:text-lg ${error ? "ring-3 ring-secondaryred-400 placeholder:text-secondaryred-400" : ""}`}
              id="url"
              type="text"
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              placeholder="Shorten a link here..."
            />
            {error && (
              <p className="mt-1 text-xs italic text-secondaryred-400 lg:text-sm">
                {error}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="bg-primaryblue-400 w-full shrink-0 rounded-md py-3 text-sm lg:w-auto lg:min-w-40 lg:py-4 lg:text-lg"
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </Button>
        </form>

        {shortenedLinks.length > 0 && (
          <section className="pb-10">
            {shortenedLinks.map((link, index) => (
              <ShortenLinks
                key={link.shortLink}
                shortUrl={link.shortLink}
                originalUrl={link.longLink}
                index={index}
                error={error}
                copied={copiedLink === link.shortLink}
                onCopyLink={handleCopy}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </section>
        )}
      </div>
    </section>
  );
}
export default ShortenSection;
