import "../global.css";
import { Slot } from "expo-router";
import Providers from "@/providers";

export default function Layout() {
  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
