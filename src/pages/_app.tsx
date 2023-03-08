import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import GlobalStyle from "@/styles/global";
import { SessionProvider } from "next-auth/react";
import { useApollo } from "@/utils/apollo";
import CssBaseline from "@mui/material/CssBaseline";
import CheckoutProvider from "@/context/CheckoutProvider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = useApollo(pageProps, session);
  return (
    <SessionProvider session={pageProps.session}>
      <CheckoutProvider>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </CheckoutProvider>
    </SessionProvider>
  );
}
