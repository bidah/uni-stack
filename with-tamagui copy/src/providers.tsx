import { trpc } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";

function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:8081/api/trpc",
        }),
      ],
    })
  );

  return (
    <TamaguiProvider config={config}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    </TamaguiProvider>
  );
}

export default Providers;
