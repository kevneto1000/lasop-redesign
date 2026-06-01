import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "LASOP",
  description: "Lagos School of Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${plusJakarta.variable} ${inter.variable}`}>
        <Navbar />

        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}