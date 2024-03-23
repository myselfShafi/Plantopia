import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "content", "mockData.json");
const currentData = fs.readFileSync(filePath, "utf-8");

export function getAllCategories() {
  if (!currentData) {
    return { message: "data not available" };
  } else {
    const data = JSON.parse(currentData);
    const categoriesArr = Object.keys(data);
    return categoriesArr;
  }
}

export function getProductsByCategory(category) {
  if (!currentData) {
    return { message: "data not available" };
  } else {
    const data = JSON.parse(currentData);
    return data[category];
  }
}

export function getProductsData(category, uuid) {
  if (!currentData) {
    return { message: "data not available" };
  } else {
    const data = JSON.parse(currentData);
    const validUuid = data[category]?.data.some((obj) => obj.uuid === uuid);
    if (!validUuid) {
      return { message: "product id is invalid" };
    }
    const product = data[category]?.data.find((obj) => obj.uuid === uuid);

    return product;
  }
}
