import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"
          />
        </ModalProvider>
      </body>
    </html>
  );
}
