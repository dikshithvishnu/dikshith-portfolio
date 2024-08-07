import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import { ThemeProvider } from "../lib/context/theme-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ pathname }: { pathname: string }): Promise<Metadata> {
  const pageName = pathname === "/" ? "Home" : pathname?.split("/").pop()?.replace("-", " ");
  const title = `Dikshith | ${pageName ? pageName?.charAt(0).toUpperCase() + pageName?.slice(1) : ''}`;
  const description = `Worcester, MA 01610`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: `/Dikshith.jpeg`,
    },
  };
}

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
