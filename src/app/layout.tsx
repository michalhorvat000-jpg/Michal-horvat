// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "M-VILA 🚀",
  description: "Oficiální web M-VILA projekt",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800 shadow">
          <h1 className="text-xl font-bold">M-VILA 🚀</h1>
        </header>

        <main className="p-6">
          {children} {/* Tady se vloží page.tsx */}
        </main>

        <footer className="p-4 bg-gray-800 text-center">
          © {new Date().getFullYear()} M-VILA Team
        </footer>
      </body>
    </html>
  );
}
