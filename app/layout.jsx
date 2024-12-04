import localFont from "next/font/local";
import "./globals.css";
import {Outfit} from 'next/font/google'
import Providere from "./Providere";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "../components/ui/sonner";


const outfit = Outfit({subsets:['latin']})

export const metadata = {
  title: "PDF-to-Notes",
  description: "This app helps to answer questions based on pdf provided",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Providere>
        {children}
        </Providere>
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
