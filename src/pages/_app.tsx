import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import GlobalStyle from "@/styles/global";
import { SessionProvider } from "next-auth/react";
import { useApollo } from "@/utils/apollo";
import CheckoutProvider from "@/context/CheckoutProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import * as fbq from "@/utils/facebook-pixel";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MenuProvider from "@/context/MenuProvider";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import io from "socket.io-client";
const socket = io(process.env.NEXT_PUBLIC_SOCKET ?? "http://localhost:9000");

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps | any) {
  const client = useApollo(pageProps, session);
  const router = useRouter();
  useEffect(() => {
    const addUserToCount = () => {
      socket.emit("addUserToCount");
    };

    addUserToCount();

    return () => {
      socket.close();
    };
  }, []);

  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {},
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {},
    },
  });

  useEffect(() => {
    fbq.pageview();
    fbq.viewContent();

    const handleRouteChange = () => {
      fbq.pageview();
      fbq.viewContent();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NextNProgress
        color="#38217F"
        options={{ easing: "ease", showSpinner: false }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <CheckoutProvider>
          <MenuProvider>
            <ApolloProvider client={client}>
              <NextThemesProvider
                defaultTheme="light"
                attribute="class"
                value={{
                  light: lightTheme.className,
                  dark: darkTheme.className,
                }}
              >
                <GlobalStyle />

                <Script
                  id="fb-pixel"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                   
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', ${fbq.FB_PIXEL_ID});
                        fbq('track', 'PageView');
                   
             
                `,
                  }}
                />
                <NextUIProvider>
                  <Component {...pageProps} />
                </NextUIProvider>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  limit={3}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </NextThemesProvider>
            </ApolloProvider>
          </MenuProvider>
        </CheckoutProvider>
      </SessionProvider>
    </>
  );
}
