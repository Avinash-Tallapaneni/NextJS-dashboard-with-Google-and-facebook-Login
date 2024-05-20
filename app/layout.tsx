import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Dashboard",
  description:
    "A Next.js dashboard built using Shadcn, Tailwind CSS, with Google and Facebook login integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" class="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
