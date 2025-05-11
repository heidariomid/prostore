"use server";
import { convertToPlainObject } from "../utils";
import { prisma } from "@/db/prisma";
// Get the latest products
export async function getLatestProducts() {
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

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug }
  });
}
