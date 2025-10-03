import fs from "fs";
import path from "path";
import axios from "axios";

const htmlFile = "./index.html";
const outputDir = "./assets";
const BASE_URL = "https://clso.mx"; // base for relative URLs

// Ensure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read HTML
const htmlContent = fs.readFileSync(htmlFile, "utf-8");

// Regex to extract src and href
const regex = /(?:src|href)\s*=\s*["']([^"']+)["']/gi;

let match;
const urls = [];

while ((match = regex.exec(htmlContent)) !== null) {
  let url = match[1];

  // Skip anchors and inline JS/CSS
  if (url.startsWith("#") || url.startsWith("javascript:")) continue;

  // If relative URL, prepend base
  if (!url.startsWith("http")) {
    url = BASE_URL + (url.startsWith("/") ? "" : "/") + url;
  }

  urls.push(url);
}

console.log(`Found ${urls.length} assets.`);

// Download function
const downloadFile = async (url) => {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    // Preserve folder structure under ./assets
    const { pathname } = new URL(url);
    const folderPath = path.join(outputDir, path.dirname(pathname));
    const fileName = path.basename(pathname);
    const filePath = path.join(folderPath, fileName);

    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(filePath, response.data);
    console.log(`✅ Saved: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error downloading ${url}:`, err.message);
  }
};

// Download all sequentially
(async () => {
  for (const url of urls) {
    await downloadFile(url);
  }
})();
