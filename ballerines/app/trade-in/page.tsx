"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TradeInPage() {
  const [email, setEmail] = React.useState("");
  const [grade, setGrade] = React.useState("B");
  const [files, setFiles] = React.useState<File[]>([]);
  const [submitted, setSubmitted] = React.useState<{ estimate: number } | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Estimation fictive: A=20€, B=15€, C=10€, D=5€
    const map: Record<string, number> = { A: 20, B: 15, C: 10, D: 5 };
    setSubmitted({ estimate: map[grade] || 10 });
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-semibold">Programme de reprise</h1>
        <p className="mb-6 text-muted-foreground">Revendez vos anciennes ballerines et recevez des points de réduction utilisables sur vos prochaines commandes.</p>

        {submitted ? (
          <div className="rounded-2xl border p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold">Estimation de votre crédit</h2>
            <p className="mb-4">Nous vous créditerons environ <span className="font-semibold">{submitted.estimate.toFixed(2)} €</span> en points.</p>
            <p className="text-sm text-muted-foreground">Un email de confirmation sera envoyé à {email}. Nous vous indiquerons la procédure d'envoi gratuit.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border p-6">
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded border px-3 py-2" placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">État</label>
              <select value={grade} onChange={(e)=>setGrade(e.target.value)} className="w-full rounded border px-3 py-2">
                <option value="A">A — Comme neuf</option>
                <option value="B">B — Bon</option>
                <option value="C">C — Correct</option>
                <option value="D">D — Usé</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Photos (2 max)</label>
              <input multiple accept="image/*" type="file" onChange={(e)=> setFiles(Array.from(e.target.files || []).slice(0,2))} />
              {files.length ? (
                <div className="mt-3 flex gap-3">
                  {files.map((f, i)=> (
                    <span key={i} className="rounded-full border px-2 py-0.5 text-xs">{f.name}</span>
                  ))}
                </div>
              ) : null}
            </div>
            <Button type="submit" className="w-full">Soumettre ma demande</Button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}


