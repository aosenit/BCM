import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html className="scroll-smooth scroll-p-[60px]">
        <Head />
        <body className="bg-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
