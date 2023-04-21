import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/helpers/Providers";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <Analytics />
    </Providers>
  );
}
