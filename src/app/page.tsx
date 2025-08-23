// src/app/page.tsx
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-extrabold mb-4">
        Vítej v <span className="text-indigo-400">M-VILA 🚀</span>
      </h2>
      <p className="text-lg max-w-xl mb-6 text-center">
        Tohle je homepage. Pokud tohle vidíš, náš web konečně funguje 
        a můžeš začít stavět plnohodnotnou vilu 🏠
      </p>
      <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg shadow-md">
        Začít hru 🎮
      </button>
    </section>
  );
}
