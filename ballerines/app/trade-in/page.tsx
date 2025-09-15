"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero Section - Inspired by Nike Refurbished */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">BALLERINES REFURBISHED</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Certaines ballerines ont droit à une seconde vie. Nous inspectons manuellement les articles comme neufs, 
            légèrement usés et légèrement défectueux, puis nous leur redonnons vie. 
            Trouvez ces articles dans notre boutique en ligne.
          </p>
        </div>

        {/* Concept Explanation - Nike-style process */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">FONCTIONNEMENT</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="mb-2 font-semibold">Étape 1</h3>
                <p className="text-sm text-muted-foreground">
                  Notre équipe de spécialistes inspecte les articles qui ne peuvent pas être vendus comme neufs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🧽</span>
                </div>
                <h3 className="mb-2 font-semibold">Étape 2</h3>
                <p className="text-sm text-muted-foreground">
                  Chaque produit éligible est soigneusement nettoyé et désinfecté.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="mb-2 font-semibold">Étape 3</h3>
                <p className="text-sm text-muted-foreground">
                  L'état de l'article est évalué par l'équipe : comme neuf, légèrement usé ou avec quelques imperfections.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <h3 className="mb-2 font-semibold">Étape 4</h3>
                <p className="text-sm text-muted-foreground">
                  Les produits Refurbished sont ensuite vendus à des prix imbattables. 
                  Cherchez les badges "Refurbished" sur nos produits.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Condition Grades */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">ÉTAT DES ARTICLES REFURBISHED</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-800">01</span>
                  <h3 className="font-semibold">Comme neuf</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  État parfait ou presque parfait. L'article est comme neuf et ne présente aucun signe d'usure ni défaut.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">02</span>
                  <h3 className="font-semibold">Légèrement usé</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  L'article est en excellent état et présente de légers signes d'usure ou de petites imperfections.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-800">03</span>
                  <h3 className="font-semibold">Avec quelques imperfections</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  L'article n'a aucun signe d'usure, mais présente quelques imperfections (taches, marques, décolorations, couleurs passées, etc.). 
                  Hormis ça, il est comme neuf.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16 rounded-2xl bg-secondary/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">PLUS DE DURÉE DE VIE. MOINS DE DÉCHETS.</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Certains articles Refurbished ne seront pas en état d'être vendus. Mais ce n'est pas pour autant qu'ils partiront à la décharge : 
            nous donnons ou recyclons les produits pour leur donner une seconde vie.
          </p>
        </section>

        {/* Trade-in Form */}
        <section className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-center text-2xl font-bold">REVENDRE MES BALLERINES</h2>

          {submitted ? (
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-4 h-16 w-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold">Estimation de votre crédit</h2>
                <p className="mb-4 text-lg">Nous vous créditerons environ <span className="font-bold text-primary">{submitted.estimate.toFixed(2)} €</span> en points.</p>
                <p className="text-sm text-muted-foreground">Un email de confirmation sera envoyé à {email}. Nous vous indiquerons la procédure d'envoi gratuit.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Email</label>
                    <input 
                      required 
                      type="email" 
                      value={email} 
                      onChange={(e)=>setEmail(e.target.value)} 
                      className="w-full rounded border px-3 py-2" 
                      placeholder="vous@exemple.com" 
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">État de vos ballerines</label>
                    <select value={grade} onChange={(e)=>setGrade(e.target.value)} className="w-full rounded border px-3 py-2">
                      <option value="A">A — Comme neuf (20€ de crédit)</option>
                      <option value="B">B — Bon état (15€ de crédit)</option>
                      <option value="C">C — Correct (10€ de crédit)</option>
                      <option value="D">D — Usé (5€ de crédit)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Photos (2 max)</label>
                    <input 
                      multiple 
                      accept="image/*" 
                      type="file" 
                      onChange={(e)=> setFiles(Array.from(e.target.files || []).slice(0,2))} 
                      className="w-full rounded border px-3 py-2"
                    />
                    {files.length ? (
                      <div className="mt-3 flex gap-3">
                        {files.map((f, i)=> (
                          <span key={i} className="rounded-full border px-2 py-0.5 text-xs bg-secondary">
                            {f.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <Button type="submit" className="w-full">Soumettre ma demande</Button>
                </form>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Call to Action - Inspired by Nike "Agir, ensemble" */}
        <section className="mt-16 rounded-2xl bg-primary p-12 text-center text-primary-foreground">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 h-20 w-20 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <span className="text-3xl">♻️</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold">AGIR, ENSEMBLE</h2>
            <p className="mb-6 text-lg opacity-90">
              Le saviez-vous ? Chaque paire de ballerines refurbished évite l'émission de 2,5kg de CO2. 
              Depuis notre lancement, nous avons donné une seconde vie à plus de 1000 paires.
            </p>
            <p className="mb-8 text-sm opacity-80">
              Découvrez nos dernières initiatives éco-responsables et les nouveaux moyens d'agir ensemble 
              pour protéger l'avenir de la mode durable.
            </p>
            <Button variant="secondary" size="lg">
              Rejoignez-nous
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


