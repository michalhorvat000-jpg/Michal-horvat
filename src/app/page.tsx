// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero sekce */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Vítej v <span className="text-indigo-400">M-VILA 🚀</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Oficiální web projektu M-VILA. Připoj se do světa výzev, her a exkluzivních odměn.
        </p>
        <a
          href="#join"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Vstoupit do vily
        </a>
      </section>

      {/* Sekce výhod */}
      <section id="join" className="py-24 px-6 bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center mb-12">Proč M-VILA?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🔥 Výzvy</h3>
            <p className="text-gray-400">
              Každý týden nové questy a úkoly, které tě posunou na vyšší level.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🏆 Leaderboard</h3>
            <p className="text-gray-400">
              Soutěž s ostatními a získej své místo mezi nejlepšími hráči.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">💎 Odměny</h3>
            <p className="text-gray-400">
              Získej exkluzivní odměny, přístup do VIP zón a prize pool bonusy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 mt-12 text-gray-500">
        © {new Date().getFullYear()} M-VILA Team. Všechna práva vyhrazena.
      </footer>
    </main>
  );
}
