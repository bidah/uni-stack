import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/trpc-server/routers/_app";

export const trpc = createTRPCReact<AppRouter>();
