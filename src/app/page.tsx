export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-yellow-400 text-center">
        M-VILA GAME
      </h1>

      {/* Subtitle */}
      <p className="text-lg mb-8 text-center max-w-2xl">
        Enter the world’s most luxurious survival challenge. 
        Weekly puzzles, traps and secret missions await you. 
        Only the smartest and bravest will win.
      </p>

      {/* Call to Action */}
      <a
        href="#"
        className="px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-800 transition text-lg font-semibold"
      >
        Join the Game
      </a>

      {/* Contact */}
      <p className="mt-12 text-gray-400 text-sm">
        Contact: <span className="text-white">mvilagamedeluxe@gmail.com</span>
      </p>
    </main>
  );
}
