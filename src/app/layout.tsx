import "./global.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project Journal",
  description: "Project Journal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
