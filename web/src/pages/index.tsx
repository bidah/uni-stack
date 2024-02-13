import Image from "next/image";
import { Inter } from "next/font/google";
import { Homepage } from "@/components/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Homepage />;
    </div>
  );
}
