import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        error: "URL is required.",
      });
    }

    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
        url.trim(),
      )}`,
    );

    const shortUrl = await response.text();

    if (!response.ok || !shortUrl.trim()) {
      return res.status(500).json({
        error: "Unable to shorten this URL.",
      });
    }

    return res.status(200).json({
      originalUrl: url.trim(),
      shortUrl: shortUrl.trim(),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}
