// src/app/page.tsx

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-4xl font-extrabold mb-6">
        Vítej v <span className="text-indigo-400">M-VILE 🚀</span>
      </h2>

      <p className="text-lg max-w-xl mb-6">
        Tohle je homepage. Pokud tohle vidíš, všechno funguje správně 
        a můžeš začít stavět plnohodnotnou webovou aplikaci. 💻
      </p>

      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
        Začít hru 🎮
      </button>
    </section>
  );
}
