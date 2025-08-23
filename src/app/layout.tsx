// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-5xl font-bold mb-6">🚀 Vítej v M-VILA</h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        Oficiální stránka projektu M-VILA. Připoj se k naší hře a objevuj nové
        výzvy, levely a odměny. Tohle je jen začátek…
      </p>

      <a
        href="#"
        className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 transition text-lg font-semibold"
      >
        Začni hrát
      </a>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} M-VILA Team
      </footer>
    </main>
  );
}
