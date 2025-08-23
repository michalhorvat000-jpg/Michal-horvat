"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await signIn("email", { email, callbackUrl: "/dashboard" });
    setSent(true);
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <form
        onSubmit={submit}
        className="card w-full max-w-md p-6 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold">Přihlášení</h1>
        <p className="text-sm text-zinc-400">
          Pošleme ti magický odkaz na e-mail.
        </p>
        <input
          type="email"
          placeholder="tvuj@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="btn btn-primary w-full">
          Poslat odkaz
        </button>
        {sent && (
          <p className="text-xs text-zinc-400">
            Zkontroluj e-mail (může být i ve Spamu).
          </p>
        )}
      </form>
    </main>
  );
}
