import { NextApiRequest, NextApiResponse } from "next";

type Success = {
  success: boolean;
  message: string;
};

type ApiResponse<T> = T | { error: string };

const promise = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Success>>
) {
  try {
    await promise(2000);

    return res.status(200).json({
      success: true,
      message: "Payment successful",
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al cargar los productos" });
  }
}
