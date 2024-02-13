import { ExpoRequest, ExpoResponse } from "expo-router/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc-server/routers/_app";

export async function GET(req: ExpoRequest) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req as unknown as Request,
    router: appRouter,
    createContext: () => ({}),
  });
}

export async function POST(req: ExpoRequest) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req as unknown as Request,
    router: appRouter,
    createContext: () => ({}),
  });
}
