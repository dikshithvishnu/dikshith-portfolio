import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import { ThemeProvider } from "../lib/context/theme-context";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Dikshith Vishnuvardhan | ${new Date().getFullYear()}`,
  description: `Worcester, MA 01610`,
  openGraph: {
    title: `Dikshith Vishnuvardhan | ${new Date().getFullYear()}`,
    description: `Worcester, MA 01610`,
    images: `/Dikshith.jpeg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-NDJVW2MK" />
        <GoogleAnalytics gaId="G-V0T3TSN7T6" />
        <body
          className={`${inter.className} w-screen min-h-screen overflow-x-hidden`}
        >
          <Header />
          {children}
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  );
}
