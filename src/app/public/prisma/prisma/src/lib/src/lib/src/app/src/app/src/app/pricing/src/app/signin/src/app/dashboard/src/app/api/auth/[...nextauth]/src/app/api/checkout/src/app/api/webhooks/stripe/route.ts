import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "No signature" }, { status: 400 });

  const raw = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      raw,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const cs: any = event.data.object;
      const email = cs.customer_details?.email as string | undefined;
      const packageKey = cs.metadata?.packageKey as string | undefined;
      if (!email || !packageKey) return NextResponse.json({ received: true });

      const user = await prisma.user.findUnique({ where: { email } });
      const pkg = await prisma.package.findUnique({ where: { key: packageKey } });
      if (!user || !pkg) return NextResponse.json({ received: true });

      await prisma.order.create({
        data: {
          userId: user.id,
          packageId: pkg.id,
          status: "paid",
          stripeSession: cs.id,
          stripeId: (cs.payment_intent as string) ?? (cs.subscription as string) ?? cs.id,
          amountCents: cs.amount_total ?? pkg.priceCents,
          currency: (cs.currency?.toUpperCase?.() as string) ?? pkg.currency,
        },
      });

      await prisma.playerProfile.upsert({
        where: { userId: user.id },
        update: { currentTier: packageKey },
        create: { userId: user.id, username: email.split("@")[0], currentTier: packageKey },
      });
    }
  } catch (e) {
    console.error("Webhook handling failed", e);
    return NextResponse.json({ received: true, error: "handler-failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
                              }
