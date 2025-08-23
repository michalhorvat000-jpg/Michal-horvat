export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Vítej v <span className="text-indigo-400">M-VILA 🚀</span>
      </h1>
      <p className="mb-6 text-lg">
        Tohle je homepage. Pokud tohle vidíš, náš web funguje a můžeš začít stavět svou vilu 🏠
      </p>
      <a
        href="/hra"
        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-semibold transition"
      >
        Začít hru 🎮
      </a>
    </div>
  );
}
