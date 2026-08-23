import { useState } from "react";
import Button from "./Button";
import ShortenLinks from "./ShortenedLinks";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
};

interface CleanUriResponse {
  result_url?: string;
  error?: string;
}

function ShortenSection() {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinksProps[]>(
    [],
  );

  const [url, setUrl] = useState<string>("");
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  console.log(shortUrl, originalUrl);

  const handleShorten = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    setError("");
    setShortUrl("");
    setOriginalUrl("");
    setCopied(false);

    // Check if input is empty
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    // Validate URL
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

      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${longLink}`,
      );

      // const data = await response.text();

      const data: CleanUriResponse = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Unable to shorten this URL.");
      }

      if (!data.result_url) {
        throw new Error("Could not return a shortened URL.");
      }

      const newData = {
        longLink: url.trim(),
        shortLink: data.result_url,
      };

      setOriginalUrl(url.trim());
      setShortUrl(data.result_url);

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

  const handleCopy = async (): Promise<void> => {
    if (!shortUrl) return;

    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopied(true);
      setError("");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError("Failed to copy the shortened URL.");
    }
  };

  return (
    <section className="maxWidth mx-auto ">
      <section className="bg-primarypurple-950 p-11 rounded-2xl mt-14">
        <form onSubmit={handleShorten} className="flex items-center gap-6">
          <input
            className="bg-white text-neutralgray-500 font-medium px-5 py-4 rounded-lg w-full"
            id="url"
            type="text"
            value={url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            placeholder="Shorten a link here..."
          />
          <Button
            type="submit"
            disabled={loading}
            className="text-sm py-2 px-8 rounded-lg"
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </Button>
        </form>
      </section>

      <section className="space-y-7 pt-10">
        {shortenedLinks.map((link) => (
          <ShortenLinks
            shortUrl={link.shortLink}
            originalUrl={link.longLink}
            error={error}
            copied={copied}
            onCopyLink={handleCopy}
          />
        ))}
      </section>
    </section>
  );
}
export default ShortenSection;
