export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">M-VILA GAME</h1>

      {/* Subtitle */}
      <p className="text-lg mb-8 text-center max-w-xl">
        Enter the world’s most luxurious survival challenge. <br />
        Weekly puzzles, traps and secret quests. <br />
        Only the smartest and bravest will win. 
      </p>

      {/* Call to Action */}
      <a
        href="#"
        className="px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-800 transition"
      >
        Join the Game
      </a>

      {/* Contact */}
      <p className="mt-10 text-sm text-gray-400">
        Contact: mvilagamedeluxe@gmail.com
      </p>
    </main>
  )
}
