import { z } from "zod";
import { procedure, router } from "../trpc";
import * as trpcNext from "@trpc/server/adapters/next";
import { db } from "@/trpc-server/db";

export const appRouter = router({
  health: procedure.query(({ ctx }) => {
    return "hello";
  }),
  firstPost: procedure.query(async ({ ctx }) => {
    return db.post.findFirst();
  }),
});

export type AppRouter = typeof appRouter;
export { trpcNext };
