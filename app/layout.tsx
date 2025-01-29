import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn( { subsets: [ "latin", "arabic" ] } );

export const metadata: Metadata = {
  title: "BMS Co.",
  description: "هوشمندسازی برای همه",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={ `${ vazirmatn.className } overflow-auto w-screen max-w-full` }
      >
        { children }
      </body>
    </html>
  );
}