import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vite + React",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="p-12 bg-slate-400 flex justify-between items-center">
            <div className="logo">
              <a href="/" className="font-bold shop-logo">React Shop</a>
            </div>
            <div className="right-bar">
              <a href="/checkout" className="mr-5 border p-2 text-slate-50">Cart</a>
              <a href="https://github.com/Siza36/react-shop" target="_blank" className="border p-2 text-slate-50">GitHub</a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
