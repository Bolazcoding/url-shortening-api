type ShortenedLinksProps = {
  shortUrl: string;
  originalUrl: string;
  error: string;
  copied: boolean;
  onCopyLink: (link: string) => void;
};

function ShortenLinks({
  shortUrl,
  originalUrl,
  error,
  copied,
  onCopyLink,
}: ShortenedLinksProps) {
  return (
    <div className="text-black">
      {shortUrl}: {originalUrl}
    </div>
  );
}
export default ShortenLinks;
