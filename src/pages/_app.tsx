import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import GlobalStyle from "@/styles/global";
import { SessionProvider } from "next-auth/react";
import { useApollo } from "@/utils/apollo";
import CheckoutProvider from "@/context/CheckoutProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps | any) {
  const client = useApollo(pageProps, session);
  return (
    <SessionProvider session={pageProps.session}>
      <CheckoutProvider>
        <ApolloProvider client={client}>
          <GlobalStyle />
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
      </CheckoutProvider>
    </SessionProvider>
  );
}
