"use server";
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";

// Get the latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  });

  // Convert Decimal fields to string
  const formattedData = data.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString()
  }));

  return convertToPlainObject(formattedData);
}
