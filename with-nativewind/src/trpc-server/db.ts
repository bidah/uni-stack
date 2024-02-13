import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient({
  log: ["query", "error", "warn"],
});
