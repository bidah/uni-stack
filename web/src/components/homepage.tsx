import Link from "next/link";
import Image from "next/image";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "./ui/hover-effect";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import RetroGrid from "./magicui/retro-grid";
import TextRevealByWord from "./magicui/text-reveal";

const items = [
  {
    title: "Expo v50",
    description:
      "Framework for making universal native apps with React Native. This Expo setup is configured to be multi platform. It runs on Android, iOS, and the web.",
    link: "https://expo.dev",
    svg: "expo-icon",
  },
  {
    title: "Expo Router v3",
    description:
      "Expo Router is a versatile router for React Native and web apps based on file-system routing that also support API routes.",
    link: "https://docs.expo.dev/router/introduction/",
    svg: "expo-router-icon",
  },
  {
    title: "Prisma v5.9",
    description:
      "Prisma enhances the developer experience in working with your database, offering an intuitive data model, automated migrations, type-safety, and auto-completion.",
    link: "https://www.prisma.io",
    svg: "prisma-icon",
  },
  {
    title: "tRPC v11",
    description:
      "End-to-end typesafe APIs. tRPC is like using an SDK for your API's server code, giving you confidence in your endpoints",
    link: "https://trpc.io/",
    svg: "trpc-icon",
  },
  {
    title: "Nativewind v4 • Tamagui • gluestack-ui",
    description:
      "Cherry pick your UI driver. We have 3 options which bring in the best configurations for your app to have a strong theme setup and UI.",
    links: [
      {
        title: "Nativewind",
        link: "https://www.nativewind.dev/v4/overview",
      },
      {
        title: "Tamagui",
        link: "http://www.tamagui.dev",
      },
      {
        title: "gluestack-ui",
        link: "https://gluestack.io/ui/docs/overview/introduction",
      },
    ],
  },
  {
    title: "Typescript v5",
    description:
      "TypeScript improves codebase by adding static typing, enhanced tooling, better scalability, and easier collaboration, resulting in more maintainable and reliable software. ",
    link: "https://www.typescriptlang.org",
    svg: "typescript-icon",
  },
];
export function Homepage() {
  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white  bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900  text-gray-100">
          UNI STACK
        </h1>
        <div className="flex space-x-4">
          <Link
            className="text-gray-900 hover:text-gray-600  text-gray-100  hover:text-gray-400"
            href="https://twitter.com/bidah"
            target="_blank"
          >
            <Image
              src="./x-twitter.svg"
              alt="SVG Image"
              width={30}
              height={30}
            />
          </Link>
          <Link
            className="text-gray-900 hover:text-gray-600  text-gray-100  hover:text-gray-400"
            href="https://github.com/bidah/uni-stack"
            target="_blank"
          >
            <Image src="./github.svg" alt="SVG Image" width={30} height={30} />
          </Link>
        </div>
      </header>

      <section className="w-full relative flex justify-center py-12 md:py-24 lg:py-48">
        <RetroGrid />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 mt-16 md:mt-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
                <span className="text-xl md:text-4xl lg:text-5xl">
                  <span>️⚛</span>
                  <span className="ml-4">💻</span>
                  <span className="ml-1">📱</span>
                  <span className="ml-1"></span>
                </span>
                typesafe setup to build fullstack React Native universal apps
              </h1>

              {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl  text-gray-400">
                Running everywhere using Expo, Trpc, Prisma and Nativewind.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-6 md:py-12 lg:py-24 md:pt-0 lg:pt-0">
        <div className="container px-4 md:px-6">
          <HoverEffect items={items} />
        </div>
      </section>

      <section className="w-full flex justify-center  bg-white">
        <TextRevealByWord text="With Uni-stack's Expo setup you get to share routing, component logic and UI to it's fullest but also can opt-in to create components specific to any platform for more fined grained control whenever you need to. Everything is typesafe from database calls, routing, components, queries and mutations. It all fits together nicely in a simple stack. No monorepo setup needed. What you get is an enhanced React Native app that works on IOS, Android and the web backed in with the best multi-platform DX." />
      </section>
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-black text-4xl font-bold tracking-tighter md:text-5xl/tight">
              get started now
            </h2>
            <div className="flex items-center justify-between bg-white text-black rounded-md px-4 py-3">
              <span className="text-4xl font-light">npx create-uni-app</span>
              <span className="w-6" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        navigator.clipboard.writeText("npx create-uni-app")
                      }
                    >
                      <CopyIcon className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="animate-fadeIn">
                    Copy to clipboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 pt-12 text-xl text-center align-center">
        <p className="text-black">
          →{" "}
          <Link
            href="http://www.x.com/bidah"
            className="underline"
            target="_blank"
          >
            Follow ROFI on x.com
          </Link>{" "}
          for updates on the project and universal app development
        </p>
      </footer>
    </main>
  );
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9" />
    </svg>
  );
}
