import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">
        Vítej v <span className="text-indigo-400">M-VILA 🚀</span>
      </h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Tohle je homepage. Pokud tohle vidíš, náš web konečně funguje a můžeš
        začít stavět plnohodnotnou vilu 🏡
      </p>
      <Link href="/game">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg mt-6 flex items-center gap-2">
          Začít hru 🎮
        </button>
      </Link>
    </main>
  );
}
