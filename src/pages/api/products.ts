import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";

type Product = {
  id: number;
  name: string;
  price: number;
};

type ApiResponse<T> = T | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Product[]>>
) {
  try {
    const filePath = join(process.cwd(), "products.json");
    const productsData = readFileSync(filePath, "utf-8");
    const products = JSON.parse(productsData) as Product[];

    res.status(200).json(products);
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    res.status(500).json({ error: "Error al cargar los productos" });
  }
}
