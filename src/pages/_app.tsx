import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NavBar from "@/components/NavBar/NavBar";

import PanicButton from "@/components/panicbutton/panicbutton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <NavBar />
        <PanicButton />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
