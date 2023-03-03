import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import GlobalStyle from "@/styles/global";
import { SessionProvider } from "next-auth/react";
import { useApollo } from "@/utils/apollo";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = useApollo(pageProps, session);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
