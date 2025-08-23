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
      <body>{children}</body>
    </html>
  );
}
