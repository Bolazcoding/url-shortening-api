import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/shorten", async (req, res) => {
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

    res.json({
      originalUrl: url.trim(),
      shortUrl: shortUrl.trim(),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
