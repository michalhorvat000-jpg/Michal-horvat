export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-6">🚀 Vítej ve <span className="text-indigo-400">M-VILE</span></h1>
      <p className="text-lg mb-10 text-gray-300 text-center max-w-2xl">
        Oficiální web projektu M-VILA. Připoj se k nám a buď součástí jedinečné herní a motivační komunity.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">🔥 Výzvy</h2>
          <p className="text-gray-400">Každý týden nové úkoly a soutěže, které tě posunou dál.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">💎 Členství</h2>
          <p className="text-gray-400">Získej speciální výhody díky Starter, Pro nebo VIP passu.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">🏆 Leaderboard</h2>
          <p className="text-gray-400">Porovnej své skóre s ostatními a vyhraj odměny.</p>
        </div>
      </div>
    </main>
  );
}
