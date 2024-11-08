import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal'],
})

export const metadata: Metadata = {
  title: "Focus - Portfolio",
  description: "Captures timeless moments with a passion for storytelling and an eye for detail.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}
        
      >
        {children}
      </body>
    </html>
  );
}
