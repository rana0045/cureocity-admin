import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "@/components/header/TopBar";
const inter = Inter({ subsets: ["latin"] });
import { NextAuthProvider } from "./provider/NextAuthProvider";
export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <TopBar />
            <NextAuthProvider>{children}</NextAuthProvider>
         </body>
      </html>
   );
}