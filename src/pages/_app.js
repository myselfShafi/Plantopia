import "@/styles/globals.css";
import { theme } from "@/themes/theme";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plantopia</title>
        <meta
          name="description"
          content="A beutiful Plant domestic e-commerce, best suitable for all your plant needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
