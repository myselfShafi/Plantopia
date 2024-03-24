import { ContextProvider } from "@/contexts/contextProvider";
import { ThemeConsumer } from "@/contexts/themeContext";
import { AdBanner } from "@/layouts/AdBanner/mainTop";
import MainLayout from "@/layouts/index";
import "@/styles/globals.css";
import { ThemeComponent } from "@/themes/theme";
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

      <ContextProvider>
        <ThemeConsumer>
          {({ lightMode }) => {
            return (
              <ThemeComponent mode={lightMode}>
                <AdBanner />
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </ThemeComponent>
            );
          }}
        </ThemeConsumer>
      </ContextProvider>
    </>
  );
}
