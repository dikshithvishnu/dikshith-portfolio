import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import { ThemeProvider } from "../lib/context/theme-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dikshith Vishnuvardhan",
  description: "Worcester, MA 01610",
  openGraph: {
    title: "Dikshith Vishnuvardhan",
    description: "Worcester, MA 01610",
    images: `/Dikshith.jpeg`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className={`${inter.className} w-screen min-h-screen overflow-x-hidden`}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
    </ThemeProvider>
  );
}
