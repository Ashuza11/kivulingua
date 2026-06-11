import "../globals.css";

import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "KivuLingua - African Language AI",
  description: "Preserving Eastern Congo Bantu languages through AI and community-driven datasets",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/favicon-96x96.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/favicon-96x96.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}