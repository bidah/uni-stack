import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardIcon,
} from "@/components/ui/card";
import { Button } from "./button";
import TrpcIcon from "../../../public/trpc-icon.svg";
import ExpoIcon from "../../../public/expo-icon.svg";
import TypescriptIcon from "../../../public/typescript-icon.svg";
import ExpoRouterIcon from "../../../public/expo-router-icon.svg";
import PrismaIcon from "../../../public/prisma-icon.svg";

const ICONS = {
  "expo-router-icon": <ExpoRouterIcon width="40" height="40" fill="black" />,
  "expo-icon": <ExpoIcon width="40" height="40" />,
  "typescript-icon": <TypescriptIcon width="40" height="40" />,
  "trpc-icon": <TrpcIcon width="40" height="40" />,
  "prisma-icon": <PrismaIcon width="40" height="40" />,
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    links?: Array<{ title: string; link: string }>;
    svg?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        return item.links ? (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-200   block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <_Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.description}
                <br />
                {item.links?.map((linkItem, linkIdx) => (
                  <Link href={linkItem.link} target="_blank" key={linkIdx}>
                    →&nbsp;
                    <Button
                      size="sm"
                      variant="link"
                      className="pl-0 text-black"
                    >
                      {linkItem.title}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </_Card>
          </div>
        ) : (
          <Link
            // onClick={(e) => (!item.link ? e.preventDefault() : "")}
            href={item?.link ?? ""}
            target="_blank"
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-200  block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <_Card>
              {/* <CardIcon>{item.svg && item.svg()}</CardIcon> */}
              <CardIcon>
                {/* <ExpoIcon width="40" height="40" /> */}
                {item.svg && ICONS[item?.svg]}
              </CardIcon>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
            </_Card>
          </Link>
        );
      })}
    </div>
  );
};

export const _Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-black rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent   relative z-20 border-gray-200",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const _CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const _CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
