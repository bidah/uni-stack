/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ObKvHXx87gt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function StarUs() {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStarCount() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/bidah/uni-stack"
        );
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    }

    fetchStarCount();
  }, []);

  return (
    <a
      href="https://github.com/bidah/uni-stack"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-input bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      <GithubIcon className="h-5 w-5" />
      <span>Star on GitHub</span>
      <svg
        title="star"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="black"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5 12 2" />
      </svg>
      <span className="ml-0 rounded-md bg-muted py-1 text-sm text-muted-foreground">
        {starCount !== null ? starCount.toLocaleString() : ""}
      </span>
    </a>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      title="github icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      title="x icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
