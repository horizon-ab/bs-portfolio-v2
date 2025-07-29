import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import { NavBar } from "@/components/nav"
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: '%s | baysalt.dev',
    default: 'baysalt.dev'
  },
  description: 'a simple portfolio',
  openGraph: {
    title: 'baysalt.dev',
    description: 'a simple portfolio',
    url: 'https://baysalt.dev',
    siteName: 'baysalt.dev',
    locale: 'en_US',
    type: 'website',
  },
  
};

export const viewport: Viewport = {
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} antialiased`}
      >
        <NavBar/ >
        {children}
      </body>
    </html>
  );
}
