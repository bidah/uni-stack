import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://uni-stack.vercel.app/" />
        <meta property="twitter:title" content="uni stack" />
        <meta
          property="twitter:description"
          content="typesafe setup to build fullstack expo universal native apps"
        />
        <meta
          property="twitter:image"
          content="https://uni-stack.vercel.app/uni-stack-banner.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
