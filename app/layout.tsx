import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/lib/store/ReduxProvider";
import ScrollControl from "@/components/ScrollControl";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareConnect | Better health. Better living.",
  description:
    "Find trusted doctors, book appointments, and get quality healthcare all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}>
      <body className="page-shell min-h-full flex flex-col text-[#1f3346] selection:bg-[#12b5a8] selection:text-white">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollControl />
        </ReduxProvider>
      </body>
    </html>
  );
}
