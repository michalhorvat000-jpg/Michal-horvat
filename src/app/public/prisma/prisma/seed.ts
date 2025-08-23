import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const items = [
    {
      key: "starter",
      name: "Starter Pass",
      description: "Vstup do vily + týdenní výzvy",
      type: "one_time",
      priceCents: 1999,
      currency: "GBP",
      stripePriceId: process.env.NEXT_PUBLIC_PRICE_STARTER!,
      features: ["Access do M-VILY", "Základní questy", "Leaderboard entry"],
    },
    {
      key: "pro",
      name: "Pro Season",
      description: "Sezónní členství + bonus questy",
      type: "recurring",
      priceCents: 4999,
      currency: "GBP",
      stripePriceId: process.env.NEXT_PUBLIC_PRICE_PRO_MONTH!,
      features: ["Sezónní přístup", "Bonusové pasti", "2× XP"],
    },
    {
      key: "vip",
      name: "VIP Lifetime",
      description: "Doživotní členství + exkluzivní AI pokoje",
      type: "one_time",
      priceCents: 99900,
      currency: "GBP",
      stripePriceId: process.env.NEXT_PUBLIC_PRICE_VIP!,
      features: ["VIP pokoje", "Exkluzivní eventy", "Prize pool bonus"],
    },
  ];

  for (const it of items) {
    await prisma.package.upsert({
      where: { key: it.key },
      create: it as any,
      update: it as any,
    });
  }

  console.log("Seed complete.");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
