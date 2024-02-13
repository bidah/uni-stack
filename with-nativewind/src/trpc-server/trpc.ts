import { initTRPC } from "@trpc/server";
import { db } from "@/trpc-server/db";

const t = initTRPC.create();

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
