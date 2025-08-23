export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-4xl font-extrabold mb-6">
        Vítej v <span className="text-indigo-400">M-VILA 🚀</span>
      </h2>
      <p className="text-lg max-w-xl mb-6">
        Tohle je testovací homepage. Pokud tohle vidíš, znamená to, že deployment
        jede správně a můžeš začít tvořit plnohodnotnou webovku. 🔥
      </p>
      <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold">
        Začít hru 🎮
      </button>
    </section>
  );
}
