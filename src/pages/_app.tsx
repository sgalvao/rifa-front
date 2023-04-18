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
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps | any) {
  const client = useApollo(pageProps, session);
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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
                  `,
                }}
              />
              <Component {...pageProps} />
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
                theme="dark"
              />
            </ApolloProvider>
          </MenuProvider>
        </CheckoutProvider>
      </SessionProvider>
    </>
  );
}
