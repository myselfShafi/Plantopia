import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  const category = req.query.category;
  const filePath = path.join(process.cwd(), "src", "content", "mockData.json");
  const currentData = await fs.readFile(filePath);

  const data = JSON.parse(currentData);

  if (!currentData) {
    res.status(404).json({ message: "data not available" });
    return;
  }

  if (req.method === "GET") {
    if (data) {
      res.status(200).json(data[category]);
    } else {
      res.status(404).json({ message: "data not found" });
    }
  }
}
