import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const session = await auth();
  const email = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email },
    include: { profile: true, orders: { orderBy: { createdAt: "desc" } } },
  });

  const tier = user?.profile?.currentTier || "free";

  return (
    <main className="mx-auto max-w-6xl p-6 grid gap-6">
      <h1 className="text-3xl font-bold mb-4">Tvoje M-VILA</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Stav účtu</h2>
          <p>
            Aktivní tier:{" "}
            <span className="font-semibold uppercase">{tier}</span>
          </p>
          <a href="/pricing" className="underline text-cyan-400">
            Upgrade / koupit balíček
          </a>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Poslední objednávky</h2>
          <ul className="text-sm text-zinc-300 space-y-2">
            {user?.orders?.length ? (
              user.orders.map((o) => (
                <li
                  key={o.id}
                  className="flex justify-between border-b border-zinc-800 pb-2"
                >
                  <span>{o.status}</span>
                  <span>£{(o.amountCents / 100).toFixed(0)}</span>
                </li>
              ))
            ) : (
              <li>Žádné objednávky zatím.</li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
