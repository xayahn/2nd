import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-great-vibes" 
});

export const metadata: Metadata = {
  title: "For Red",
  description: "Happy 2nd Monthsary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${greatVibes.variable} antialiased bg-[#fdfbf7]`}>
        {children}
      </body>
    </html>
  );
}