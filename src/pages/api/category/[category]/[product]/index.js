import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  const { category, product } = req.query;

  const filePath = path.join(process.cwd(), "src", "content", "mockData.json");
  const currentData = await fs.readFile(filePath);

  if (!currentData) {
    res.status(404).json({ message: "data not available" });
  } else {
    const data = JSON.parse(currentData);

    if (req.method === "GET") {
      if (data[category] && Array.isArray(data[category].data)) {
        const validUuid = data[category]?.data.some(
          (obj) => obj.uuid === product
        );
        if (!validUuid) {
          res.status(404).json({ message: "product id is invalid" });
        }
        data[category]?.data.filter((obj) => {
          if (obj.uuid === product) {
            res.status(200).json(obj);
          }
        });
      } else {
        res.status(404).json({ message: "data not found" });
      }
    }
  }
}
