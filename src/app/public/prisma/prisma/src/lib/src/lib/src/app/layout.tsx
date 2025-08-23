import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "M-VILA Game",
  description: "Luxury Survival Challenge in Digital Villa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-zinc-100">
        <header className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-cyan-400">M-VILA</a>
          <nav className="space-x-4">
            <a href="/pricing" className="hover:text-cyan-400">Pricing</a>
            <a href="/faq" className="hover:text-cyan-400">FAQ</a>
            <a href="/terms" className="hover:text-cyan-400">Terms</a>
            <a href="/privacy" className="hover:text-cyan-400">Privacy</a>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="p-6 border-t border-zinc-800 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} M-VILA GAME. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
