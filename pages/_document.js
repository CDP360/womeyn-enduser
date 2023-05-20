import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
        />
      </body>
    </Html>
  )
}
