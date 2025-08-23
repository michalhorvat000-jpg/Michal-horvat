import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "M-VILA 🚀",
  description: "Oficiální web M-VILA projektu",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold">M-VILA 🚀</h1>
        </header>

        {/* TADY SE VYKRESLÍ PAGE.TSX */}
        <main className="p-6">{children}</main>

        <footer className="p-4 bg-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} M-VILA Team
        </footer>
      </body>
    </html>
  );
}
