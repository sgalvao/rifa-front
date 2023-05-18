/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
import { FB_PIXEL_ID } from "@/utils/facebook-pixel";
import { CssBaseline } from "@nextui-org/react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;1,100&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="facebook-domain-verification"
            content="c5ji503c1wvzags27zzf6rvmorzh3r"
          />
        </Head>
        <body>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt="facebook pixel"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
