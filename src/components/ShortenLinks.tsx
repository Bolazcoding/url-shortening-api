import Button from "./Button";

type ShortenedLinksProps = {
  shortUrl: string;
  originalUrl: string;
  error: string;
  copied: boolean;
  index: number;
  onDelete: (index: number) => void;
  onCopyLink: (link: string) => void;
};

function ShortenLinks({
  shortUrl,
  originalUrl,
  error,
  copied,
  onCopyLink,
  onDelete,
  index,
}: ShortenedLinksProps) {
  return (
    <div className="text-neutralgray-900 pt-5">
      <div className="flex flex-col gap-3 rounded-md bg-white px-4 py-3 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutralgray-900">
          {originalUrl}
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col gap-2 border-t border-neutralgray-400/40 pt-3 lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:pt-0">
          <p className="text-primaryblue-400">{shortUrl}</p>

          <Button
            className={`${copied ? "bg-neutralgray-950" : "bg-primaryblue-400"} rounded-md px-8 py-2.5`}
            onClick={() => onCopyLink(shortUrl)}
          >
            {copied ? <p>Copied!</p> : <p>Copy</p>}
          </Button>
          <Button
            className="bg-neutralgray-950 rounded-md px-8 py-2.5"
            onClick={() => onDelete(index)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ShortenLinks;
