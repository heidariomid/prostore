// filepath: /Users/omid/Developer/Github/prostore/test-prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    console.log("Prisma Client connected successfully.");
  } catch (error) {
    console.error("Error connecting Prisma Client:");
  } finally {
    await prisma.$disconnect();
  }
}

test();
