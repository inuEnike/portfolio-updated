import type { Metadata } from "next";
import {
  Dancing_Script,
  Geist,
  Geist_Mono,
  Orbitron,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sorceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${sorceSans3.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google-site-verification"
          content="aswlCwP_vjH1tTrkhQOav4t1bhewj5U2kzRmDodIfO8"
        />
      </head>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Imperium",
            alternateName: "Inu George Enike",
            jobTitle: "Full-Stack Developer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Auchi",
              addressCountry: "Nigeria",
            },
          }),
        }}
      />
      <body className="">{children}</body>
    </html>
  );
}
