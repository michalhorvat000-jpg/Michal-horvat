export default function Home() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-b from-black via-zinc-950 to-black px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Luxury Survival. <span className="text-cyan-400">AI Villa</span>.{" "}
        <span className="text-amber-400">Real Money</span>.
      </h1>
      <p className="max-w-2xl text-zinc-300">
        Jeden měsíc. Týdenní výzvy. Vila s vlastním AI mozkem, který reaguje na
        každý tvůj krok. 50% příjmů zpátky TOP hráčům.
      </p>
      <div className="flex gap-4">
        <a href="/pricing" className="btn btn-primary">
          Zapoj se — Free Access (limited)
        </a>
        <a href="/signin" className="btn btn-secondary">
          Přihlásit
        </a>
      </div>
    </section>
  );
}
