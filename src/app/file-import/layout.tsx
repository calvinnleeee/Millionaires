import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./file-import.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Millionaires",
//   description: "Add some cool description here later",
// };

export default function RootLayout(
  { children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
