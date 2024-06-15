import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ weight: "500",
                                subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Millionaires",
  description: "Add some cool description here later",
};

export default function RootLayout(
  { children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        {/* <link href="https://css.gg/css" rel="stylesheet" /> */}
      </head>
      
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
