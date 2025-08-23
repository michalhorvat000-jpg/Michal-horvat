import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";

const PACKAGES = [
  { key: "starter", stripePriceId: process.env.NEXT_PUBLIC_PRICE_STARTER },
  { key: "pro", stripePriceId: process.env.NEXT_PUBLIC_PRICE_PRO_MONTH },
  { key: "vip", stripePriceId: process.env.NEXT_PUBLIC_PRICE_VIP },
];

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

  const { key } = await req.json();
  const pkg = PACKAGES.find((p) => p.key === key);
  if (!pkg) return NextResponse.json({ error: "Invalid package" }, { status: 400 });

  const checkout = await stripe.checkout.sessions.create({
    mode: key === "pro" ? "subscription" : "payment",
    line_items: [{ price: pkg.stripePriceId!, quantity: 1 }],
    customer_email: session.user.email,
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?status=cancel`,
    metadata: { packageKey: key },
  });

  return NextResponse.json({ url: checkout.url });
}
