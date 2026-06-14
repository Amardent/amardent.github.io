import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import TermlyCMP from "@/components/common/TermlyCMP";
import "@/lib/termly-config";
import "@/styles/globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amardent",
  description: "Revolutionizing dental care through technology and innovation.",
  icons: {
    icon: "https://assets-global.website-files.com/65541d6617fb12568eb71dd9/656a4d02a14ac7bdd497cc5d_transparent_logo_small.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <ModalProvider>
          <TermlyCMP />
          <Header />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
