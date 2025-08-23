import "./globals.css";

export const metadata = {
  title: "M-VILA 🚀",
  description: "Herní vila v Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-slate-900 text-white">
        <header className="p-4 text-2xl font-bold">
          M-VILA 🚀
        </header>
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
