"use client";
import { useState } from "react";

const PACKAGES = [
  {
    key: "starter",
    name: "Starter Pass",
    description: "Vstup do vily + týdenní výzvy",
    price: 19.99,
    type: "one_time",
  },
  {
    key: "pro",
    name: "Pro Season",
    description: "Sezónní členství + bonus questy",
    price: 49.99,
    type: "recurring",
  },
  {
    key: "vip",
    name: "VIP Lifetime",
    description: "Doživotní členství + exklusivní AI místnosti",
    price: 999.0,
    type: "one_time",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  async function buy(key: string) {
    setLoading(key);
    const r = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ key }),
    });
    const data = await r.json();
    setLoading(null);
    if (data?.url) window.location.href = data.url;
    else alert(data?.error || "Něco se pokazilo");
  }

  return (
    <main className="mx-auto max-w-6xl py-14 px-4 grid gap-8">
      <h1 className="text-4xl font-bold text-center mb-6">Vyber si balíček</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {PACKAGES.map((p) => (
          <div key={p.key} className="card p-6">
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-zinc-400 mb-4">{p.description}</p>
            <div className="text-3xl font-bold mb-6">£{p.price}</div>
            <button
              disabled={loading === p.key}
              onClick={() => buy(p.key)}
              className="btn btn-primary w-full"
            >
              {loading === p.key ? "Přesměrovávám…" : "Koupit"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
